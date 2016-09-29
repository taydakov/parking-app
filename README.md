# Parking app

App for reserving parking spots in SF (for demonstration only, no real parking is reserved actually).

## Technologies and techniques used

* HTML/CSS/JS duh!
* LESS
* ES6 and Babel
* Webpack for dependencies management and JS/CSS compilation
* Minification of CSS, JS, and HTML
* Reset css rules, and auto css vendor prefixes

## Install

```
git clone https://github.com/taydakov/parking-app
cd parking-app
npm install
npm install -g webpack
```

## Development

Run the dev server, it automatically recompiles the project on file changes

```
npm start
```

Go to [localhost:8080](http://localhost:8080/).

## Compile

```
npm run build
```

The compiled project is in the *dist* folder