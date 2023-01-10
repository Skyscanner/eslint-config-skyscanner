# UNRELEASED

This project adheres to [Semantic Versioning](http://semver.org/).

## Standardised React Imports

This ensures that the 'preferred style' is used for react imports:

> Change all default React imports (i.e. import React from "react") to destructured named imports (ex. import { useState } from "react") which is the preferred style going into the future.

There is a codemod here created by the react team to change this in your codebase:
https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
