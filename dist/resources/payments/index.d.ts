import { Base } from "../base";
import { PaymentCardManualInputParams, PaymentCardManualInputResponse, PaymentCardTokenInputParams, PaymentCardTokenResponse, PaymentCardSwipeInputParams, PaymentCardSwipeResponse } from "./types";
export declare class Payments extends Base {
    processManualCardSale(card: PaymentCardManualInputParams): Promise<PaymentCardManualInputResponse>;
    processManualCardTokenSale(card: PaymentCardTokenInputParams): Promise<PaymentCardTokenResponse>;
    processCardTrackSale(card: PaymentCardSwipeInputParams): Promise<PaymentCardSwipeResponse>;
}
