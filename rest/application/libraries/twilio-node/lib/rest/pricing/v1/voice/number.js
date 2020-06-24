'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var NumberList;
var NumberPage;
var NumberInstance;
var NumberContext;

/* jshint ignore:start */
/**
 * Initialize the NumberList
 *
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
NumberList = function NumberList(version) {
  /* jshint ignore:start */
  /**
   * @function numbers
   * @memberof Twilio.Pricing.V1.VoiceContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.VoiceContext.NumberContext}
   */
  /* jshint ignore:end */
  function NumberListInstance(sid) {
    return NumberListInstance.get(sid);
  }

  NumberListInstance._version = version;
  // Path Solution
  NumberListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a number
   *
   * @function get
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberList#
   *
   * @param {string} number - The phone number to fetch
   *
   * @returns {Twilio.Pricing.V1.VoiceContext.NumberContext}
   */
  /* jshint ignore:end */
  NumberListInstance.get = function get(number) {
    return new NumberContext(this._version, number);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  NumberListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  NumberListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return NumberListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the NumberPage
 *
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {NumberSolution} solution - Path solution
 *
 * @returns NumberPage
 */
/* jshint ignore:end */
NumberPage = function NumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(NumberPage.prototype, Page.prototype);
NumberPage.prototype.constructor = NumberPage;

/* jshint ignore:start */
/**
 * Build an instance of NumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberPage#
 *
 * @param {NumberPayload} payload - Payload response from the API
 *
 * @returns NumberInstance
 */
/* jshint ignore:end */
NumberPage.prototype.getInstance = function getInstance(payload) {
  return new NumberInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
NumberPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NumberPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the NumberContext
 *
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberInstance
 *
 * @property {string} number - The phone number
 * @property {string} country - The name of the country
 * @property {string} isoCountry - The ISO country code
 * @property {string} outboundCallPrice - The OutboundCallPrice record
 * @property {string} inboundCallPrice - The InboundCallPrice record
 * @property {string} priceUnit -
 *          The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
 * @property {string} url - The absolute URL of the resource
 *
 * @param {V1} version - Version of the resource
 * @param {NumberPayload} payload - The instance payload
 * @param {phone_number} number - The phone number to fetch
 */
/* jshint ignore:end */
NumberInstance = function NumberInstance(version, payload, number) {
  this._version = version;

  // Marshaled Properties
  this.number = payload.number; // jshint ignore:line
  this.country = payload.country; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.outboundCallPrice = payload.outbound_call_price; // jshint ignore:line
  this.inboundCallPrice = payload.inbound_call_price; // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {number: number || this.number, };
};

Object.defineProperty(NumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new NumberContext(this._version, this._solution.number);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a NumberInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NumberInstance
 */
/* jshint ignore:end */
NumberInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
NumberInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NumberInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the NumberContext
 *
 * @constructor Twilio.Pricing.V1.VoiceContext.NumberContext
 *
 * @param {V1} version - Version of the resource
 * @param {phone_number} number - The phone number to fetch
 */
/* jshint ignore:end */
NumberContext = function NumberContext(version, number) {
  this._version = version;

  // Path Solution
  this._solution = {number: number, };
  this._uri = `/Voice/Numbers/${number}`;
};

/* jshint ignore:start */
/**
 * fetch a NumberInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NumberInstance
 */
/* jshint ignore:end */
NumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new NumberInstance(this._version, payload, this._solution.number));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V1.VoiceContext.NumberContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
NumberContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

NumberContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  NumberList: NumberList,
  NumberPage: NumberPage,
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};