
/**  Parameters to process a manually entered credit/debit card. */
export declare type PaymentCardManualInputParams = {
    /** The merchant account id assigned by the service provider that will process the payment */
    mid: string;
    /** Amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
    amount: string;
    /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
    orderid: string;
    /** The credit card detail object */
    card_detail: PaymentCardDetailObject,
    /** The credit card billing address object */
    billing: PaymentCardBillingAddressObject,
    /** The payment customer detail object */
    customer: PaymentCustomerDetailObject,
    /** A terminal id for processing (can be use as a reference).  **Required for marketplace transactions** */
    tid?: string;
    /** Route a transaction to an external provider.  Your servicee provider will provide value(s) required here. */
    topt?: string;
    /** An internal reference id that will be echo'd back in the message response. */
    reference_id?: string;
    /** The amount of this transaction that should be allocated to a service charge.  Cannot exceed payment request `amount` value.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.0 */
    service_charge?: string;
    /** The ISO-4127 3 character currency code accepted for this transaction.  Defaults to 'USD */
    currency?: string;
    /** Associate payment transaction with an invoice */
    invoice_id?: string;
    /** Payment originating IP address.  If not provided the system will attempt to qualify an ip address from the request host value received */
    ip_address?: string;
    /** Risk score to associate with payment transaction. */
    risk_score?: string;
    /** Key-value pairs for storing additional information about the payment in a structured format. */
    meta_data?: object;
    /** Set `true` to store the card details in the QorCommerce Secure Vault.  The payment response return a card token */
    store_card?: boolean;
}

/**  Payment credit card detail. */
export declare type PaymentCardDetailObject = {
    /** Credit card number */
    number: string;
    /** Cardholder name as it appears on card */
    cardholder: string;
    /** Credit card expiration month (1-12) */
    exp_month: number;
    /** Credit card expiration year (4 digits) */
    exp_year: number;
    /** Credit card security code (3 or 4 digits) */
    cvv: number;
}

export declare type PaymentCustomerDetailObject = {
    first_name: string;
    last_name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
}

export declare type PaymentCardBillingAddressObject = {
    postal_code: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_code?: string;
    country_code?: string;
}

export declare type PaymentCardHostParams = {
    card_detail: PaymentCardDetailObject,
    billing: PaymentCardBillingAddressObject,
    customer: PaymentCustomerDetailObject,
    tid?: string,
    topt?: string,
    reference_id?: string,
    service_charge?: string,
    currency?: string,
    invoice_id?: string,
    ip_address?: string,
    risk_score?: string,
    meta_data?: object,
    store_card?: boolean
}

export declare type PaymentCardResponse = {
}


