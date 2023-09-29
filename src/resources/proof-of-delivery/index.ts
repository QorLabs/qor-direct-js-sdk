import { Base } from "../base";
import { 
    ProofOfDeliveryListResponse,
    ProofOfDeliveryListParams,
} from "./types";

const podResource = "payment/transaction/proof_of_delivery";
const mktNewMerchant = "channels/new_marketplace_merchant"

export class ProofOfDelivery extends Base {

    /**
     * Retrieves a list of proof of delivery records.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<CardTransactionQueryResponse{}>} A promise that resolves to response object with a data array of records.
     */
        listCardTransactions(queryParams?: ProofOfDeliveryListParams): Promise<ProofOfDeliveryListResponse> {
            return this.request<ProofOfDeliveryListResponse>(`${podResource}`, queryParams);
        }
    

}