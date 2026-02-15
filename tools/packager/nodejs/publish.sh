#!/bin/bash

cd $DIST_DIR/nodejs

npm ci

if [[ "$PACKAGE_TAG" == "preview" ]]; then
  npx pkg-pr-new publish --json publish.json --comment=off
else
  npm publish --access public
fi
