import { PaymentShippingObject, PaymentItemsObject, PaymentDiscountObject, PaymentCustomerObject } from "./shared-payment.types";
export declare type PaymentCashRequest = {
    mid: string;
    amount: string;
    currency: string;
    order_id: string;
    invoice_id: string;
    reference_id: string;
    totp: string;
    service_charge: string;
    ip_address: string;
    customer_detail?: PaymentCustomerObject;
    discount_detail?: PaymentDiscountObject;
    items_detail?: PaymentItemsObject;
    shipping_detail?: PaymentShippingObject;
};
export declare type PaymentCashResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_recorded: string;
};
