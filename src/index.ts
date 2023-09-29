import { Transactions } from './resources/transactions/index';
import { Marketplace } from './resources/marketplace/index';


export class QorDirectSDK {
    transactions: Transactions
    marketplace: Marketplace

    /**
     * Creates a new instance of the constructor.
     *
     * @param {Object} config - The configuration object for the constructor.
     * @param {string} config.apiKey - The API key for authentication.
     * @param {string} config.clientKey - The client key for authentication.
     * @param {string} [config.requestId] - The optional request ID.
     * @param {string} [config.baseUrl] - The optional base URL.
     */
    constructor(config: { 
      apiKey: string; // The application API key for authentication.
      clientKey: string; // The merchant client key for authentication.
      requestId?: string; // Optional request ID to track requests.
      baseUrl?: string // Production URL.  Defaults to sandbox 'https://api-sandbox.qorcommerce.io/v3'.
    }) {
        this.transactions = new Transactions(config);
        this.marketplace = new Marketplace(config);
      }
}

