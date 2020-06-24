'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('ModelBuild', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'enqueued',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'build_duration': null,
          'error_code': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'key': 'model_builds',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          },
          'model_builds': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'build_duration': null,
                  'error_code': 23001
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .modelBuilds.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'key': 'model_builds',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          },
          'model_builds': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'build_duration': null,
                  'error_code': 23001
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .modelBuilds.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'key': 'model_builds',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          },
          'model_builds': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'build_duration': null,
                  'error_code': 23001
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .modelBuilds.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'key': 'model_builds',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          },
          'model_builds': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'key': 'model_builds',
              'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'first_page_url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds?PageSize=50&Page=0',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          },
          'model_builds': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'build_duration': null,
                  'error_code': 23001
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'enqueued',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'build_duration': null,
          'error_code': null
      });

      holodeck.mock(new Response(201, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://autopilot.twilio.com/v1/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds/UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'build_duration': 100,
          'error_code': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://autopilot.twilio.com/v1/Assistants/${assistantSid}/ModelBuilds/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.autopilot.v1.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .modelBuilds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});