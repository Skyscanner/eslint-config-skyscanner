#!/usr/bin/env node
/*
 * eslint-config-skyscanner
 *
 * Copyright 2021 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const colors = require('colors/safe');

if (
  process.env.DISABLE_SKYSCANNER_ESLINT_WITH_PRETTIER_INSTALL_SCRIPT === '1'
) {
  process.exit(0);
}

const ESLINTRC_FILES = [
  '.eslintrc',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintrc.js',
];
const PRETTIERRC_FILES = [
  '.prettierrc',
  '.prettierrc.json',
  '.prettierrc.yaml',
  '.prettierrc.yml',
  '.prettierrc.js',
  'prettier.config.js',
];

const NPM_SCRIPTS = `
  "lint:js": "eslint . --ext js,jsx",
  "lint:js:fix": "eslint . --ext js,jsx --fix",
  "prettier": "prettier --config .prettierrc --write \\"**/*.{js,jsx}\\"",
`;

const cwd = process.env.INIT_CWD;

if (!cwd) {
  console.error(
    '$INIT_CWD not available in environment please use NPM 5.4 or greater or manually install peer dependencies',
  );
  process.exit(1);
}

const readPackageJSON = (fullPath) => {
  const file = fs.readFileSync(fullPath, { encoding: 'utf8' });

  return JSON.parse(file);
};

const fileExsists = (filePath) => fs.existsSync(filePath);

const hasEslintRcFile = (workingDictionary) =>
  ESLINTRC_FILES.some((file) =>
    fileExsists(path.join(workingDictionary, file)),
  );
const hasEslintPackageConfig = (packageJSON) =>
  Object.prototype.hasOwnProperty.call(packageJSON, 'eslintConfig');

const hasPrettierRcFile = (workingDictionary) =>
  PRETTIERRC_FILES.some((file) =>
    fileExsists(path.join(workingDictionary, file)),
  );
const hasPrettierPackageConfig = (packageJSON) =>
  Object.prototype.hasOwnProperty.call(packageJSON, 'prettier');

try {
  const projectPackageJSON = readPackageJSON(path.join(cwd, 'package.json'));

  const hasExistingEslintConfig =
    hasEslintRcFile(cwd) || hasEslintPackageConfig(projectPackageJSON);

  if (hasExistingEslintConfig) {
    console.log(
      'Please add "extends": [\'@skyscanner/skyscanner\'] to your eslint config',
    );
  } else {
    fs.copyFileSync(
      path.join(__dirname, 'eslintrc.template'),
      path.join(cwd, '.eslintrc.json'),
    );
    console.log('We created `.eslintrc.json` for you.');
  }

  const hasExistingPrettierConfig =
    hasPrettierRcFile(cwd) || hasPrettierPackageConfig(projectPackageJSON);

  if (!hasExistingPrettierConfig) {
    fs.copyFileSync(
      path.join(__dirname, 'prettierrc.template'),
      path.join(cwd, '.prettierrc'),
    );
    console.log('We created `.prettierrc` for you.');
  }
  console.log(
    `All done, we suggest you add the following npm scripts to your package.json:\n ${colors.blue(
      NPM_SCRIPTS,
    )}`,
  );
} catch (e) {
  console.error(colors.red('Something has gone wrong'));
  console.error(e);
  process.exit(1);
}
