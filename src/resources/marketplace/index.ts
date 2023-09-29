import { Base } from "../base";
import { 
    MarketplaceTransactionResponse,
    MarketplaceMerchantResponse,
    MarketplaceMerchant
} from "./types";

const mktrxresource = "payment/transactions/mp/batch";
const mktNewMerchant = "channels/new_marketplace_merchant"

export class Marketplace extends Base {

    /**
     * Fetches a marketplace transaction by its batch ID.
     *
     * @param {string} batch_id - The batch ID of the transaction.
     * @return {Promise<MarketplaceTransactionResponse>} A promise that resolves to the transaction.
     */
    fetchMarketplaceTransactionByBatchId(batch_id: string): Promise<MarketplaceTransactionResponse> {
        return this.request(`${mktrxresource}/${batch_id}`);
    }

    /**
     * Creates a new marketplace merchant account.
     *
     * @param {MarketplaceMerchant} merchant - The merchant object containing the details of the merchant.
     * @return {Promise<MarketplaceMerchantResponse>} - A promise that resolves to the response of the API call.
     */
    createMarketplaceMerchantAccount(merchant: MarketplaceMerchant): Promise<MarketplaceMerchantResponse> {
        return this.request(`/${mktNewMerchant}`, {
            method: 'POST',
            body: JSON.stringify(merchant),
          });
    }

}