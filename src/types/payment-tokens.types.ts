import { PaymentCustomerObject } from "./shared-payment.types";

/** Credit card token object */
export declare type CardTokenObject = {
  /** Credit card number to tokenize */
  number: string;
  /** Cardholder name as it appears on card */
  cardholder: string;
  /** Credit card expiration month (1-12) */
  exp_month: number;
  /** Credit card expiration year (4 digits) */
  exp_year: number;
  /** Credit Card validation code.  */
  cvv?: number;
  /** Credit Card billing postal code */
  postal_code: string;
  /** Credit Card billing street 1 address.  Recommend providing this value for AVS checks and to avoid any downgrades. */
  street_1?: string;
  /** Credit Card billing street 2 address */
  street_2?: string;
  /** Credit Card billing address city name.  Recommend providing this value for AVS checks and to avoid any downgrades. */
  city?: string;
  /** Credit Card billing address ISO-3166-2 character state/province code.  Recommend providing this value for AVS checks and to avoid any downgrades. */
  state_code?: string;
  /** Stored card nickname.  Required if **type** is set to `STORED` */
  token_nickname?: string;
};

export declare type CardTokenResponseObject = {
  /** The customer id assocaited with the token */
  profile_id: string;
  /** The card token cardholder name */
  cardholder_name: string;
  /** The customer phone number assoiated with token */
  phone: string;
  /** The customer email assoiated with token */
  email: string;
  /** The cardholder expiration date */
  expdate: string;
  /** The card brand */
  brand: string;
  /** The last 4 digits of the card number */
  last_4: string;
};

/** The create card token object */
export declare type CreateCardToken = {
  /** Credit card token type.  Accepted values are 'TEMPORARY' and 'STORED'.
   * A TEMPORARY token value will create a temporary token that can only be used one time and will expire in 1 hour.
   * A STORED token value will create a permanent token that can be reused and will never expire.
   * Default is 'STORED'
   */
  type?: string;
  card_detail: CardTokenObject;
  customer: {
    customer_id: PaymentCustomerObject["customer_id"];
    email: PaymentCustomerObject["email"];
    phone: PaymentCustomerObject["phone"];
  };
};

/* The create token response object */
export declare type CreateTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** Customer Id associated with token (if provided) */
  profile_id: string;
  /** The encrypted card token created */
  token: string;
};

/** The update credit card token object */
export declare type UpdateCardToken = {
  /** The token to be updated.  Must be a valid 'STORED' token */
  token: string;
  /** The token new expiration month value */
  month: string;
  /** The token new expiration year value */
  year: string;
};

/** The updated card token response object */
export declare type UpdateCardTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The encrypted card token created */
  token: string;
};

/** The rotate credit card token object */
export declare type RotateCardToken = {
  /** The token to be expired and rotated.  Must be a valid 'STORED' token */
  token: string;
};

/** The rotated card token response object */
export declare type RotateCardTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The new card token value */
  token: string;
};

/** The rollback credit card token object */
export declare type RollbackCardToken = {
  /** The token to be expired and rolled back to the previous token value.  Must be a valid 'STORED' token */
  token: string;
};

/** The rollback card token response object */
export declare type RollbackCardTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The previous card token value */
  token: string;
};

/** The delete credit card token object */
export declare type DeleteCardToken = {
  /** The token to be deleted */
  token: string;
};

/** The rollback card token response object */
export declare type DeleteCardTokenResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
};

/** Available path parameters for fetching card token(s)  */
export declare type FetchCardTokenParams = {
  /** List all tokens by customer_id.  */
  customer_id: string;
  /** The token value to fetch.  Must be a valid 'STORED' token.  Required if customer_id is not provided */
  token: string;
};

/** Fetching a credit card token by token value response object */
export declare type FetchCardTokenByIdResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The card token returned */
  token: CardTokenResponseObject;
};

/** Fetching a credit card token by customer ID value response object array */
export declare type FetchCardTokenByCustomerResponse = {
  /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
  status: string;
  /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
  code: string;
  /** Message associated with the response code. */
  message: string;
  /** The number of results returned */
  count: number;
  /** The list of card tokens associated with the customer */
  tokens: CardTokenResponseObject[];
};

export declare type AchTokenObject = {
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

export declare type CreateAchToken = {
   /** ACH/Bank token type.  Accepted values are 'TEMPORARY' and 'STORED'.
   * A TEMPORARY token value will create a temporary token that can only be used one time and will expire in 1 hour.
   * A STORED token value will create a permanent token that can be reused and will never expire.
   * Default is 'STORED'
   */
  type?: string;
  ach_detail: AchTokenObject;
  customer: {
    customer_id: PaymentCustomerObject["customer_id"];
    email: PaymentCustomerObject["email"];
    phone: PaymentCustomerObject["phone"];
    street_1: PaymentCustomerObject["address_street_1"];
    street_2: PaymentCustomerObject["address_street_1"];
    city: PaymentCustomerObject["address_city"];
    state_code: PaymentCustomerObject["address_state_code"];
    postal_code: PaymentCustomerObject["address_postal_code"];
  };
};

export declare type AchTokenReponseObject = {
    /** Customer Id associated with token */
    profile_id: string;
    /** ACH/bank account holder name */
    account_holder_name: string;
    /** Customer billing street address 1 */
    address: string;
    /** Customer billing street address 2 */
    address2: string;
    /** Customer billing city */
    city: string;
    /** Customer billing state */
    state: string;
    /** Customer billing zip */
    zip: string;
    /** Customer phone number */
    phone: string;
    /** Customer email address */
    email: string;
    /** ACH/Bank token nickname. */
    nickname: string;
    /** ACH/Bank account type.
     * 1 = personal checking
     * 2 = personal savings
     * 3 = corporate checking
     * 4 = corporate savings
     */
    account_type: string;
    /** Bank name assocaited with account */
    bank_name: string;
    /** Last 4 digits of tokenized bank account */
    last_4: string;
}

/** Fetching an ACH/Bank token by token value response object */
export declare type FetchAchTokenByIdResponse = {
    /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
    status: string;
    /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string;
    /** Message associated with the response code. */
    message: string;
    /** The card token returned */
    token: AchTokenReponseObject;
  };

/** Fetching a credit card token by customer ID value response object array */
export declare type FetchAchTokenByCustomerResponse = {
    /** The status of the transaction. Possible response values are 'approved', 'declined' and 'error'. */
    status: string;
    /** The payment gateway response code. See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string;
    /** Message associated with the response code. */
    message: string;
    /** The number of results returned */
    tokens: AchTokenReponseObject[];
  };

export declare type FetchAchTokenParams = {
    /** ACH token value to fetch */
    token: string;
    /** Customer Id associated with token */
    customer_id: string;
}

