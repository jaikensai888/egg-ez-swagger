'use strict';
const EggSwagger = require('./eggSwagger');
const EggPropTypes = require('./eggPropTypes');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const tag = Symbol.keyFor(Symbol.for('[EzSwagger]'));
module.exports = app => {
  fs.access('./app/public/swagger', function (err) {
    if (err) {
      ncp(path.join(__dirname, '../swagger'), './app/public/swagger', function (err) {
        if (err) {
          return console.error(tag, err);
        }
        console.log(tag, 'copy swaggerUi success!');
      });
    } else {
      console.log(tag, 'app/public/swagger is already exist');
    }
  })

  app.swaggerHelper = {
    createSwagger: (routes, options) => {
      new EggSwagger(routes, options).initSwagger(app);
    },
    eggPropTypes: EggPropTypes,
  };
};