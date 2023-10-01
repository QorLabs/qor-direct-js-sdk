import { Base } from "../base";
import { GiftCardActivate, GiftCardActivateResponse, GiftCardBalance, GiftCardBalanceResponse, GiftCardLoad, GiftCardLoadResponse, GiftCardProcessSale, GiftCardProcessSaleResponse, GiftCardDeactivate, GiftCardDeactivateResponse, GiftCardRefund, GiftCardRefundResponse } from "../types/gift-cards.types";
export declare class GiftCards extends Base {
    processGiftCardBalance(req: GiftCardBalance): Promise<GiftCardBalanceResponse>;
    processGiftCardSale(req: GiftCardProcessSale): Promise<GiftCardProcessSaleResponse>;
    processGiftCardLoad(req: GiftCardLoad): Promise<GiftCardLoadResponse>;
    processGiftCardActivate(req: GiftCardActivate): Promise<GiftCardActivateResponse>;
    processGiftCardDeactivate(req: GiftCardDeactivate): Promise<GiftCardDeactivateResponse>;
    processGiftCardRefund(req: GiftCardRefund): Promise<GiftCardRefundResponse>;
}
