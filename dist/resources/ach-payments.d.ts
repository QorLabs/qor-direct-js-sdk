import { Base } from "../base";
import { PaymentAchRequest, PaymentAchResponse, PaymentAchRefund, PaymentAchRefundResponse, PaymentAchVoid, PaymentAchVoidResponse } from "../types/ach-payments.types";
export declare class AchPayments extends Base {
    processAchPayment(req: PaymentAchRequest): Promise<PaymentAchResponse>;
    processCreditCardVoid(req: PaymentAchVoid): Promise<PaymentAchVoidResponse>;
    processCreditCardRefund(req: PaymentAchRefund): Promise<PaymentAchRefundResponse>;
}
