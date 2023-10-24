# MapsApp
# Pasos para poder subir tu ApiKey en MapsApp

No usar directamente en AngularCLI (a menos que estén creadas las variballe de entorno), ya que las variable de entorno se crean en el .env

## Pasos 
1. Instalar 'dotenv' desde npm:
  - npm install dotenv --save-dev
2. Crear el archivo .env y clonar el archivo .env.template
3. Llenar las variables de entorno a lo que pide en cada una de ellas
4. Crear en package.json 'envs'
  - "envs": "node ./scripts/set-envs.js"
5. Ejecutar el comando una ves llenado todo para que se creé el archivo en automatico
6. Para development ejecutar:
  - npm run start
7. Para production ejecutar:
  - npm run build



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
