export declare type PaymentShippingObject = {
    amount: string;
    postal_code: string;
    country_code: string;
};
export declare type PaymentItemsObject = {
    total_amount: string;
    name: string;
    description?: string;
    unit_price: string;
    units_sold: string;
    unit_measurement: string;
    ucc: string;
    upc: string;
};
export declare type PaymentCardObject = {
    number: string;
    cardholder: string;
    exp_month: number;
    exp_year: number;
    cvv: number;
    postal_code: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_code?: string;
    country_code?: string;
    store_card?: boolean;
    nickname: string;
};
export declare type PaymentCardTrackObject = {
    track: string;
    ksn: number;
};
export declare type PaymentCardTokenObject = {
    token: string;
    cvv: number;
};
export declare type PaymentDiscountObject = {
    amount: string;
    percent: number;
};
export declare type PaymentCustomerObject = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    website?: string;
};
export declare type PaymentCard3dsObject = {
    response: string;
    CAVV: string;
    ECIFlag: string;
    XID: string;
};
export declare type PaymentCardRequest = {
    type: "string";
    mid: string;
    total_amount: string;
    total_tax_amount?: string;
    reference_id?: string;
    order_id: string;
    invoice_id?: string;
    purchase_order?: string;
    token_detail?: PaymentCardTokenObject;
    card_detail?: PaymentCardObject;
    track_detail: PaymentCardTrackObject;
    customer_detail?: PaymentCustomerObject;
    discount_detail?: PaymentDiscountObject;
    items_detail?: PaymentItemsObject;
    shipping_detail?: PaymentShippingObject;
    three_ds?: PaymentCard3dsObject;
    terminal_id?: string;
    topt?: string;
    service_charge?: string;
    currency?: string;
    ip_address?: string;
    risk_score?: string;
    meta_data?: object;
    send_receipt?: boolean;
};
export declare type PaymentCardResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    authcode: string;
    token: string;
};
