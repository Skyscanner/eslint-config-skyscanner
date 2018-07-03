#!/usr/bin/env bash

cp .package.json package.json

PEER_DEPENDENCIES=$(node -p "JSON.stringify(require('../package.json').peerDependencies, null, 2)")
echo "$PEER_DEPENDENCIES" | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev

npm install --no-shrinkwrap
npm test

git clean -f -x -d
