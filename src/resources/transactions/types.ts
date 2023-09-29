/**
 * Represents a payment transaction result object.
 *
 * @typedef {Object} PaymentTransactionResultObject
 * @property {string} trxn_id - ID of the transaction.
 * @property {string} trxn_status - Status of the transaction. Values are 'approved' or 'declined'.
 * @property {string} trxn_date - Date and time transaction was processed. Example: '09-26-2023 06:31 PM'.
 * @property {string} trxn_type - Type of transaction processed. Values are 'sale', 'authorize', 'capture', 'void' and 'refund'.
 * @property {string} cardholder_name - Cardholder name as it appears on the card.
 * @property {string} payment_type - Type of payment. Values are 'cc' (Credit Card) and 'ach' (ACH/Bank).
 * @property {string} card_type - Card brand. Values are 'visa', 'mastercard', 'amex', 'discover', 'jcb', diners'.
 * @property {string} amount - Amount processed.
 * @property {string} invoice_id - ID of the invoice (if provided in the payment request).
 * @property {string} order_id - ID of the order.
 * @property {string} authcode - Host processor authorization code.
 * @property {string} avs_code - Address verification service code (if enabled).
 * @property {string} cv_code - Card verification code (if enabled).
 * @property {string} last_4 - Last 4 digits of the card number processed.
 * @property {string} settled - '0' = transaction not settled. '1' = transaction has been settled.
 * @property {string} settled_date - Transaction settlement date.
 * @property {string} settled_amount - Transaction settlement amount.
 */
export type PaymentTransactionResultObject = {
        trxn_id: string,
        trxn_status: string,
        trxn_date: string,
        trxn_type: string,
        cardholder_name: string,
        payment_type: string,
        card_type: string,
        amount: string,
        invoice_id: string,
        order_id: string,
        authcode: string,
        avs_code: string,
        cv_code: string,
        last_4: string,
        settled: string,
        settled_date: string,
        settled_amount: string,
};

/**
 * Represents the payment transaction fetch response.
 *
 * @typedef {Object} PaymentTransactionFetchResponse
 * @property {string} status - The status of the transaction. Possible response values are 'ok' and 'error'.
 * @property {string} code - The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions.
 * @property {string} message - Message associated with the response code.
 * @property {PaymentTransactionResultObject} data - The fetched payment transaction object.
 */
export type PaymentTransactionFetchResponse = {
    status: string
    code: string,
    message: string,
    data: PaymentTransactionResultObject;
};

/**
 * Represents the payment transactions list response.
 *
 * @typedef {Object} PaymentTransactionListResponse
 * @property {string} status - The status of the transaction. Possible response values are 'ok' and 'error'.
 * @property {string} code - The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions.
 * @property {string} message - Message associated with the response code.
 * @property {object} data - Payment transaction results object.
 * @property {number} data.count - Total number of transactions matching the query.
 * @property {number} data.limit - Total number of transactions returned.
 * @property {number} data.offset - Total number of transactions skipped.
 * @property {PaymentTransactionResultObject[]} data.transactions - Array of fetched payment transaction objects that match the query.
 */
export type PaymentTransactionListResponse = {
    status: string,
    code: string,
    message: string,
    data: {
        count: number,
        limit: number,
        offset: number,
        transactions: PaymentTransactionResultObject[]
    }
};

/**
 * Represents card transaction list query parameters.
 */
export declare type CardTransactionQueryParams = {
    /** ID of the transaction */
    transaction_id?: string,
    /** Status of the transaction.  Case sensitive values are 'approved' and 'declined'.  Default returns both types */
    trxn_status: string,
    /** Start date for transactions.  Format: "mm/dd/yy" */
    start_date: string,
    /** End date for transactions.  Format: "mm/dd/yy" */
    end_date: string,
    /** Type of transaction processed.  Case sensitive values are 'sale', 'authorize', 'capture', 'void' and 'refund' */
    payment_type: string,
    /** Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount: string | number,
    /** Filter from amount.  Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount_from: string | number,
    /** Filter to amount.  Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount_to: string | number,
    /**  Name of the cardholder.  Case sensitive, partial matches returned. */
    cardholder_name: string,
    /** Card brand.  Case sensitive values are 'visa', 'mastercard', 'amex', 'discover', 'jcb', diners'.  Return multiple transactions by separating the card_brand with a comma. */
    card_brand: string, 
    /**  ID of the order. Case sensitive. Return multiple transactions by separating the order_id with a comma. */
    order_id: string,
    /** First 6 digits of the card number.  Return multiple transactions by separating the first_6 with a comma. */
    first_6: string,
    /**  Last 4 digits of the card number.  Return multiple transactions by separating the last_4 with a comma. */
    last_4: string,
    /** Limit the number of transactions returned. */
    limit: string | number,
    /** Offset / skip n transactions. */ 
    offset: string | number,
}

/** 
 * Represents ACH transaction list query parameters.
*/
export declare type AchTransactionQueryParams = {
    /** ID of the ACH transaction */
    transaction_id?: string,
    /** Status of the transaction.  Case sensitive values are 'approved' and 'declined'.  Default returns both types */
    trxn_status: string,
    /** Start date for transactions.  Format: "mm/dd/yy" */
    start_date: string,
    /** End date for transactions.  Format: "mm/dd/yy" */
    end_date: string,
    /** Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount: string | number,
    /** Filter from amount.  Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount_from: string | number,
    /** Filter to amount.  Use whole numbers and up to two decimals as necessary.  Example: "100" or "100.00" */
    amount_to: string | number,
    /**  Name of the account holder.  Case sensitive, partial matches returned. */
    name_on_account: string,
    /** Card brand.  Case sensitive values are 'visa', 'mastercard', 'amex', 'discover', 'jcb', diners'.  Return multiple transactions by separating the card_brand with a comma. */
    card_brand: string, 
    /**  ID of the order. Case sensitive. Return multiple transactions by separating the order_id with a comma. */
    order_id: string,
    /** First 6 digits of the bank account.  Return multiple transactions by separating the first_6 with a comma. */
    first_6: string,
    /**  Last 4 digits of the bank account.  Return multiple transactions by separating the last_4 with a comma. */
    last_4: string,
    /** Limit the number of transactions returned. */
    limit: string | number,
    /** Offset / skip n transactions. */ 
    offset: string | number,
}

/**
 * Represents an ACH transaction response object.
 */

export declare type AchTransactionQueryResponse = {
        /** Status of the transaction.  Values are 'approved' or 'declined' */
        trxn_status: string,
        /** Date and time transaction was processsed.  Example: '09-26-2023 06:31 PM' */
        trxn_date: string,
        /** Type of transaction processed.  Values are 'sale', 'authorize', 'capture', 'void' and 'refund' */
        trxn_type: string,
        /** ID of the transaction */
        trxn_id: string,
        /** Cardholer name as it appears on card */
        cardholder_name: string,
        /** Type of payment.  Values are 'cc' (Credit Card) and 'ach' (ACH/Bank). */
        payment_type: string,
        /** Card brand.  Values are 'visa', 'mastercard', 'amex', 'discover', 'jcb', diners'. */
        card_type: string,
        /** Amount processed */
        amount: string,
        /** ID of invoice (if provided in payment request). */
        invoice_id: string,
        /** ID of the order. */
        order_id: string,
        /** Host processor authorization code. */
        authcode: string,
        /** Address verification service code (if enabled). */
        avs_code: string,
        /** Card verification code (if enabled). */
        cv_code: string,
        /** Last 4 digits of the card number processed. */
        last_4: string,
        /** '0' = transaction not settled. '1' = transaction has been settled */
        settled: string,
        /** Transaction settlement date */
        settled_date: string,
        /** Transaction settlement amount */
        settled_amount: string,
}

    

