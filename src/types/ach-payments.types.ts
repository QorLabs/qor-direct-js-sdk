import {
  PaymentShippingObject,
  PaymentItemsObject,
  PaymentDiscountObject,
  PaymentCustomerObject,
} from "./shared-payment.types";

/** Payment ach detail object. */
export declare type PaymentAchObject = {
  /** Full name of account owner */
  account_holder: string;
  /** 9-digit bank routing number */
  routing_number: number;
  /** Bank account number */
  account_number: number;
  /** Bank cccount type.  Accepted values are `checking` or `savings` */
  account_kind: string;
  /** Bank account type.  Accepted values are `personal` or `business` */
  account_type: string;
  /** Check number to associate with payment */
  check_number?: number;
  /** Check date to associate with payment. Format as YYYY-MM-DD */
  check_date?: string;
  /** Date to process the ACH payment.  Format as YYYY-MM-DD */
  process_date?: string;
  /** Name of bank where account was created */
  bank_name?: string;
  /** City of bank where account was created */
  bank_city?: string;
  /** State of bank where account was created */
  bank_state?: string;
  /** Set to `true` to save bank account detail in secure storage and return an encrypted token value.  Default is `false`.  **NOTE** If set to `true` a `customer.email` value is required */
  store_token?: boolean;
  /** Stored card nickname.  Required if **store_token** is set to `true` */
  token_nickname?: string;
};

export declare type PaymentAchRequest = {
  /** ACH/bank transfer type.  Accepted values are 'CREDIT' (payout from merchant account) or 'DEBIT' (draw from a customer account) */
  type: string;
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** The total amount to process.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  total_amount: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id?: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** ACH payment token value.  Required if `ach_detail` is not provided */
  token: string;
  /** ACH account payment detail object.  Required if `token` value is not provided */
  ach_detail: PaymentAchObject;
  /** Customer to associate with payment */
  customer_detail: PaymentCustomerObject;
  /** Payment originating IP address.  If not provided the system will attempt to qualify an ip address from the request host value */
  ip_address?: string;
  /** Payment memo provided on customer receipts */
  memo?: string;
  /** Key-value pairs for storing additional information about the payment in a structured format. */
  meta_data?: object;
  /** Set `true` to send the customer an email payment receipt.  If `true` you must provide a `customer.email` value.  Default is `false`.  */
  send_receipt?: boolean;
};

export declare type PaymentAchResponse = {
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
  /** ACH ecrypted card token.  Returned only if the payment request **ach_detail.store_token** value is set to `true` */
  token: string;
};

/**  Parameters to process an ACH `void` transaction. A void can be performed prior to settlement (batch).
 * > You cannot Cancel / Void a settled (batched) transaction. If transaction has already been settled then you must use the refund method and include an amount for a full or partial amount.
 */
export declare type PaymentAchVoid = {
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** the unique transaction_id from the original sale or authorization */
  transaction_id: string;
  /** A reference id that will be echo'd back in the message response. */
  reference_id?: string;
};

/** Response object for ACH back account transaction void */
export declare type PaymentAchVoidResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** Response data */
  data: object;
};

/** Parameters to process a refund. A refund can be issued against an ACH/Bank account transaction that has already settled (batched).
 * This function returns funds to the ACH/bank account for the full amount of the original payment transaction.
 * > If the original sale or authorization is not settled (batched) and you want to cancel the transaction use the void method.
 */
export declare type PaymentAchRefund = {
  /** The merchant account id assigned by the service provider that will process the payment */
  mid: string;
  /** The unique transaction_id from the original sale or authorization */
  transaction_id: string;
  /** The total amount to refund.	Cannot exceed the original transaction amount or balance if prior partial refund was issued.  To refund the full transaction amount or balance omit this paramter or set to `null` */
  amount?: string;
  /** A reference id that will be echo'd back in the message response. */
  reference_id?: string;
};
/** Response object for an ACH/Bank account refund transaction */
export declare type PaymentAchRefundResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
};
