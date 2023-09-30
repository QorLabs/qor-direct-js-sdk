import { Base } from "../base";
import { genRandomString, getIPAddress, validateCard } from "./utils";
import {
  PaymentCardRequest,
  PaymentCardResponse,
  PaymentCardVoid,
  PaymentCardVoidResponse,
  PaymentCardRefund,
  PaymentCardRefundResponse,
  PaymentCardAuthorizeCapture,
  PaymentCardAuthorizeCaptureResponse,
} from "../types/card-payments";

const cardManualCardSaleResource = "payment/sale/manual";
const cardManualCardAuthResource = "payment/sale/authorize";

export class Payments extends Base {
  /**
   * Process a credit card payment.
   *
   * @param {PaymentCardRequest} card - Process a credit card payment.
   * @return {Promise<PaymentCardResponse>} A promise that resolves to the credit card payment response.
   */
  async processCreditCard(
    card: PaymentCardRequest
  ): Promise<PaymentCardResponse> {
    const {
      token_detail,
      card_detail,
      track_detail,
      customer_detail,
      discount_detail,
      items_detail,
      shipping_detail,
      three_ds,
      ...rest
    } = card;

    if (!card.type)
      throw new Error(
        'You must provide a processing type.  Accepted values are "sale", "authorize", "L2" and "L3"'
      );
    if (
      card.type.toUpperCase() !== "SALE" &&
      card.type.toUpperCase() !== "AUTHORIZE" &&
      card.type.toUpperCase() !== "L2" &&
      card.type.toUpperCase() !== "L3"
    )
      throw new Error(
        "Invalid processing type.  Accepted 'type' values are 'sale', 'authorize' and 'L2' for Level 2 transactions and 'L3' for Level 3 transactions"
      );

    if (
      card.type.toUpperCase() === "L2" &&
      (!card.total_tax_amount ||
        !customer_detail ||
        !Object.keys(customer_detail).length)
    )
      throw new Error(
        "You must provide a 'total_tax_amount' and 'customer_detail' values for Level 2 transactions"
      );
    if (
      (card.type.toUpperCase() === "L3" &&
        (!card.total_tax_amount ||
          !customer_detail ||
          !Object.keys(customer_detail).length)) ||
      !items_detail ||
      !Object.keys(items_detail).length
    )
      throw new Error(
        "You must provide a 'total_tax_amount', 'customer_detail' and at least one 'items_detail' object for Level 3 transactions"
      );

    // validate card_detail or token_detail or track_detail
    if (
      (!Object.keys(card_detail).length &&
        !Object.keys(token_detail).length &&
        !Object.keys(track_detail).length) ||
      (Object.keys(card_detail).length && Object.keys(token_detail).length) ||
      (Object.keys(card_detail).length && Object.keys(track_detail).length) ||
      (Object.keys(token_detail).length && Object.keys(track_detail).length)
    )
      throw new Error(
        "You must provide only one of 'card_detail', 'token_detail', or 'track_detail' objects with required values to process a payment"
      );

    // validate card_detail
    if (Object.keys(card_detail).length)
      await validateCard(card_detail).catch((e) => {
        throw new Error(e);
      });
    if (card_detail?.store_card && !customer_detail?.email)
      throw new Error(
        "You must provide a 'customer_detail.email' address to store a card token"
      );

    // validate token_detail
    if (Object.keys(token_detail).length && !token_detail.token)
      throw new Error("You must provide a 'token_detail.token' value");
    if (Object.keys(token_detail).length && !token_detail.cvv)
      throw new Error("You must provide a 'token_detail.cvv' value");

    // validate customer email for send receipt
    if (card.send_receipt && !customer_detail?.email)
      throw new Error(
        "You must provide a 'customer_detail.email' value to send a payment receipt"
      );

    const resource =
      card.type.toUpperCase() === "SALE" ||
      card.type.toUpperCase() === "L2" ||
      card.type.toUpperCase() === "L3"
        ? cardManualCardSaleResource
        : cardManualCardAuthResource;

    const data = {
      islvl3:
        card.type.toUpperCase() === "L3" || card.type.toUpperCase() === "L2"
          ? 1
          : 0,
      mid: card.mid,
      amount: card.total_amount,
      total_tax: card.total_tax_amount,
      ipaddress: card.ip_address || getIPAddress(),
      currency: card.currency || "USD",
      orderId: card.order_id || "ORDER_" + genRandomString(12),
      invoiceId: card.invoice_id,
      purchase_order: card.purchase_order,
      risk_score: card.risk_score,
      reference_id: card.reference_id,
      topt: card.topt,
      tid: card.terminal_id,
      metadata: card.meta_data,
      send_rcpt: card.send_receipt === true ? 1 : 0,

      // shipping
      shipping_amount: shipping_detail?.amount,
      shipping_zip: shipping_detail?.postal_code,
      shipping_country: shipping_detail?.country_code,

      // credit card data
      creditcard: card_detail?.number || token_detail?.token,
      cvv: card_detail?.cvv || token_detail.cvv,
      month: card_detail?.exp_month,
      year: card_detail?.exp_year,
      cardfullname: card_detail?.cardholder?.toUpperCase(),
      bzip: card_detail?.postal_code,
      baddress: card_detail?.street_1,
      baddress2: card_detail?.street_2,
      bcity: card_detail?.city,
      bstate: card_detail?.state_code,
      bcountry: card_detail?.country_code,

      // track data
      trackdata: track_detail.track,
      ksnTrack: track_detail.ksn,

      // Items
      line_items: items_detail,

      // 3ds
      response_3DS: three_ds.response,
      CAVV: three_ds.CAVV,
      ECIFlag: three_ds.ECIFlag,
      XID: three_ds.XID,

      // store card
      store_card: card_detail?.store_card === true ? 1 : 0,
      nickname: card_detail?.nickname,

      // customer
      cfirstname: customer_detail?.first_name,
      clastname: customer_detail?.last_name,
      cemail: customer_detail?.email,
      cphone: customer_detail?.phone,
      cwebaddress: customer_detail?.website,

      ...rest,
    };

    return this.request(`/${resource}`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: data }),
    });
  }

  /**
   * Processes a credit card void.
   *
   * @param {PaymentCardVoid} card - The payment card void object.
   * @return {Promise<PaymentCardVoidResponse>} - A promise that resolves to the payment card void response.
   */
  async processCreditCardVoid(
    card: PaymentCardVoid
  ): Promise<PaymentCardVoidResponse> {
    return this.request(`/payment/void`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: card }),
    });
  }

  /**
   * Process a credit card refund.
   *
   * @param {PaymentCardRefund} card - The payment card refund object.
   * @returns {Promise<PaymentCardRefundResponse>} The payment card refund response.
   */
  async processCreditCardRefund(
    card: PaymentCardRefund
  ): Promise<PaymentCardRefundResponse> {
    return this.request(`/payment/refund`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: card }),
    });
  }

  /**
   * Processes a card authorization payment capture.
   *
   * @param {PaymentCardAuthorizeCapture} card - The card information for the original card authorization and capture amount.
   * @return {Promise<PaymentCardAuthorizeCaptureResponse>} A promise that resolves to the response of the card authorization capture.
   */
  async processCardAuthorizeCapture(
    card: PaymentCardAuthorizeCapture
  ): Promise<PaymentCardAuthorizeCaptureResponse> {
    return this.request(`/payment/capture`, {
      method: "POST",
      body: JSON.stringify({ transaction_data: card }),
    });
  }
}
