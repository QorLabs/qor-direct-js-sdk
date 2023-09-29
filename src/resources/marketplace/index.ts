import { Base } from "../base";
import { 
    MarketplaceTransactionResponse
} from "./types";

const mptrxresource = "payment/transactions/mp/batch";

export class Marketplace extends Base {

    /**
     * Fetches a marketplace transaction by its batch ID.
     *
     * @param {string} batch_id - The batch ID of the transaction.
     * @return {Promise<MarketplaceTransactionResponse>} A promise that resolves to the transaction.
     */
    fetchMarketplaceTransactionByBatchId(batch_id: string): Promise<MarketplaceTransactionResponse> {
        return this.request(`${mptrxresource}/${batch_id}`);
    }




}