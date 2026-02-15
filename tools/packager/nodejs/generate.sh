#!/bin/bash

PROTO_DIR=$OUT_DIR/protobuf
OUT=$OUT_DIR/dist/nodejs
PROTO_OUT=$OUT/proto

setup() {
    echo "Installing dependencies..."
    npm install
    export PATH="$PATH:$(npm root)/.bin"
    
    echo "Cleaning and creating out directory... $OUT"
    rm -rf $OUT
    mkdir -p $OUT
    
    echo "Setup completed"
}

copy_assets() {
    echo "Coping assets..."

    cp -r assets/* $OUT/

    find $OUT -type f -name "*.ts" \
        -exec sed -i '/^[[:space:]]*\/\/[[:space:]]*@ts-/d' {} +
}

generate_package() {
    echo "Copying package files..."
    cp package.json $OUT/package.json
    cp readme.md $OUT/readme.md

    if [ -n "$PACKAGE_OWNER" ]; then
        echo "Setting package name($PACKAGE_OWNER/$PACKAGE_NAME)..."
        npm pkg set name="$PACKAGE_OWNER/$PACKAGE_NAME" --prefix $OUT
    fi

    echo "Injecting version($PACKAGE_VERSION)..."
    npm pkg set version="$PACKAGE_VERSION" --prefix $OUT
    sed -i 's/{{WA_VERSION}}/'"$PACKAGE_VERSION"'/g' $OUT/readme.md
}

generate_definitions() {
    local name=$1
    local script=$2
    local input=$3
    local output=$4

    echo "Generating $name definitions..."

    mkdir -p "$(dirname "$output")"

    node $(dirname "$0")/scripts/$script "$input" "$output" || {
        echo "Error: $name generation failed"
        exit 1
    }
}

generate_all_definitions() {
    generate_definitions \
        "Version constants" "generate.js" \
        "$OUT_DIR/version.json" "$OUT/index.ts"

    generate_definitions \
        "Main constants" "generate.js" \
        "$OUT_DIR/main.json" "$OUT/index.ts"

    generate_definitions \
        "GraphQL" "generate-graphql.js" \
        "$OUT_DIR/graphql" "$OUT/graphql/index.ts"

    generate_definitions \
        "Stanza" "generate-stanza.js" \
        "$OUT_DIR/stanza" "$OUT/stanza/index.ts"

    generate_definitions \
        "JID constants" "generate.js" \
        "$OUT_DIR/jid.json" "$OUT/jid/constants.ts"

    generate_definitions \
        "Binary constants" "generate.js" \
        "$OUT_DIR/binary.json" "$OUT/binary/constants.ts"

    generate_definitions \
        "Message constants" "generate.js" \
        "$OUT_DIR/message.json" "$OUT/message/constants.ts"

    generate_definitions \
        "Media constants" "generate.js" \
        "$OUT_DIR/media.json" "$OUT/media/constants.ts"

    generate_definitions \
        "Newsletter constants" "generate.js" \
        "$OUT_DIR/newsletter.json" "$OUT/newsletter/constants.ts"

    generate_definitions \
        "Chat constants" "generate.js" \
        "$OUT_DIR/chat.json" "$OUT/chat/constants.ts"

    generate_definitions \
        "Group constants" "generate.js" \
        "$OUT_DIR/group.json" "$OUT/group/constants.ts"

    generate_definitions \
        "Privacy constants" "generate.js" \
        "$OUT_DIR/privacy.json" "$OUT/privacy/constants.ts"
}

compile_proto() {
    echo "Compiling Protobuf files..."
    mkdir $PROTO_OUT
    
    pids=()
    
    for protoFile in $PROTO_DIR/*.proto; do
        (
            protoc \
            --es_out $PROTO_OUT \
            --es_opt target=ts \
            --proto_path $PROTO_DIR \
            "$protoFile"
        ) &
        pids+=($!)
    done
    
    for pid in "${pids[@]}"; do
        wait $pid || {
            echo "Error: protoc compilation failed"
            exit 1
        }
    done
}

compile_ts() {
    echo "Compiling TypeScript files..."
    
    tsFiles=$(find $OUT -type f -name "*.ts")
    
    ln -s "$(pwd)/node_modules" "$OUT/node_modules"

    tsc $tsFiles \
    --declaration \
    --target es2022 \
    --lib es2022 \
    --module commonjs \
    --esModuleInterop \
    --skipLibCheck \
    --types node \
    --outdir $OUT \
    || {
        echo "Error: TypeScript compilation failed"
        exit 1
    }
    
    echo "Removing TypeScript source files..."
    rm $tsFiles
}

minify() {
    echo "Minifying JavaScript files..."
    
    pids=()
    
    for filePath in $OUT/**/*.js; do
        (
            uglifyjs $filePath \
            --compress \
            -o "$filePath"
        ) &
        pids+=($!)
    done
    
    for pid in "${pids[@]}"; do
        wait $pid || {
            echo "Error: Minification failed"
            exit 1
        }
    done
}

set -e

setup
copy_assets
generate_package
generate_all_definitions
compile_proto
compile_ts
minify

echo "All generations finished!"