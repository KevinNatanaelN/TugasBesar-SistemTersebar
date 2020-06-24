'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var ServiceList = require('./v1/service').ServiceList;
var SessionList = require('./v1/session').SessionList;
var Version = require('../../base/Version');  /* jshint ignore:line */
var WebhookList = require('./v1/webhook').WebhookList;


/* jshint ignore:start */
/**
 * Initialize the V1 version of Messaging
 *
 * @constructor Twilio.Messaging.V1
 *
 * @property {Twilio.Messaging.V1.ServiceList} services - services resource
 * @property {Twilio.Messaging.V1.SessionList} sessions - sessions resource
 * @property {Twilio.Messaging.V1.WebhookList} webhooks - webhooks resource
 *
 * @param {Twilio.Messaging} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._services = undefined;
  this._sessions = undefined;
  this._webhooks = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

Object.defineProperty(V1.prototype,
  'sessions', {
  get: function() {
    this._sessions = this._sessions || new SessionList(this);
    return this._sessions;
  }
});

Object.defineProperty(V1.prototype,
  'webhooks', {
  get: function() {
    this._webhooks = this._webhooks || new WebhookList(this);
    return this._webhooks;
  }
});

module.exports = V1;