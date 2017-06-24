# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

After git clone firstly run `npm i` for installing dependencies local.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to test with local backend-plug server run `node server.js` and change the `API_PATH` to `http://localhost:8080/api/items` in `src/app/common-usage/constants.ts` file.

## Deploy

Be sure that you have setup the heroku (look documentation on site). Run `npm start deploy`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
