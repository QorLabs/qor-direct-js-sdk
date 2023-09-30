export declare type ProofOfDeliveryListResponse = {
    status: string;
    code: string;
    message: string;
    data: {
        pofs_id: string;
        trxn_id: string;
        shipper: number;
        tracking_no: string;
        delivery_date: string;
        modified: string;
        created: string;
    }[];
};
export declare type ProofOfDeliveryQueryParams = {
    pofs_id?: string;
    trxn_id?: string;
    shipper?: string;
    tracking_no?: string;
    delivery_date: string;
};
export declare type ProofOfDeliveryCreateParams = {
    trxn_id: string;
    shipper?: number;
    tracking_no?: string;
    delivery_date?: string;
};
export declare type ProofOfDeliveryCreateResponse = {
    status: string;
    code: string;
    message: string;
    result: {
        pofs_id: string;
    };
};
export declare type ProofOfDeliveryUpdateParams = {
    pofs_id: string;
    trxn_id?: string;
    shipper?: number;
    tracking_no?: string;
    delivery_date?: string;
};
export declare type ProofOfDeliveryUpdateResponse = {
    status: string;
    code: string;
    message: string;
    result: {
        rowsAffected: string;
        rowsChanges: string;
    };
};
export declare type ProofOfDeliveryDeleteResponse = {
    status: string;
    code: string;
    message: string;
    result: {
        rowsAffected: string;
    };
};
