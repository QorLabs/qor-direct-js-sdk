/**  Payment credit card discount object. */
export declare type PaymentCardTrackDetailObject = {
  /** Track 1 or Track 2 magentic stripe data */
  track: string;
  /** Magnetic stripe Key Serial Number (KSN)..  */
  ksn: number;
};

/**  Payment credit card discount object. */
export declare type PaymentDiscountDetailObject = {
  /** Fixed amount for discount.  Must not be more than the payment **amount**.  Value will be overriden if discount **percent** value is provided. */
  amount: string;
  /** Percent of payment **amount** to apply to discount amount.  Use whole number percentage with up to 2 decimal points.  For example if percent discount is 5.55% input 5.55.  */
  percent: number;
};

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
};

/** Payment customer object */
export declare type PaymentCustomerDetailObject = {
  /** Customer first name */
  first_name?: string;
  /** Customer last name */
  last_name?: string;
  /** Customer email address.  Required if **send_receipt** or **store_token** is set to `true` */
  email?: string;
  /** Customer phone number */
  phone?: string;
  /** Customer website */
  website?: string;
};

/** Payment credit card billing address object */
export declare type PaymentCardBillingAddressObject = {
  /** Card billing postal code */
  postal_code: string;
  /** Card billing street 1 address */
  street_1?: string;
  /** Card billing street 2 address */
  street_2?: string;
  /** Card billing address city name */
  city?: string;
  /** Card billing address ISO-3166-2 character state/province code */
  state_code?: string;
  /** Card billing address ISO-3166-2 character country code */
  country_code?: string;
};

/**  Parameters to process a manually entered credit/debit card. */
export declare type PaymentCardManualInputParams = {
  /** Set processing type.  Accepted values are 'sale' and 'authorize'*/
  type: "string";
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** Amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  amount: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** The credit card detail object */
  card_detail: PaymentCardDetailObject;
  /** The credit card billing address object */
  billing: PaymentCardBillingAddressObject;
  /** The payment customer detail object */
  customer: PaymentCustomerDetailObject;
  /** The payment discount object */
  discount: PaymentDiscountDetailObject;
  /** A terminal id for processing (can be use as a reference).  **Required for marketplace transactions** */
  terminal_id?: string;
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
  /** Set `true` to store the card details in the QorCommerce Secure Vault.  The payment response return a card token.  If `true` you must provide a `customer.email` value.  Default is `false` */
  store_card?: boolean;
  /** Set `true` to send the customer an email payment receipt.  If `true` you must provide a `customer.email` value.  Default is `false` */
  send_receipt?: boolean;
};
/** Response object for manual payment card processing */
export declare type PaymentCardManualInputResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The date and time the host processed the transaction */
  transaction_date: string;
  /** The payment gateway assigned transaction identifier */
  transaction_id: string;
  /** Total amount processed by the host */
  amount_approved: string;
  /** The host authorization code */
  authcode: string;
  /** Payment card token.  Returned only if the payment request **store_token** value is set to `true` */
  token: string;
};

/**  Parameters to process a manually entered credit/debit card token. */
export declare type PaymentCardTokenInputParams = {
  /** Set processing type.  Accepted values are 'sale' and 'authorize'*/
  type: "string";
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** Amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  amount: string;
  /** The credit card token */
  token: string;
  /** The credit card validation code assocaited with the card token */
  cvv: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** A terminal id for processing (can be use as a reference).  **Required for marketplace transactions** */
  terminal_id?: string;
  /** Route a transaction to an external provider.  Your servicee provider will provide value(s) required here. */
  topt?: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id?: string;
  /** The amount of this transaction that should be allocated to a service charge.  Cannot exceed payment request `amount` value.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.0 */
  service_charge?: string;
  /** The payment discount object*/
  discount?: PaymentDiscountDetailObject;
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
  /** Set `true` to send the customer an email payment receipt.  Default is `false` */
  send_receipt?: boolean;
};
/** Response object for payment card token processing */
export declare type PaymentCardTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The date and time the host processed the transaction */
  transaction_date: string;
  /** The payment gateway assigned transaction identifier */
  transaction_id: string;
  /** Total amount processed by the host */
  amount_approved: string;
  /** The host authorization code */
  authcode: string;
};

/**  Parameters to process a card present swipe transaction. */
export declare type PaymentCardSwipeInputParams = {
  /** Set processing type.  Accepted values are 'sale' and 'authorize'*/
  type: "string";
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** Amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  amount: string;
  /** The credit card magenetic stripe data */
  track_data: PaymentCardTrackDetailObject;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** The payment customer detail object */
  customer: PaymentCustomerDetailObject;
  /** A terminal id for processing (can be use as a reference).  **Required for marketplace transactions** */
  terminal_id?: string;
  /** Route a transaction to an external provider.  Your servicee provider will provide value(s) required here. */
  topt?: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id?: string;
  /** The amount of this transaction that should be allocated to a service charge.  Cannot exceed payment request `amount` value.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.0 */
  service_charge?: string;
  /** The payment discount object*/
  discount?: PaymentDiscountDetailObject;
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
  /** Set `true` to store the card details in the QorCommerce Secure Vault.  The payment response return a card token.  If `true` you must provide a `customer.email` value.  Default is `false` */
  store_card: boolean;
  /** Set `true` to send the customer an email payment receipt.  Default is `false` */
  send_receipt?: boolean;
};
/** Response object for payment card present processing */
export declare type PaymentCardSwipeResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The date and time the host processed the transaction */
  transaction_date: string;
  /** The payment gateway assigned transaction identifier */
  transaction_id: string;
  /** Total amount processed by the host */
  amount_approved: string;
  /** The host authorization code */
  authcode: string;
};

