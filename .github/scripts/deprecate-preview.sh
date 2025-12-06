#!/bin/bash

set -e

echo "Deprecating preview versions for $PACKAGE_NAME@$VERSION (builds 0 to $BUILD)..."

for ((i=0; i<=BUILD; i++)); do
  PREVIEW_VERSION="$VERSION-preview.$i"
  echo "Deprecating $PACKAGE_NAME@$PREVIEW_VERSION..."

  npm deprecate \
    "$PACKAGE_NAME@$PREVIEW_VERSION" \
    "This preview version has been superseded by $VERSION" \
    2>&1 || true
done
