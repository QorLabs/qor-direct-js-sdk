import { Base } from "../base";
import { 
    ProofOfDeliveryListResponse,
    ProofOfDeliveryQueryParams,
    ProofOfDeliveryCreateParams,
    ProofOfDeliveryCreateResponse,
    ProofOfDeliveryUpdateParams,
    ProofOfDeliveryUpdateResponse,
    ProofOfDeliveryDeleteResponse

} from "../../types/proof-of-delivery";

const podResource = "payment/transaction/proof_of_delivery";

export class ProofOfDelivery extends Base {

    /**
     * Retrieves a list of proof of delivery transactions.
     *
     * @param {ProofOfDeliveryQueryParams} [queryParams] - The query parameters for the proof of delivery request.
     * @return {Promise<ProofOfDeliveryListResponse>} A promise that resolves to the response containing a list of proof of delivery transactions.
     */
    listProofOfDelivery(queryParams?: ProofOfDeliveryQueryParams): Promise<ProofOfDeliveryListResponse> {
        return this.request<ProofOfDeliveryListResponse>(`${podResource}`, queryParams);
    }

    /**
     * Fetches an ACH transaction by its ID.
     *
     * @param {string} id - The ID of the proof of delivery to fetch.  Starts with `pofs-`.
     * @return {Promise<ProofOfDeliveryListResponse>} - A promise that resolves to proof of delivery fetched by id.
     */
    fetchProofOfDeliveryById(id: string): Promise<ProofOfDeliveryListResponse> {
        return this.request(`${podResource}/${id}`);
    }

    /**
     * Creates a proof of delivery.
     *
     * @param {ProofOfDeliveryCreateParams} pofs - The parameters for creating the proof of delivery.
     * @return {Promise<ProofOfDeliveryCreateResponse>} - A promise that resolves with the response of the proof of delivery creation.
     */
    createProofOfDelivery(pofs: ProofOfDeliveryCreateParams): Promise<ProofOfDeliveryCreateResponse> {
        return this.request(`/${podResource}`, {
            method: 'POST',
            body: JSON.stringify(pofs),
          });
    }

    /**
     * Update a proof of delivery.
     *
     * @param {ProofOfDeliveryUpdateParams} pofs - The proof of delivery update parameters.
     * @return {Promise<ProofOfDeliveryUpdateResponse>} - A promise that resolves with the proof of delivery update response.
     */
    patchProofOfDelivery(pofs: ProofOfDeliveryUpdateParams): Promise<ProofOfDeliveryUpdateResponse> {
        return this.request(`/${podResource}`, {
            method: 'PATCH',
            body: JSON.stringify(pofs),
        });
    }

    /**
     * Deletes a proof of delivery by its ID.
     *
     * @param {string} id - The ID of the proof of delivery to delete.
     * @return {Promise<ProofOfDeliveryDeleteResponse>} A Promise that resolves to the delete response.
     */
    deleteProofOfDelivery(id: string): Promise<ProofOfDeliveryDeleteResponse> {
        return this.request(`/${podResource}/${id}`, {
            method: 'DELETE',
        });
    }
}