/**
 * Represents a marketplace transaction response.
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

/**  
 * Add / Enroll a MarketPlace Merchant to portfolio
*/
export declare type MarketplaceMerchant = {
    /** Merchant wrapped in a data object  */
    data: {
        /** The name under which the merchant is doing business */
        descriptor: string;
        /** The value of annual credit card sales for this merchant.  Value should be in cents.  Example $100,000.00 should be 10000000 */
        annualCCSales?: number;
        /** The value of average credit card sales for this merchant.  Value should be in cents.  Example $100.00 should be 10000  */
        avgTicket?: number;
        /** The Merchant Category Code for the merchant.  Contact service provider for proper code */
        mcc?: string;
        /** Merchant detail object  */
        merchant: {
            /** Merchant type.  Accepted values are 0 for Sole Proprietor, 1 for Corporation, 2 for Limited Liability Company, 3 for Partnership, 5 for Non-Profit Organization and 6 for Government Organization */
            type: number;
            /** Merchant name */
            name: string;
            /** The first line of the address associated with the merchant. */
            address1: string;
            /** The second line of the address associated with the merchant. */
            address2?: string;
            /** The merchant address city name */
            city: string;
            /** The merchant address ISO-3166 2 character state/province code */
            state: string;
            /** The merchant address postal code */
            zip: number;
            /** The merchant address ISO-3166 3 character country code. */
            country: string;
            /** The merchant timezone. Accepted values are 'est', 'cst', 'pst', 'mst', 'akst', 'hst', 'sst', 'chst' and 'ast' */
            timezone: string;
            /** The merchant primary contact phone number.  Use numbers only, no dashes, parenthesis or special characters */
            phone: number;
            /** The merchant primary contact email address */
            email: string;
            /** The IRS Employer Identication Number associated with this merchant. If the business is a Sole Proprietor this should match the SSN of the primary owner.  Use numbers only, no dashes or special characters */
            ein: number;
            /** The merchant marketplace website */
            website: string;
            /** Timestamp when terms and conditions were signed by seller/merchant.  Use unix timestamp (number of seconds since January 1, 1970). */
            tcDate: string | number;
        };
        /** List (array) of bank accounts associated with the merchant.  Ensure at least one primary account is provided.  */
        bank_accounts: {
            /** Bank account information */
            account: {
                /** The bank account type/  Accepted values are 8 for Checking, 9 for Savings, 10 for Corporate Checking, and 11 for Corporate Savings */
                method: number;
                /** The bank account number */
                number: string | number;
                /** The bank routing number */
                routing: string | number;
            };
            /** The bank account currency code in ISO-4127 3 character format. */
            currency: string;
            /** Set 1 if this is the primary bank account.  Set 0 if not.  */
            primary: number;
        }[];
        /** List (array) of owners associated with the merchant.  Ensure to provide at least 1 primary owner with more than 50% ownership */
        owners: {
            /** Title/role of the owner.  Example 'President' */
            title: string;
            /** Owner first name */
            first: string;
            /** Owner last name */
            last: string;
            /** Owner date of birth.  Format as YYYYMMDD */
            dob: number;
            /** Owner email address */
            email: string;
            /** Owner primary phone number.  Use numbers only, no dashes, parenthesis or special characters */
            phone: number;
            /** Owner percentage of ownership.  Provide value in 'basis' points.  Example 80% should be 8000 */
            ownership: number;
            /** Owner primary residence timezone.  Accepted values are 'est', 'cst', 'pst', 'mst', 'akst', 'hst', 'sst', 'chst' and 'ast' */
            timezone: string;
            /** Owner primary residence line 1 street address */
            address1: string;
            /** Owner primary residence line 2 street address */
            address2?: string;
            /** Owner primary residence city name */
            city: string;
            /** Owner primary residence ISO-3166 2 character state/province code */
            state: string;
            /** Owner primary residence postal code */
            zip: number;
            /** Owner primary residence ISO-3166 3 character country code */
            country: string;
            /** Owner social security number.  Use numbers only, no dashes or special characters */
            ssn: number;
            /** Owner driver's license ISO-3166 2 character state code. */
            dl_state?: string;
            /** Owner driver's license number.  Use numbers only, no dashes or special characters */
            dl_numb?: string;
            /** Set as 1 if this is the primary owner.  Set as 0 if not.  */
            primary: number;
        }[];
    };
};

/** 
 * Add / Enroll a MarketPlace Merchant response
*/

export declare type MarketplaceMerchantResponse = {
    /** The status of the transaction.  Possible response values are 'ok' and 'error' */
    status: string
    /** The payment gateway response code.  See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string,
    /** Message associated with the response code.*/
    message: string,
    /** The ID of the newly boarded merchant */
    id: string
}


