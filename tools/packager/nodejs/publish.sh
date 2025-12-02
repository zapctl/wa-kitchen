#!/bin/bash

cd $DIST_DIR/nodejs

npm i

if [ -n "$PREVIEW_VERSION" ]; then
    npm publish --provenance --access public --tag preview
else
    npm publish --provenance --access public --tag latest
fi
