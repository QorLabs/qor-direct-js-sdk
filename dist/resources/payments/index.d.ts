import { Base } from "../base";
import { PaymentCardManualInputParams, PaymentCardResponse } from "./types";
export declare class Payments extends Base {
    processManualCardSale(card: PaymentCardManualInputParams): Promise<PaymentCardResponse>;
}
