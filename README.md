# egg-ez-swagger

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ez-swagger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ez-swagger
[travis-image]: https://img.shields.io/travis/eggjs/egg-ez-swagger.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ez-swagger
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ez-swagger.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ez-swagger?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ez-swagger.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ez-swagger
[snyk-image]: https://snyk.io/test/npm/egg-ez-swagger/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ez-swagger
[download-image]: https://img.shields.io/npm/dm/egg-ez-swagger.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ez-swagger

<!--
Description here.
-->

## Install

```bash
$ npm i egg-ez-swagger --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.swagger = {
  enable: true,
  package: 'egg-ez-swagger',
};
// {app_root}/config/config.default.js
exports.swagger = {
  host: '127.0.0.1:7001',
}
```

## Example

```js
// {app_root}/app/router.js
module.exports = app => {
 const {
    createSwagger
  } = app.swaggerHelper;

  const gps = require('./routes/gps')(app);
  const routes = Object.assign(gps);

  createSwagger(routes, app.config.swagger);
};

```

create new folder routes

```js

// {app_root}/app/routes/gps/js
const tagName = 'Gps模块';
module.exports = app => {
  const {
    eggPropTypes
  } = app.swaggerHelper;
  const route = {
    '/Api/gps/getData': {
      summary: '获取数据',
      description: '',
      tag: tagName,
      method: 'post',
      action: app.controller.gpsController.getData,
      model: {
        data: eggPropTypes.stringArray,
      },
    },
  };
  return route;
};
```

run process
127.0.0.7001/public/swagger/index.html

## License

[MIT](LICENSE)
