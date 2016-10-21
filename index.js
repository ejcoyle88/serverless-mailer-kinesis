'use strict';

require('dotenv').config();

const BbPromise = require('bluebird');
const Mailer = require('./lib');

module.exports.send = (event, context, callback) => {
  const respCallback = callback.bind(this, null);
  event.Records.forEach((r) => {
    var buffer = new Buffer(record.kinesis.data, 'base64').toString('ascii');
    var payload = JSON.parse(buffer);
    const mailer = new Mailer(payload);
    return BbPromise.resolve()
      .bind(mailer)
      .then(mailer.validate)
      .then(mailer.render)
      .then(mailer.send)
      .then(respCallback)
      .catch(callback);
  });
};
