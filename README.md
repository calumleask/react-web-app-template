# React Web App Template

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- npm (installed with Node.js)


## Setup
- `npm install`

## Scripts

- `npm run clean`

removes the dist directory

- `npm run lint`

lints all javascript and typescript files under the src directory

- `npm run test`

runs jest

## Building the web app

- `npm run dev:start`

launches the webpack dev server on port 8080 go to http://localhost:8080

The port can be changed from within `webpack.dev.js`

- `npm run dev:build`

builds src/web/index.js to dist/bundle.js using the webpack.dev.js config file

- `npm run dev:watch`

watches for changes and rebuilds dist/bundle.js

- `npm run prod:build`

builds src/web/index.js to dist/bundle.js using the webpack.prod.js config file