export declare type GiftCardBalance = {
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
};
export declare type GiftCardBalanceResponse = {};

export declare type GiftCardProcessSale = {
  /** Provide the redemption type for the gift card.  Accepted values are 'FULL' or 'PARTIAL' */
  redemption_type: string;
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
  /** The total amount to apply to gift card.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
  total_amount: string;
  /** Unique order ID for this transaction. If not provided, a unique order id will be generated as 'ORDER_<8 random characters>. */
  order_id?: string;
  /** Associate payment transaction with an invoice */
  invoice_id?: string;
  /** Payment originating IP address.  If not provided the system will attempt to qualify an ip address from the request host value */
  ip_address?: string;
};

export declare type GiftCardProcessSaleResponse = {
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
  /** Remaining balance on gift card */
  balance: string;
  /** The host authorization code */
  authcode: string;
};

/** Applies a full or partial refund on a transaction associated with a gift card. */
export declare type GiftCardRefund = {
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
  /** Amount to refund.  Cannot exceed the gift card load amount */
  amount: string;
};
export declare type GiftCardRefundResponse = {};

/** Add/load funds (credit) to an existing gift card. */
export declare type GiftCardLoad = {
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
  /** Amount to load on the gift card. */
  amount: string;
};
export declare type GiftCardLoadResponse = {};

/** Create a new gift card account and add/load funds (credit) to the card */
export declare type GiftCardActivate = {
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
  /** Amount to load on the gift card. */
  amount: string;
};
export declare type GiftCardActivateResponse = {};

/** Deactivate gift card.  This should be done when a card is lost, stolen or demagnetized in order to stop unauthorized use. */
export declare type GiftCardDeactivate = {
  /** The merchant account id assigned by the service provider that will process the gift card */
  mid: string;
  /** Gift card track or account data */
  account_number: string;
};
export declare type GiftCardDeactivateResponse = {};
