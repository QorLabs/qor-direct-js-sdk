import { Base } from "../base";
import { MarketplaceTransactionResponse, MarketplaceMerchantResponse, MarketplaceMerchant } from "./types";
export declare class Marketplace extends Base {
    fetchMarketplaceTransactionByBatchId(batch_id: string): Promise<MarketplaceTransactionResponse>;
    createMarketplaceMerchantAccount(merchant: MarketplaceMerchant): Promise<MarketplaceMerchantResponse>;
}
