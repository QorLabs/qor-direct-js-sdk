import { Base } from "../base";
import { ProofOfDeliveryListResponse, ProofOfDeliveryQueryParams, ProofOfDeliveryCreateParams, ProofOfDeliveryCreateResponse, ProofOfDeliveryUpdateParams, ProofOfDeliveryUpdateResponse, ProofOfDeliveryDeleteResponse } from "../types/proof-of-delivery";
export declare class ProofOfDelivery extends Base {
    listProofOfDelivery(queryParams?: ProofOfDeliveryQueryParams): Promise<ProofOfDeliveryListResponse>;
    fetchProofOfDeliveryById(id: string): Promise<ProofOfDeliveryListResponse>;
    createProofOfDelivery(pofs: ProofOfDeliveryCreateParams): Promise<ProofOfDeliveryCreateResponse>;
    patchProofOfDelivery(pofs: ProofOfDeliveryUpdateParams): Promise<ProofOfDeliveryUpdateResponse>;
    deleteProofOfDelivery(id: string): Promise<ProofOfDeliveryDeleteResponse>;
}
