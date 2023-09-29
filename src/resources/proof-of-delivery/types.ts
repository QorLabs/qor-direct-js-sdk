/**
 * Represents a proof of delivery record list query response.
 */
export declare type ProofOfDeliveryListResponse = {
    /** The status of the transaction.  Possible response values are 'ok' and 'error' */
    status: string
    /** The payment gateway response code.  See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string,
    /** Message associated with the response code.*/
    message: string,
    /** The query results array. */
    data: {
        /** The Proof of Delivery / Tracking unique identifier.*/
        pofs_id: string;
        /** The transaction identifier associated with the Proof of Delivery / Tracking. */
        trxn_id: string;
        /** Proof of Delivery / Tracking shipper. Values are 1 = USPS, 2 = FedEx, 3 = UPS, 4 = DHL, 5 = Other */
        shipper: number;
        /** The shipper tracking number */
        tracking_no: string;
        /** The actual or expected delivery date associated with the Proof of Delivery / Tracking. */
        delivery_date: string;
        /** Last modified date/time */
        modified: string;
        /** Created at date/time */
        created: string;
    }[]
}

/**
 * Represents proof of delivery record list query parameters.
 */
export declare type ProofOfDeliveryQueryParams = {
    /** The Proof of Delivery / Tracking unique identifier. Begins with pofs- */
    pofs_id?: string;
    /** Filter by unique transaction identifier associated with the Proof of Delivery / Tracking.  Query multiple trxn_id's in a string separated by a comma. */
    trxn_id?: string;
    /** Filter Proof of Delivery / Tracking by shipper. Values are 1 = USPS, 2 = FedEx, 3 = UPS, 4 = DHL, 5 = Other */
    shipper?: string;
    /** The shipper tracking number for the Proof of Delivery / Tracking */
    tracking_no?: string;
    /** The actual or expected delivery date associated with the Proof of Delivery / Tracking. Format is YYYY-MM-DD. Query multiple delivery dates in a string separated by a comma. */
    delivery_date: string;
}

export declare type ProofOfDeliveryCreateParams = {
    /** The unique transaction identifier associated with the Proof of Delivery / Tracking */
    trxn_id: string;
    /** The Proof of Delivery / Tracking shipper. Accepted values are 1 = USPS, 2 = FedEx, 3 = UPS, 4 = DHL, 5 = Other */
    shipper?: number;
    /** The shipper tracking number */
    tracking_no?: string;
    /** The actual or expected delivery date associated with the Proof of Delivery / Tracking.  Format YYYY-MM-DD */
    delivery_date?: string;
}

/**
 * Represents a new proof of delivery record response.
 */
export declare type ProofOfDeliveryCreateResponse = {
    /** The status of the transaction.  Possible response values are 'ok' and 'error' */
    status: string
    /** The payment gateway response code.  See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string,
    /** Message associated with the response code.*/
    message: string,
    /** The query results object. */
    result: {
        /** The Proof of Delivery / Tracking unique identifier.*/
        pofs_id: string;
    }
}

/**
 * Represents parameters for patching proof of delivery record.
*/
export declare type ProofOfDeliveryUpdateParams = {
    /** The Proof of Delivery / Tracking unique identifier. Begins with pofs- */
    pofs_id: string;
    /** The unique transaction identifier associated with the Proof of Delivery / Tracking */
    trxn_id?: string;
    /** The Proof of Delivery / Tracking shipper. Accepted values are 1 = USPS, 2 = FedEx, 3 = UPS, 4 = DHL, 5 = Other */
    shipper?: number;
    /** The shipper tracking number */
    tracking_no?: string;
    /** The actual or expected delivery date associated with the Proof of Delivery / Tracking.  Format YYYY-MM-DD */
    delivery_date?: string;
}

/**
 * Represents a patched proof of delivery record response.
*/
export declare type ProofOfDeliveryUpdateResponse = {
    /** The status of the transaction.  Possible response values are 'ok' and 'error' */
    status: string
    /** The payment gateway response code.  See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string,
    /** Message associated with the response code.*/
    message: string,
    /** The query results object. */
    result: {
        /** The number of rows affected by the update. */
        rowsAffected: string;
        /** The number of rows changed by the update. */
        rowsChanges: string;
    }
}

/**
 * Represents a deleted proof of delivery record response.
*/
export declare type ProofOfDeliveryDeleteResponse = {
    /** The status of the transaction.  Possible response values are 'ok' and 'error' */
    status: string
    /** The payment gateway response code.  See [Payment Response Codes](https://docs.qorcommerce.io/docs/payment-response-codes) for code descriptions. */
    code: string,
    /** Message associated with the response code.*/
    message: string,
    /** The query results object. */
    result: {
        /** The number of rows affected by the update. */
        rowsAffected: string;
    }
}







