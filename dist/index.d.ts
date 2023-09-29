import { Transactions } from './resources/transactions/index';
import { Marketplace } from './resources/marketplace/index';
export declare class QorDirectSDK {
    transactions: Transactions;
    marketplace: Marketplace;
    constructor(config: {
        apiKey: string;
        clientKey: string;
        requestId?: string;
        baseUrl?: string;
    });
}
