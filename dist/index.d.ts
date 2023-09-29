import { Transactions } from './resources/transactions/index';
import { Marketplace } from './resources/marketplace/index';
import { ProofOfDelivery } from './resources/proof-of-delivery/index';
import { Payments } from './resources/payments/index';
export declare class QorDirectSDK {
    payments: Payments;
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
