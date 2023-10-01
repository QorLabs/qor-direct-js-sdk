import { Base } from "../base";
import { MarketplaceTransactionResponse, MarketplaceMerchantResponse, MarketplaceMerchantParameters } from "../types/marketplace.types";
export declare class Marketplace extends Base {
    fetchMarketplaceTransactionByBatchId(batch_id: string): Promise<MarketplaceTransactionResponse>;
    createMarketplaceMerchantAccount(merchant: MarketplaceMerchantParameters): Promise<MarketplaceMerchantResponse>;
}
