'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Notification', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications('NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var callSid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Notifications/${sid}.json`;

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
          'api_version': '2008-08-01',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Tue, 18 Aug 2015 08:46:56 +0000',
          'date_updated': 'Tue, 18 Aug 2015 08:46:57 +0000',
          'error_code': '15003',
          'log': '1',
          'message_date': 'Tue, 18 Aug 2015 08:46:56 +0000',
          'message_text': 'statusCallback=http%3A%2F%2Fexample.com%2Ffoo.xml&ErrorCode=15003&LogLevel=WARN&Msg=Got+HTTP+404+response+to+http%3A%2F%2Fexample.com%2Ffoo.xml',
          'more_info': 'https://www.twilio.com/docs/errors/15003',
          'request_method': null,
          'request_url': '',
          'request_variables': '',
          'response_body': '',
          'response_headers': '',
          'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications('NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications('NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var callSid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Notifications/${sid}.json`;

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications('NOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'notifications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2008-08-01',
                  'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'date_updated': 'Tue, 18 Aug 2015 08:46:57 +0000',
                  'error_code': '15003',
                  'log': '1',
                  'message_date': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'message_text': 'statusCallback=http%3A%2F%2Fexample.com%2Ffoo.xml&ErrorCode=15003&LogLevel=WARN&Msg=Got+HTTP+404+response+to+http%3A%2F%2Fexample.com%2Ffoo.xml',
                  'more_info': 'https://www.twilio.com/docs/errors/15003',
                  'request_method': null,
                  'request_url': '',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .notifications.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'notifications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2008-08-01',
                  'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'date_updated': 'Tue, 18 Aug 2015 08:46:57 +0000',
                  'error_code': '15003',
                  'log': '1',
                  'message_date': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'message_text': 'statusCallback=http%3A%2F%2Fexample.com%2Ffoo.xml&ErrorCode=15003&LogLevel=WARN&Msg=Got+HTTP+404+response+to+http%3A%2F%2Fexample.com%2Ffoo.xml',
                  'more_info': 'https://www.twilio.com/docs/errors/15003',
                  'request_method': null,
                  'request_url': '',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .notifications.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Notifications.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'notifications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2008-08-01',
                  'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'date_updated': 'Tue, 18 Aug 2015 08:46:57 +0000',
                  'error_code': '15003',
                  'log': '1',
                  'message_date': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'message_text': 'statusCallback=http%3A%2F%2Fexample.com%2Ffoo.xml&ErrorCode=15003&LogLevel=WARN&Msg=Got+HTTP+404+response+to+http%3A%2F%2Fexample.com%2Ffoo.xml',
                  'more_info': 'https://www.twilio.com/docs/errors/15003',
                  'request_method': null,
                  'request_url': '',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .notifications.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var callSid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Notifications.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'notifications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2008-08-01',
                  'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'date_updated': 'Tue, 18 Aug 2015 08:46:57 +0000',
                  'error_code': '15003',
                  'log': '1',
                  'message_date': 'Tue, 18 Aug 2015 08:46:56 +0000',
                  'message_text': 'statusCallback=http%3A%2F%2Fexample.com%2Ffoo.xml&ErrorCode=15003&LogLevel=WARN&Msg=Got+HTTP+404+response+to+http%3A%2F%2Fexample.com%2Ffoo.xml',
                  'more_info': 'https://www.twilio.com/docs/errors/15003',
                  'request_method': null,
                  'request_url': '',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'notifications': [],
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .notifications.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});