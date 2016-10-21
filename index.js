'use strict';

require('dotenv').config();

const BbPromise = require('bluebird');
const Mailer = require('./lib');

module.exports.send = (event, context, callback) => {
  const respCallback = callback.bind(this, null);
  const mailer = new Mailer(event);
  return BbPromise.resolve()
    .bind(mailer)
    .then(mailer.validate)
    .then(mailer.render)
    .then(mailer.send)
    .then(respCallback)
    .catch(callback);
};
