import { Base } from "../base";
import { PaymentCashRequest, PaymentCashResponse } from "../types/cash-payments.types";
export declare class CashPayments extends Base {
    processCashPayment(req: PaymentCashRequest): Promise<PaymentCashResponse>;
}
