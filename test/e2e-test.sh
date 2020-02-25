#!/usr/bin/env bash

cp .package.json package.json

npm install --no-shrinkwrap --no-package-lock

npm test

exit_code=$?

git clean -f -x -d

exit $exit_code
