import { Transactions } from './resources/transactions/index';
import { Marketplace } from './resources/marketplace/index';
import { ProofOfDelivery } from './resources/proof-of-delivery/index';
export declare class QorDirectSDK {
    transactions: Transactions;
    marketplace: Marketplace;
    proofOfDelivery: ProofOfDelivery;
    constructor(config: {
        apiKey: string;
        clientKey: string;
        requestId?: string;
        baseUrl?: string;
    });
}
