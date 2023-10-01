import { Transactions } from './resources/transactions';
import { Marketplace } from './resources/marketplace';
import { ProofOfDelivery } from './resources/proof-of-delivery';
import { CardPayments } from './resources/card-payments';
import { AchPayments } from './resources/ach-payments';
import { CashPayments } from './resources/cash-payments';
export declare class QorDirectSDK {
    cardPayments: CardPayments;
    achPayments: AchPayments;
    cashPayments: CashPayments;
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
