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
          body: JSON.stringify({ 
            type: 'cash',
            mid: req.mid,
            transaction_data: {
              amount: req.amount,
              currency: req.currency,
              orderId: req.order_id,
              invoiceId: req.invoice_id,
              reference_id: req.reference_id,
              service_charge: req.service_charge,
              totp: req.totp,
              ipaddress: req.ip_address,
              cfirstname: req.customer_detail?.first_name,
              clastname: req.customer_detail?.last_name,
              cemail: req.customer_detail?.email,
              cphone: req.customer_detail?.phone,
              items: req.items_detail,
            }
           }),
        });
      }

}