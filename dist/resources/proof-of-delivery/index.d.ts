import { Base } from "../base";
import { ProofOfDeliveryListResponse, ProofOfDeliveryListParams } from "./types";
export declare class ProofOfDelivery extends Base {
    listCardTransactions(queryParams?: ProofOfDeliveryListParams): Promise<ProofOfDeliveryListResponse>;
}
