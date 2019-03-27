#!/usr/bin/env bash

cp .package.json package.json

PEER_DEPENDENCIES=$(node script.js)

npm install --save-dev $PEER_DEPENDENCIES

npm install --no-shrinkwrap

npm test

exit_code=$?

git clean -f -x -d

exit $exit_code
