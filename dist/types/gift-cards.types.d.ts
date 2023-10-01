export declare type GiftCardBalance = {
    mid: string;
    account_number: string;
};
export declare type GiftCardBalanceResponse = {};
export declare type GiftCardProcessSale = {
    redemption_type: string;
    mid: string;
    account_number: string;
    total_amount: string;
    order_id?: string;
    invoice_id?: string;
    ip_address?: string;
};
export declare type GiftCardProcessSaleResponse = {
    status: string;
    code: string;
    message: string;
    transaction_date: string;
    transaction_id: string;
    amount_approved: string;
    balance: string;
    authcode: string;
};
export declare type GiftCardRefund = {
    mid: string;
    account_number: string;
    amount: string;
};
export declare type GiftCardRefundResponse = {};
export declare type GiftCardLoad = {
    mid: string;
    account_number: string;
    amount: string;
};
export declare type GiftCardLoadResponse = {};
export declare type GiftCardActivate = {
    mid: string;
    account_number: string;
    amount: string;
};
export declare type GiftCardActivateResponse = {};
export declare type GiftCardDeactivate = {
    mid: string;
    account_number: string;
};
export declare type GiftCardDeactivateResponse = {};
