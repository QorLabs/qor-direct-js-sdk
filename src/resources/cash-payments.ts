import { Base } from "../base";
import {
    PaymentCashRequest,
    PaymentCashResponse,
} from "../types/cash-payments.types";


export class CashPayments extends Base {

    async processCashPayment(
        req: PaymentCashRequest
      ): Promise<PaymentCashResponse> {
        return this.request(`/payment/cash`, {
          method: "POST",
          body: JSON.stringify({ transaction_data: req }),
        });
      }

}