'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Sim', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/wireless/Sims/${sid}`;

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
          'unique_name': 'unique_name',
          'commands_callback_method': 'http_method',
          'commands_callback_url': 'http://www.example.com',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'sms_fallback_method': 'http_method',
          'sms_fallback_url': 'http://www.example.com',
          'sms_method': 'http_method',
          'sms_url': 'http://www.example.com',
          'voice_fallback_method': 'http_method',
          'voice_fallback_url': 'http://www.example.com',
          'voice_method': 'http_method',
          'voice_url': 'http://www.example.com',
          'links': {
              'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
              'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': 'iccid',
          'e_id': 'e_id',
          'status': 'status',
          'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'sims': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'commands_callback_method': 'http_method',
                  'commands_callback_url': 'http://www.example.com',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'links': {
                      'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
                      'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': 'iccid',
                  'e_id': 'e_id',
                  'status': 'status',
                  'sms_fallback_method': 'http_method',
                  'sms_fallback_url': 'http://www.example.com',
                  'sms_method': 'http_method',
                  'sms_url': 'http://www.example.com',
                  'voice_fallback_method': 'http_method',
                  'voice_fallback_url': 'http://www.example.com',
                  'voice_method': 'http_method',
                  'voice_url': 'http://www.example.com',
                  'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.sims.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'sims': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'commands_callback_method': 'http_method',
                  'commands_callback_url': 'http://www.example.com',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'links': {
                      'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
                      'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': 'iccid',
                  'e_id': 'e_id',
                  'status': 'status',
                  'sms_fallback_method': 'http_method',
                  'sms_fallback_url': 'http://www.example.com',
                  'sms_method': 'http_method',
                  'sms_url': 'http://www.example.com',
                  'voice_fallback_method': 'http_method',
                  'voice_fallback_url': 'http://www.example.com',
                  'voice_method': 'http_method',
                  'voice_url': 'http://www.example.com',
                  'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.sims.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/wireless/Sims',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'sims': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'commands_callback_method': 'http_method',
                  'commands_callback_url': 'http://www.example.com',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'links': {
                      'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
                      'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': 'iccid',
                  'e_id': 'e_id',
                  'status': 'status',
                  'sms_fallback_method': 'http_method',
                  'sms_fallback_url': 'http://www.example.com',
                  'sms_method': 'http_method',
                  'sms_url': 'http://www.example.com',
                  'voice_fallback_method': 'http_method',
                  'voice_fallback_url': 'http://www.example.com',
                  'voice_method': 'http_method',
                  'voice_url': 'http://www.example.com',
                  'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.sims.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.sims.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/wireless/Sims';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'sims': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims.list();
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
          'sims': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'commands_callback_method': 'http_method',
                  'commands_callback_url': 'http://www.example.com',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'links': {
                      'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
                      'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': 'iccid',
                  'e_id': 'e_id',
                  'status': 'status',
                  'sms_fallback_method': 'http_method',
                  'sms_fallback_url': 'http://www.example.com',
                  'sms_method': 'http_method',
                  'sms_url': 'http://www.example.com',
                  'voice_fallback_method': 'http_method',
                  'voice_fallback_url': 'http://www.example.com',
                  'voice_method': 'http_method',
                  'voice_url': 'http://www.example.com',
                  'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/Sims?Status=status&Iccid=iccid&RatePlan=rate_plan&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims.list();
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

      var promise = client.preview.wireless.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/wireless/Sims/${sid}`;

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
          'unique_name': 'unique_name',
          'commands_callback_method': 'http_method',
          'commands_callback_url': 'http://www.example.com',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'links': {
              'usage': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage',
              'rate_plan': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'rate_plan_sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': 'iccid',
          'e_id': 'e_id',
          'status': 'status',
          'sms_fallback_method': 'http_method',
          'sms_fallback_url': 'http://www.example.com',
          'sms_method': 'http_method',
          'sms_url': 'http://www.example.com',
          'voice_fallback_method': 'http_method',
          'voice_fallback_url': 'http://www.example.com',
          'voice_method': 'http_method',
          'voice_url': 'http://www.example.com',
          'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});