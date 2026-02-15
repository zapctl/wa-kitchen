#!/bin/bash

cd $DIST_DIR/nodejs

npm i
npm publish --access public --tag $PACKAGE_TAG
