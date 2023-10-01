import { Base } from "../base";
import {
    PaymentAchRequest,
    PaymentAchResponse
} from "../types/ach-payments.types";


export class AchPayments extends Base {
    async processAchPayment(
        req: PaymentAchRequest
      ): Promise<PaymentAchResponse> {
        return this.request(`/payment/cash`, {
          method: "POST",
          body: JSON.stringify({ transaction_data: req }),
        });
      }

}