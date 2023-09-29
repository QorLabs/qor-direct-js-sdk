type PaymentTransactionDataObject = {
    trxn_status: string;
    trxn_date: string;
    trxn_type: string;
    trxn_id: string;
    payment_type: string;
    card_type: string;
    amount: string;
    invoice_id: string | null;
    order_id: string;
    authcode: string;
    avs_code: string;
    cv_code: string;
    last_4: string;
    settled: string;
    settled_amount: string | null;
    settled_date: string | null;
};
export declare type PaymentTransactionFetchResponse = {
    status: string;
    code: string;
    message: string;
    data: PaymentTransactionDataObject;
};
export declare type _PaymentTransactionFetchResponse = {
    status: string;
    code: string;
    message: string;
    data: {
        trxn_id: string;
        trxn_status: string;
        trxn_date: string;
        trxn_type: string;
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
};
export declare type CardTransactionListResponse = {
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
export declare type CardTransactionQueryParams = {
    transaction_id?: string;
    trxn_status: string;
    start_date: string;
    end_date: string;
    payment_type: string;
    amount: string | number;
    amount_from: string | number;
    amount_to: string | number;
    cardholder_name: string;
    card_brand: string;
    order_id: string;
    first_6: string;
    last_4: string;
    limit: string | number;
    offset: string | number;
};
export declare type AchTransactionQueryParams = {
    transaction_id?: string;
    trxn_status: string;
    start_date: string;
    end_date: string;
    amount: string | number;
    amount_from: string | number;
    amount_to: string | number;
    name_on_account: string;
    card_brand: string;
    order_id: string;
    first_6: string;
    last_4: string;
    limit: string | number;
    offset: string | number;
};
export declare type AchTransactionQueryResponse = {
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
export {};
