import {
  PaymentShippingObject,
  PaymentItemsObject,
  PaymentDiscountObject,
  PaymentCustomerObject
} from "./shared-payment.types"

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
  store_token?: boolean;
  /** Stored card nickname.  Required if **store_token** is set to `true` */
  token_nickname: string;
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

/** Payment credit card 3-D Secure object. */
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

/**  Parameters to process a credit card sale or authorization. */
export declare type PaymentCardRequest = {
  /** Set processing type.  Accepted values are 'sale' for an authorize/capture transaction, 'authorize' for a pre-authorization amount, 'L2' for a Level 2 B2B sale transactions and 'L3' for high value B2B/B2G Level 3 sale transactions */
  type: "string";
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** The total amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  total_amount: string;
  /** The total tax amount for this transaction.  Required for type Level 2 and type Level 3 transactions. */
  total_tax_amount?: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id?: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** Associate payment transaction with an invoice */
  invoice_id?: string;
  /** Associate payment transaction with a purchase order number.  Required for type `L2` Level 2 transactions and type `L3` Level 3 transactions */
  purchase_order?: string;
  /** The credit card token detail object.  Required if `card_detail` and `track_detail` is not provided */
  token_detail?: PaymentCardTokenObject;
  /** The credit card detail object.  Required if `token_detail` and `track_detail` is not provided */
  card_detail?: PaymentCardObject;
  /** The credit card magenetic stripe data.  required if `card_detail` and `token_detail` is not provided */
  track_detail: PaymentCardTrackObject;
  /** The payment customer detail object.  Required for type `L2` Level 2 transactions and type `L3` Level 3 transactions */
  customer_detail?: PaymentCustomerObject;
  /** The payment discount object */
  discount_detail?: PaymentDiscountObject;
  /** The payment sale items sold array.  At least one item object must be provided for type `L3` Level 3 transactions */
  items_detail?: PaymentItemsObject;
  /** The payment transaction shipping object. */
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
/** Response object for credit card sale and authorization */
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

/**  Parameters to process a `void` transaction. A void can be performed on Sale or Authorizations prior to settlement (batch). 
 * > You cannot Cancel / Void a settled (batched) transaction. If transaction has already been settled then you must use the refund method and include an amount for a full or partial amount. 
*/
export declare type PaymentCardVoid = {
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** the unique transaction_id from the original sale or authorization */
  transaction_id: string;
  /** A reference id that will be echo'd back in the message response. */
  reference_id?: string;
}
/** Response object for credit card transaction void */
export declare type PaymentCardVoidResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
}

/** Parameters to process a refund. A refund can be issued against a Sale or Authorization transaction that has already settled (batched). 
 * This function returns funds to the card holder for equal or less value than the original Sale/Capture transaction.
 * > If the original sale or authorization is not settled (batched) and you want to cancel the transaction completely use the void method.
*/
export declare type PaymentCardRefund = {
    /** The merchant account id assigned by the service provider that will process the payment */
    mid: string;
    /** The unique transaction_id from the original sale or authorization */
    transaction_id: string;
    /** The total amount to refund.	Cannot exceed the original transaction amount or balance if prior partial refund was issued.  To refund the full transaction amount or balance omit this paramter or set to `null` */
    amount?: string;
    /** A reference id that will be echo'd back in the message response. */
    reference_id?: string;
}
/** Response object for credit card refund transaction */
export declare type PaymentCardRefundResponse = {
    /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
    status: string;
    /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string;
    /** Message associated with the response code. */
    message: string;
}

/** Parameters to process an authorization payment capture */
export declare type PaymentCardAuthorizeCapture = {
    /** The merchant account id assigned by the service provider that will process the payment */
    mid: string;
    /** The unique transaction_id from the original sale or authorization */
    transaction_id: string;
    /** The unique merchant order tracking number for the original authorization	 */
    orderid?: string;
    /** The total amount of the original authorization to capture.  Cannot exceed the original authorization amount.	 */
    amount?: string;
    /** A reference id that will be echo'd back in the message response. */
    reference_id?: string;
}

export declare type PaymentCardAuthorizeCaptureResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
}


