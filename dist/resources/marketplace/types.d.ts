export declare type MarketplaceTransactionResponse = {
    trxn_status: string;
    trxn_date: string;
    trxn_type: string;
    trxn_id: string;
    cardholder_name: string;
    payment_type: string;
    card_type: string;
    amount: string;
    invoice_id: string;
    order_id: string;
    authcode: string;
    avs_code: string;
    cv_code: string;
    last_4: string;
    settled: string;
    settled_date: string;
    settled_amount: string;
};
export declare type MarketplaceMerchantParameters = {
    descriptor: string;
    annualCCSales?: number;
    avgTicket?: number;
    mcc?: string;
    merchant: MarketplaceMerchantObject;
    bank_accounts: MarketplaceMerchantBankObject[];
    owners: MarketplaceMerchantOwnerObject[];
};
export declare type MarketplaceMerchantObject = {
    type: number;
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    timezone: string;
    phone: number;
    email: string;
    ein: number;
    website: string;
    tcDate: string | number;
};
export declare type MarketplaceMerchantBankObject = {
    account: {
        method: number;
        number: string | number;
        routing: string | number;
    };
    currency: string;
    primary: number;
};
export declare type MarketplaceMerchantOwnerObject = {
    title: string;
    first: string;
    last: string;
    dob: number;
    email: string;
    phone: number;
    ownership: number;
    timezone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    ssn: number;
    dl_state?: string;
    dl_numb?: string;
    primary: number;
};
export declare type MarketplaceMerchantResponse = {
    status: string;
    code: string;
    message: string;
    id: string;
};
