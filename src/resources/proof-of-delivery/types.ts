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
        id: string;
        trxn_id: string;
        shipper: number;
        tracking_no: string;
        delivery_date: string;
        modified: string;
        created: string;
    }[]
}

/**
 * Represents proof of delivery record list query parameters.
 */
export declare type ProofOfDeliveryListParams = {
    pofs_id?: string;
    trxn_id?: string;
    shipper?: string;
    tracking_no?: string;
    delivery_date: string;
}
