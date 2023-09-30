/** Payment credit card track object. */
export declare type PaymentShippingObject = {
  //** Total shipping amount.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  amount: string;
  /** Shipping destnation postal code  */
  postal_code: string;
  /** Shipping destnation street 1 address */
  country_code: string;
};
/** Payment order items object. */
export declare type PaymentItemsObject = {
  /** The total amount of the item which should equal (((unit_price * units_sold) + taxes + fees) - discounts) */
  total_amount: string;
  //** Item name */
  name: string;
  /** Item description  */
  description?: string;
  /** Item price per unit */
  unit_price: string;
  /** Item units sold */
  units_sold: string;
  /** Item unit of measurement */
  unit_measurement: string;
  /** Item Universal Commercial Code (UCC) value */
  ucc: string;
  /** Item Universal Product Code (UPC) value */
  upc: string;
};
/** Payment credit card detail object. */
export declare type PaymentCardObject = {
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
  /** Set to `true` to save credit card in secure storage and return a card token value.  Default is `false`.  **NOTE** If set to `true` a `customer.email` value is required */
  store_card?: boolean;
  /** Stored card nickname.  Required if **store_card** is set to `true` */
  nickname: string;
};
/** Payment credit card track object. */
export declare type PaymentCardTrackObject = {
  /** Track 1 or Track 2 magentic stripe data */
  track: string;
  /** Magnetic stripe Key Serial Number (KSN)..  */
  ksn: number;
};
/** Payment credit card token object. */
export declare type PaymentCardTokenObject = {
  /** Credit card token value */
  token: string;
  /** Credit card validation number (CVV)  */
  cvv: number;
};
/** Payment credit card discount object. */
export declare type PaymentDiscountObject = {
  /** Fixed amount for discount.  Must not be more than the payment **amount**.  Value will be overriden if discount **percent** value is provided. */
  amount: string;
  /** Percent of payment **amount** to apply to discount amount.  Use whole number percentage with up to 2 decimal points.  For example if percent discount is 5.55% input 5.55.  */
  percent: number;
};
/** Payment customer object */
export declare type PaymentCustomerObject = {
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
/** Payment 3-D Secure object. */
export declare type PaymentCard3dsObject = {
  /** Status response from 3-D Secure provider. Possible values are typically success, failure, noaction or error but can vary depending on provider */
  response: string;
  /** The 3-D Secure Cardholder Authentication Verification Value (MasterCard’s UCAF value)  */
  CAVV: string;
  /** Electronic Commerce Indicator
   * `0` = Payment has been flagged as SSL secured transaction
   * `1` = Payment has been flagged as SSL 3-D Secure authentication transaction (cardholder enrolled)
   * `2` = Payment has been flagged as SSL 3-D Secure authentication transaction (cardholder not enrolled or partial authenticated) 
  */
  ECIFlag: string;
  /** 3-D Secure transaction ID */
  XID: string;
};

/**  Parameters to process a manually entered credit/debit card. */
export declare type PaymentCardManualInputParams = {
  /** Set processing type.  Accepted values are 'sale' and 'authorize'*/
  type: "string";
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** The total amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  total_amount: string;
  /** The total tax amount for this transaction.  Required for Level 2 and Level 3 transactions. */
  total_tax_amount?: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id?: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** Associate payment transaction with an invoice */
  invoice_id?: string;
  /** Associate payment transaction with a purchase order number */
  purchase_order?: string;
  /** The credit card token detail object.  Required if `card_detail` is not provided */
  token_detail?: PaymentCardTokenObject;
  /** The credit card detail object.  Required if `token_detail` is not provided */
  card_detail?: PaymentCardObject;
  /** The credit card magenetic stripe data */
  track_detail: PaymentCardTrackObject;
  /** The payment customer detail object */
  customer_detail?: PaymentCustomerObject;
  /** The payment discount object */
  discount_detail?: PaymentDiscountObject;
  /** The payment sale items sold array */
  items_detail?: PaymentItemsObject;
  /** The payment transaction shipping object */
  shipping_detail?: PaymentShippingObject;
  /** The payment 3-D Secure object. */
  three_ds?: PaymentCard3dsObject;
  /** A terminal id for processing (can be use as a reference).  **Required for marketplace transactions** */
  terminal_id?: string;
  /** Route a transaction to an external provider.  Your servicee provider will provide value(s) required here. */
  topt?: string;
  /** The amount of this transaction that should be allocated to a service charge.  Cannot exceed payment request `amount` value.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.0 */
  service_charge?: string;
  /** The ISO-4127 3 character currency code accepted for this transaction.  Defaults to 'USD */
  currency?: string;
  /** Payment originating IP address.  If not provided the system will attempt to qualify an ip address from the request host value */
  ip_address?: string;
  /** Risk score to associate with payment transaction. */
  risk_score?: string;
  /** Key-value pairs for storing additional information about the payment in a structured format. */
  meta_data?: object;
  /** Set `true` to send the customer an email payment receipt.  If `true` you must provide a `customer.email` value.  Default is `false`.  */
  send_receipt?: boolean;
};

/** Response object for manual payment card processing */
export declare type PaymentCardResponse = {
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
  /** Payment card token.  Returned only if the payment request **card_detail.store_token** value is set to `true` */
  token: string;
};

