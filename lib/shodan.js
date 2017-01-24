/* jamesjara, netdb.io */

'use strict';

var shodanLib = require('shodan-client'),
    util = require('util'),
    Connector = require('loopback-connector').Connector,
    Shodan = function Shodan() {};  

/* eslint-disable no-unused-vars */
var shodanInstance = {}; 
/* eslint-enable no-unused-vars */

var ShodanConnector = function ShodanConnector(settings) {
  assert(typeof settings.api_key === 'string', 'cannot init connector without api key');
  if (settings.api_key){
    this.shodan = shodanLib;
  }

  this.key = settings.api_key;
  shodanInstance = this.shodan;
};

ShodanConnector.initialize = function (dataSource, callback) {
  dataSource.connector = new ShodanConnector(dataSource.settings);
  callback();
};

ShodanConnector.prototype.DataAccessObject = Shodan;

/**
 * Send transactional email with options
 * Full list of options are available here: https://www.npmjs.com/package/sendgrid#available-params
 *
 * @param {Object} options
 * {
 *   from: { name: "John", email: "john@cellarise.com" },
 *   to: "mail@cellarise.com",
 *   subject: "Test mail",
 *   text: "Plain text message",
 *   html: "<b>Html messages</b> here"
 * }
 *
 * @param {Function} cb callback
 * @returns {Function} deferred promise
 */
Shodan.query = function (options, cb) { // eslint-disable-line
  var dataSource = this.dataSource,
    connector = dataSource.connector,
    deferred = Q.defer(),
    request;

  var fn = function (err, result) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(result);
    }
    return cb && cb(err, result);
  };

  if (options.__data) {
    options = R.clone(options.__data);
  } else {
    options = R.clone(options);
  }

  assert(connector, 'Cannot query without a connector!');

  if (connector.shodan) {

  shodanLib.search('asterisk port:5061', 'YOURKEYHERE', searchOpts)
    .then(res => {
      console.log('Result:');
      fn(null, options);
    })
    .catch(err => {
      console.log('Error:');
      console.log(err);
      fn(null, response);
    });

 
  } else {
    process.nextTick(function nextTick() { // eslint-disable-line
      fn(null, options);
    });
  }
  return deferred.promise;
};

/**
 * Query Shodan instance using instance
 */

Shodan.prototype.query = function protoQuery(fn) {
  return this.constructor.query(this, fn);
};

/**
 * Export the connector class
 */
module.exports = ShodanConnector;

