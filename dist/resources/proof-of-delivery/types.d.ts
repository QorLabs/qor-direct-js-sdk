export declare type ProofOfDeliveryListResponse = {
    status: string;
    code: string;
    message: string;
    data: {
        id: string;
        trxn_id: string;
        shipper: number;
        tracking_no: string;
        delivery_date: string;
        modified: string;
        created: string;
    }[];
};
export declare type ProofOfDeliveryListParams = {
    pofs_id?: string;
    trxn_id?: string;
    shipper?: string;
    tracking_no?: string;
    delivery_date: string;
};
