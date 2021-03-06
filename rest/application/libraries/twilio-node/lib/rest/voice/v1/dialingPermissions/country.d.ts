/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { HighriskSpecialPrefixList } from './country/highriskSpecialPrefix';
import { HighriskSpecialPrefixListInstance } from './country/highriskSpecialPrefix';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the CountryList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CountryList(version: V1): CountryListInstance;

interface CountryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CountryContext;
  /**
   * Streams CountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CountryListInstanceEachOptions, callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a country
   *
   * @param isoCode - The ISO country code
   */
  get(isoCode: string): CountryContext;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CountryListInstanceOptions, callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CountryListInstancePageOptions, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property continent - Filter to retrieve the country permissions by specifying the continent
 * @property countryCode - Country code filter
 * @property done - Function to be called upon completion of streaming
 * @property highRiskSpecialNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled
 * @property highRiskTollfraudNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk toll fraud numbers enabled
 * @property isoCode - Filter to retrieve the country permissions by specifying the ISO country code
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property lowRiskNumbersEnabled - Filter to retrieve the country permissions with dialing to low-risk numbers enabled
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface CountryListInstanceEachOptions {
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
  continent?: string;
  countryCode?: string;
  done?: Function;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  isoCode?: string;
  limit?: number;
  lowRiskNumbersEnabled?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property continent - Filter to retrieve the country permissions by specifying the continent
 * @property countryCode - Country code filter
 * @property highRiskSpecialNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled
 * @property highRiskTollfraudNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk toll fraud numbers enabled
 * @property isoCode - Filter to retrieve the country permissions by specifying the ISO country code
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property lowRiskNumbersEnabled - Filter to retrieve the country permissions with dialing to low-risk numbers enabled
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface CountryListInstanceOptions {
  continent?: string;
  countryCode?: string;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  isoCode?: string;
  limit?: number;
  lowRiskNumbersEnabled?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property continent - Filter to retrieve the country permissions by specifying the continent
 * @property countryCode - Country code filter
 * @property highRiskSpecialNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled
 * @property highRiskTollfraudNumbersEnabled - Filter to retrieve the country permissions with dialing to high-risk toll fraud numbers enabled
 * @property isoCode - Filter to retrieve the country permissions by specifying the ISO country code
 * @property lowRiskNumbersEnabled - Filter to retrieve the country permissions with dialing to low-risk numbers enabled
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CountryListInstancePageOptions {
  continent?: string;
  countryCode?: string;
  highRiskSpecialNumbersEnabled?: boolean;
  highRiskTollfraudNumbersEnabled?: boolean;
  isoCode?: string;
  lowRiskNumbersEnabled?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CountryPayload extends CountryResource, Page.TwilioResponsePayload {
}

interface CountryResource {
  continent: string;
  country_codes: string[];
  high_risk_special_numbers_enabled: boolean;
  high_risk_tollfraud_numbers_enabled: boolean;
  iso_code: string;
  links: string;
  low_risk_numbers_enabled: boolean;
  name: string;
  url: string;
}

interface CountrySolution {
}


declare class CountryContext {
  /**
   * Initialize the CountryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param isoCode - The ISO country code
   */
  constructor(version: V1, isoCode: string);

  /**
   * fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CountryInstance) => any): Promise<CountryInstance>;
  highriskSpecialPrefixes: HighriskSpecialPrefixListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CountryInstance extends SerializableClass {
  /**
   * Initialize the CountryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param isoCode - The ISO country code
   */
  constructor(version: V1, payload: CountryPayload, isoCode: string);

  private _proxy: CountryContext;
  continent: string;
  countryCodes: string[];
  /**
   * fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CountryInstance) => any): Promise<CountryInstance>;
  highRiskSpecialNumbersEnabled: boolean;
  highRiskTollfraudNumbersEnabled: boolean;
  /**
   * Access the highriskSpecialPrefixes
   */
  highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance;
  isoCode: string;
  links: string;
  lowRiskNumbersEnabled: boolean;
  name: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class CountryPage extends Page<V1, CountryPayload, CountryResource, CountryInstance> {
  /**
   * Initialize the CountryPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CountrySolution);

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryPayload): CountryInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CountryContext, CountryInstance, CountryList, CountryListInstance, CountryListInstanceEachOptions, CountryListInstanceOptions, CountryListInstancePageOptions, CountryPage, CountryPayload, CountryResource, CountrySolution }
