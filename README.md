# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Commands

Run `npm install` to initialize the project.

Run `ng serve` for a dev server available on `http://localhost:4200/`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `ng deploy` to build and deploy project to the.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How to adapt the code to a new project?

1. Search for `xd` and replace all occurrences with the new project name.
2. In the GitHub project repository go to `Settings -> Pages` and select branch to `gh-pages` and folder to `/(root)`.
3. Go to `proxy.conf.json` and change github page name.
4. Go to `angular.json` file, move to `deploy -> options -> baseHref` and change github page name, to set deploy destination.
