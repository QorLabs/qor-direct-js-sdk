import { Base } from "../base";
import { genRandomString, getIPAddress } from "./utils";

import {
  PaymentAchRequest,
  PaymentAchResponse,
  PaymentAchRefund,
  PaymentAchRefundResponse,
  PaymentAchVoid,
  PaymentAchVoidResponse,
} from "../types/ach-payments.types";

export class AchPayments extends Base {
  /**
   * Processes an ACH payment.
   *
   * @param {PaymentAchRequest} req - The ACH payment request object.
   * @return {Promise<PaymentAchResponse>} - A promise that resolves to the payment response object.
   */
  async processAchPayment(req: PaymentAchRequest): Promise<PaymentAchResponse> {
    const { ach_detail, customer_detail, ...rest } = req;

    // check type
    if (!req.type) {
      throw new Error(
        "You must provide a 'type' value to process an ACH payment.  Accepted values are 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account"
      );
    }

    if (
      req.type.toUpperCase() !== "CREDIT" &&
      req.type.toUpperCase() !== "DEBIT"
    ) {
      throw new Error(
        "You must provide a 'type' value of 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account"
      );
    }

    // check payment detail
    if (!Object.keys(ach_detail).length && !req.token) {
      throw new Error(
        "You must provide an 'ach_detail' object or a 'token' value to process an ACH payment"
      );
    }
    if (ach_detail && req.token) {
      throw new Error(
        "You must provide one of an 'ach_detail' object or a 'token' value to process an ACH payment.  Not both"
      );
    }

    if (ach_detail.store_token && !customer_detail?.email) {
      throw new Error(
        "You must provide a 'customer_detail.email' value to create and store an ACH payment token"
      );
    }
    if (ach_detail.store_token && !ach_detail?.token_nickname) {
      throw new Error(
        "You must provide an 'ach_detail.token_nickname' value to create and store an ACH payment token"
      );
    }

    // check account type
    if (!ach_detail.account_kind || !ach_detail.account_type) {
      throw new Error(
        "You must provide both an 'ach_detail.account_kind' and 'ach_detail.account_type' values to process a payment"
      );
    }
    if (
      ach_detail.account_kind.toLocaleUpperCase() !== "PERSONAL" &&
      ach_detail.account_kind.toLocaleUpperCase() !== "BUSINESS"
    ) {
      throw new Error(
        "You must provide a 'ach_detail.account_kind' value of 'PERSONAL' or 'BUSINESS' to process a payment"
      );
    }
    if (
      ach_detail.account_type.toLocaleUpperCase() !== "CHECKING" &&
      ach_detail.account_type.toLocaleUpperCase() !== "SAVINGS"
    ) {
      throw new Error(
        "You must provide a 'ach_detail.account_type' value of 'CHECKING' or 'SAVINGS' to process a payment"
      );
    }

    let account_type: number;
    if (ach_detail.account_type.toUpperCase() === "CHECKING") {
      if (ach_detail.account_kind.toUpperCase() === "PERSONAL") {
        account_type = 1; // personal checking
      } else if (ach_detail.account_kind.toUpperCase() === "BUSINESS") {
        account_type = 3; // business checking
      }
    } else if (ach_detail.account_type.toUpperCase() === "SAVINGS") {
      if (ach_detail.account_kind.toUpperCase() === "PERSONAL") {
        account_type = 2; // personal savings
      } else if (ach_detail.account_kind.toUpperCase() === "BUSINESS") {
        account_type = 4; // business savings
      }
    }

    const ep =
      req.type.toUpperCase() === "DEBIT"
        ? "payment/ach/debit"
        : "payment/ach/credit";

    return await this.request(`/${ep}`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
          type: req.type,
          mid: req.mid,
          amount: req.total_amount,
          orderid: req.order_id || genRandomString(12),
          checknumber: ach_detail?.check_number,
          checkdate: ach_detail?.check_date,
          transactiondate: ach_detail?.process_date,
          name_on_account: ach_detail?.account_holder,
          routing_number: ach_detail?.routing_number,
          account_number: ach_detail?.account_number
            ? ach_detail?.account_number
            : req.token,
          account_type: account_type,
          bankname: ach_detail?.bank_name,
          bankcity: ach_detail?.bank_city,
          bankstate: ach_detail?.bank_state,
          customerid: customer_detail?.customer_id,
          cfirstname: customer_detail?.first_name,
          clastname: customer_detail?.last_name,
          cphone: customer_detail?.phone,
          cemail: customer_detail?.email,
          caddress1: customer_detail?.address_street_1,
          caddress2: customer_detail?.address_street_2,
          ccity: customer_detail?.address_city,
          cstate: customer_detail?.address_state_code,
          czip: customer_detail?.address_postal_code,
          ipaddress: req.ip_address || getIPAddress(),
          memo: req.memo,
          store_accnt: ach_detail?.store_token ? 1 : 0,
          account_nickname: ach_detail?.store_token
            ? ach_detail?.token_nickname
            : "",
          send_rcpt: req.send_receipt,
          ...rest,
        },
      }),
    });
  }

  /**
   * Processes an ACH/Bank account payment void.
   *
   * @param {PaymentAchVoid} req - The ACH/Bank account payment void object.
   * @return {Promise<PaymentAchVoidResponse>} - The ACH/Bank account payment void response.
   */
  async processCreditCardVoid(
    req: PaymentAchVoid
  ): Promise<PaymentAchVoidResponse> {
    return await this.request(`/payment/ach/void`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: req }),
    });
  }

  /**
   * Process an ACH/Bank account refund.
   *
   * @param {PaymentAchRefund} req - The ACH/Bank account payment refund object.
   * @returns {Promise<PaymentCardRefundResponse>} The ACH/Bank account payment refund response.
   */
  async processCreditCardRefund(
    req: PaymentAchRefund
  ): Promise<PaymentAchRefundResponse> {
    return await this.request(`/payment/ach/refund`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: req }),
    });
  }
}
