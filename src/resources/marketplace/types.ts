/**
 * Represents a card transaction response.
 */
export declare type MarketplaceTransactionResponse = {
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

