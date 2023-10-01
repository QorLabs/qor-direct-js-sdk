import { PaymentShippingObject, PaymentItemsObject, PaymentDiscountObject, PaymentCustomerObject } from "./shared-payment.types";
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
    store_token?: boolean;
    token_nickname: string;
};
export declare type PaymentCardTrackObject = {
    track: string;
    ksn: number;
};
export declare type PaymentCardTokenObject = {
    token: string;
    cvv: number;
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
export declare type PaymentCardVoid = {
    mid: string;
    transaction_id: string;
    reference_id?: string;
};
export declare type PaymentCardVoidResponse = {
    status: string;
    code: string;
    message: string;
};
export declare type PaymentCardRefund = {
    mid: string;
    transaction_id: string;
    amount?: string;
    reference_id?: string;
};
export declare type PaymentCardRefundResponse = {
    status: string;
    code: string;
    message: string;
};
export declare type PaymentCardAuthorizeCapture = {
    mid: string;
    transaction_id: string;
    orderid?: string;
    amount?: string;
    reference_id?: string;
};
export declare type PaymentCardAuthorizeCaptureResponse = {
    status: string;
    code: string;
    message: string;
};
