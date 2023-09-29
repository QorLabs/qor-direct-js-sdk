export declare type PaymentCardManualInputParams = {
    mid: string;
    amount: string;
    orderid: string;
    card_detail: PaymentCardDetailObject;
    billing: PaymentCardBillingAddressObject;
    customer: PaymentCustomerDetailObject;
    tid?: string;
    topt?: string;
    reference_id?: string;
    service_charge?: string;
    currency?: string;
    invoice_id?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    store_card?: boolean;
};
export declare type PaymentCardDetailObject = {
    number: string;
    cardholder: string;
    exp_month: number;
    exp_year: number;
    cvv: number;
};
export declare type PaymentCustomerDetailObject = {
    first_name: string;
    last_name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
};
export declare type PaymentCardBillingAddressObject = {
    postal_code: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_code?: string;
    country_code?: string;
};
export declare type PaymentCardHostParams = {
    card_detail: PaymentCardDetailObject;
    billing: PaymentCardBillingAddressObject;
    customer: PaymentCustomerDetailObject;
    tid?: string;
    topt?: string;
    reference_id?: string;
    service_charge?: string;
    currency?: string;
    invoice_id?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    store_card?: boolean;
};
export declare type PaymentCardResponse = {};
