import "isomorphic-unfetch";
import { genRandomString } from './utils';

type Config = {
  apiKey: string;
  clientKey: string;
  requestId?: string;
  baseUrl?: string;
};

export abstract class Base {
  private apiKey: string;
  private clientKey: string;
  private requestId: string;
  private baseUrl: string;

  /**
   * Constructor function for the Config class.
   *
   * @param {Config} config - The configuration options for the class.
   * 
   */
  constructor(config: Config) {
    /** The application API key for authentication */
    this.apiKey = config.apiKey;
    /** The merchant client key for authentication */
    this.clientKey = config.clientKey;
    /** Optional.  A unique identifier to track transaction.  Defaults to a random generated string value. */
    this.requestId = config.requestId || genRandomString(12);
    /** The base URL to use when ready for production.  Defaults to sandbox api https://api-sandbox.qorcommerce.io/v3 */
    this.baseUrl = config.baseUrl || 'https://api-sandbox.qorcommerce.io/v3';
  }

  /**
   * Sends an HTTP request to the specified endpoint with optional query parameters and request options.
   *
   * @param {string} endpoint - The endpoint to send the request to.
   * @param {Record<string, any>} [queryParams] - Optional query parameters to include in the request URL.
   * @param {RequestInit} [options] - Optional request options.
   * @return {Promise<T>} A promise that resolves with the response data of the request.
   */
  protected async request<T>(endpoint: string, queryParams?: Record<string, any>, options?: RequestInit): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);

    if (queryParams) {
      const params = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        params.append(key, value);
      });
      url.search = new URLSearchParams(params).toString();      
    }

    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey,
      'x-client-key': this.clientKey,
      'x-request-id': this.requestId
    };
    const config = {
      ...options,
      headers,
    };

    console.log("Sending Request", JSON.stringify(`${url}`), config);
    
    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.error("ERROR", response.statusText);
      
      throw new Error(response.statusText);
    });
  }
}