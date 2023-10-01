import {
    PaymentShippingObject,
    PaymentItemsObject,
    PaymentDiscountObject,
    PaymentCustomerObject
  } from "./shared-payment.types"
  
  
/**  Parameters to accept and record a cash payment. */
export declare type PaymentCashRequest = {
  /** The merchant account id assigned by the service provider that will accept the cash payment */
  mid: string;
  /** The total cash amount accepted.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  amount: string;
  /** ISO 4127 currency code.  Default is 'USD' */
  currency: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id: string;
  /** Associate payment transaction with an invoice */
  invoice_id: string;
  /** An internal reference id that will be echo'd back in the message response. */
  reference_id: string;
  /** Route a transaction to an external provider.  Your servicee provider will provide value(s) required here. */
  totp: string;
  /** The amount of this transaction that should be allocated to a service charge.  Cannot exceed the request `amount` value.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.0 */
  service_charge: string;
  /** Payment originating IP address.  If not provided the system will attempt to qualify an ip address from the request host value */
  ip_address: string;
  /** The payment customer detail object. */
  customer_detail?: PaymentCustomerObject;
  /** The payment discount object */
  discount_detail?: PaymentDiscountObject;
  /** The payment sale items sold array. */
  items_detail?: PaymentItemsObject;
  /** The payment transaction shipping object. */
  shipping_detail?: PaymentShippingObject;
  /** The payment 3-D Secure object. */
}

export declare type PaymentCashResponse = {
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
    /** Total amount recorded  */
    amount_recorded: string;
}