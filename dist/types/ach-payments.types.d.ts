import { PaymentCustomerObject } from "./shared-payment.types";
export declare type PaymentAchObject = {
    account_holder: string;
    routing_number: number;
    account_number: number;
    account_kind: string;
    account_type: string;
    check_number?: number;
    check_date?: string;
    process_date?: string;
    bank_name?: string;
    bank_city?: string;
    bank_state?: string;
    store_token?: boolean;
    token_nickname?: string;
};
export declare type PaymentAchRequest = {
    type: string;
    mid: string;
    total_amount: string;
    reference_id?: string;
    order_id: string;
    token: string;
    ach_detail: PaymentAchObject;
    customer_detail: PaymentCustomerObject;
    memo?: string;
    meta_data?: object;
    send_receipt?: boolean;
};
export declare type PaymentAchResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    token: string;
};
export declare type PaymentAchVoid = {
    mid: string;
    transaction_id: string;
    reference_id?: string;
};
export declare type PaymentAchVoidResponse = {
    status: string;
    code: string;
    message: string;
    data: object;
};
export declare type PaymentAchRefund = {
    mid: string;
    transaction_id: string;
    amount?: string;
    reference_id?: string;
};
export declare type PaymentAchRefundResponse = {
    status: string;
    code: string;
    message: string;
};
