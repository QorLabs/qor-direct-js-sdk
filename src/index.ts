import { Transactions } from './resources/transactions/index';
import { Marketplace } from './resources/marketplace/index';
import { ProofOfDelivery } from './resources/proof-of-delivery/index';


export class QorDirectSDK {
    transactions: Transactions
    marketplace: Marketplace
    proofOfDelivery: ProofOfDelivery

    /**
     * Creates a new instance of the constructor.
     *
     * @param {Object} config - The configuration object for the constructor.
     * @param {string} config.apiKey - The API key for authentication.
     * @param {string} config.clientKey - The client key for authentication.
     * @param {string} [config.requestId] - The optional request ID.
     * @param {string} [config.baseUrl] - The optional base URL.
     * 
     * @example
     * ```js
     * import { QorDirectSDK } from "qor-direct-sdk";
     * 
     * const client = new QorDirectSDK({
     *   apiKey: "YOUR_API_KEY",
     *   clientKey: "YOUR_CLIENT_KEY",
     *   requestId: "YOUR_REQUEST_ID",
     *   baseUrl: "https://api.qorcommerce.io/v3"
     * });
    * ```
     */
    constructor(config: { 
      /** The application API key for authentication. */
      apiKey: string;
      /** The merchant client key for authentication. */
      clientKey: string;
      /** Optional.  A unique identifier to track transaction.  Defaults to a random generated string value. */
      requestId?: string;
      /** The base URL to use when ready for production.  Defaults to sandbox 'https://api-sandbox.qorcommerce.io/v3'. */
      baseUrl?: string
    }) {
        this.transactions = new Transactions(config);
        this.marketplace = new Marketplace(config);
        this.proofOfDelivery = new ProofOfDelivery(config);
      }
}

