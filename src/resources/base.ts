import "isomorphic-unfetch";
import { genRandomString } from "./utils";

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
   */
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.clientKey = config.clientKey;
    this.requestId = (config.requestId ?? genRandomString(12)) as string;
    this.baseUrl = config.baseUrl ?? "https://api-sandbox.qorcommerce.io/v3";
  }

  /**
   * Sends a request to the specified endpoint with optional query parameters and options.
   *
   * @param {string} endpoint - The endpoint to send the request to.
   * @param {Record<string, any>} [queryParams] - Optional query parameters for the request.
   * @param {RequestInit} [options] - Optional additional options for the request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  protected async request<T>(
    endpoint: string,
    queryParams?: Record<string, any>,
    options?: RequestInit
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);

    if (queryParams) {
      const params = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        params.append(key, value);
      });
      url.search = new URLSearchParams(params).toString();
    }

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
      "x-client-key": this.clientKey,
      "x-request-id": this.requestId,
    };
    const config: RequestInit = {
      ...options,
      headers,
    };

    console.log("Sending Request", JSON.stringify(`${url}`), config);

    const response = await fetch(url, config);
    if (response.ok) {
      return response.json();
    } else {
      console.error("ERROR", response.statusText);
      throw new Error(response.statusText);
    }
  }
}
