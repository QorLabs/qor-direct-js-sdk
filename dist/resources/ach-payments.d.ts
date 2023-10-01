import { Base } from "../base";
import { PaymentAchRequest, PaymentAchResponse } from "../types/ach-payments.types";
export declare class AchPayments extends Base {
    processAchPayment(req: PaymentAchRequest): Promise<PaymentAchResponse>;
}
