# Osfpov

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Estructura del proyecto

.
+-- OSFPOV						# Raiz del proyecto
    +-- app
    |   +-- App_Resources		# Recursos espec�ficos para cada plataforma
	|	|   +-- Android
	|	|   +-- iOS
	|	+-- assets				# Recursos gen�ricos
	|	|   +-- ...
	|	+-- pages				# Cada p�gina de la aplicaci�n
	|	|	+-- web				# 	P�ginas espec�ficas para la aplicaci�n web
	|	|	+-- mobile			# 	P�ginas espec�ficas para la aplicaci�n m�vil nativa
	|	+-- shared				# Clases y ficheros compartidos
	|	|	+-- models			#	Modelo
	|	|	+-- services		#	Servicios de acceso a bases de datos, APIs,...
	|	|   +-- ...
    +-- hooks					# Ficheros de NativeScript para preprocesadores
    |   +-- ...
	+-- e2e						# Tests end-to-end
	|	+-- ...
    +-- node_modules			# Librerias y dependencias
    |   +-- ...
    +-- platforms				# C�digo espec�fico para construir cada plataforma
    |   +-- android
    |   +-- ios
	+-- .angular-cli.json		# Configuraci�n de Angular-Cli
	+-- .editorconfig			# Configuraci�n para los IDEs
	+-- .gitignore				# Lista de inclusi�n para Git
	+-- karma.conf.js			# Configuraci�n de los tests de componentes
    +-- package.json			# Configuraci�n del proyecto
	+-- protractor.conf.js		# Configuraci�n de los tests e2e
    +-- references.d.ts			# Listado de cada fichero de declaraci�n de TypeScript
    +-- tsconfig.json			# Configuraci�n de TypeScript
	+-- tslint.json				# Configuraci�n de Lint