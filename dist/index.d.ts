import { Transactions } from './resources/transactions';
import { Marketplace } from './resources/marketplace';
import { ProofOfDelivery } from './resources/proof-of-delivery';
import { Payments } from './resources/card-payments';
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
