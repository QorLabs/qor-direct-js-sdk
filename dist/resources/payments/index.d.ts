import { Base } from "../base";
import { PaymentCardRequest, PaymentCardResponse } from "../../types/payments";
export declare class Payments extends Base {
    processCreditCard(card: PaymentCardRequest): Promise<PaymentCardResponse>;
}
