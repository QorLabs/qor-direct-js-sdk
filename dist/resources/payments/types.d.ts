export declare type PaymentCardTrackDetailObject = {
    track: string;
    ksn: number;
};
export declare type PaymentDiscountDetailObject = {
    amount: string;
    percent: number;
};
export declare type PaymentCardDetailObject = {
    number: string;
    cardholder: string;
    exp_month: number;
    exp_year: number;
    cvv: number;
};
export declare type PaymentCustomerDetailObject = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    website?: string;
};
export declare type PaymentCardBillingAddressObject = {
    postal_code: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_code?: string;
    country_code?: string;
};
export declare type PaymentCardManualInputParams = {
    mid: string;
    amount: string;
    order_id: string;
    card_detail: PaymentCardDetailObject;
    billing: PaymentCardBillingAddressObject;
    customer: PaymentCustomerDetailObject;
    discount: PaymentDiscountDetailObject;
    terminal_id?: string;
    topt?: string;
    reference_id?: string;
    service_charge?: string;
    currency?: string;
    invoice_id?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    store_card?: boolean;
    send_receipt?: boolean;
};
export declare type PaymentCardManualInputResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    authcode: string;
    token: string;
};
export declare type PaymentCardTokenInputParams = {
    mid: string;
    amount: string;
    token: string;
    cvv: string;
    order_id: string;
    terminal_id?: string;
    topt?: string;
    reference_id?: string;
    service_charge?: string;
    discount?: PaymentDiscountDetailObject;
    currency?: string;
    invoice_id?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    send_receipt?: boolean;
};
export declare type PaymentCardTokenResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    authcode: string;
};
export declare type PaymentCardSwipeInputParams = {
    mid: string;
    amount: string;
    track_data: PaymentCardTrackDetailObject;
    order_id: string;
    customer: PaymentCustomerDetailObject;
    terminal_id?: string;
    topt?: string;
    reference_id?: string;
    service_charge?: string;
    discount?: PaymentDiscountDetailObject;
    currency?: string;
    invoice_id?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    store_card: boolean;
    send_receipt?: boolean;
};
export declare type PaymentCardSwipeResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    authcode: string;
};
