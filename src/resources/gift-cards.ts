import { Base } from "../base";
import { genRandomString, getIPAddress } from "./utils";

import {
  GiftCardActivate,
  GiftCardActivateResponse,
  GiftCardBalance,
  GiftCardBalanceResponse,
  GiftCardLoad,
  GiftCardLoadResponse,
  GiftCardProcessSale,
  GiftCardProcessSaleResponse,
  GiftCardDeactivate,
  GiftCardDeactivateResponse,
  GiftCardRefund,
  GiftCardRefundResponse,
} from "../types/gift-cards.types";

export class GiftCards extends Base {
  /**
   * Check gift card balance.
   *
   * @param {GiftCardBalance} req - The gift card balance object.
   * @return {Promise<GiftCardBalanceResponse>} - A promise that resolves to the gift card balance request.
   */
  async processGiftCardBalance(
    req: GiftCardBalance
  ): Promise<GiftCardBalanceResponse> {
    return await this.request(`/gift/balance`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
          giftcard: 2,
          mid: req.mid,
          creditcard: req.account_number,
        },
      }),
    });
  }

  /**
   * Process a gift card sale.
   *
   * @param {GiftCardProcessSale} req - The gift card sale object.
   * @return {Promise<GiftCardProcessSaleResponse>} - A promise that resolves to the gift card sale request.
   */
  async processGiftCardSale(
    req: GiftCardProcessSale
  ): Promise<GiftCardProcessSaleResponse> {
    if (!req.redemption_type) {
      throw new Error(
        "You must provide a 'redemption_type' value to process a gift card sale.  Accepted types are 'FULL' or 'PARTIAL'"
      );
    }

    if (
      req.redemption_type.toUpperCase() !== "FULL" &&
      req.redemption_type.toUpperCase() !== "PARTIAL"
    ) {
      throw new Error(
        "You must provide a 'redemption_type' value of 'FULL' or 'PARTIAL' to process a gift card sale"
      );
    }

    return await this.request(`/gift/sale`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
          giftcard: req.redemption_type.toUpperCase() === "FULL" ? 1 : 8,
          mid: req.mid,
          amount: req.total_amount,
          creditcard: req.account_number,
          invoiceId: req.invoice_id,
          orderId: req.order_id || genRandomString(12),
          ipaddress: req.ip_address || getIPAddress(),
        },
      }),
    });
  }

  /**
   * Load a new or reload an existing Gift Card.
   *
   * @param {GiftCardLoad} req - The gift card load balance object.
   * @return {Promise<GiftCardLoadResponse>} - A promise that resolves to the gift card load request.
   */
  async processGiftCardLoad(req: GiftCardLoad): Promise<GiftCardLoadResponse> {
    return await this.request(`/gift/load`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
          giftcard: 5,
          mid: req.mid,
          creditcard: req.account_number,
          amount: req.amount,
        },
      }),
    });
  }

  /**
   * Activate and load a new Gift Card.
   *
   * @param {GiftCardActivate} req - The gift card activate and load balance object.
   * @return {Promise<GiftCardActivateResponse>} - A promise that resolves to the gift card activate and load request.
   */
  async processGiftCardActivate(
    req: GiftCardActivate
  ): Promise<GiftCardActivateResponse> {
    return await this.request(`/gift/activate`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
            giftcard: 5,
            mid: req.mid,
            creditcard: req.account_number,
            amount: req.amount,
        },
      }),
    });
  }

  /**
   * Deactivate a Gift Card. This should be done when a card is lost, stolen or demagnetized in order to stop unauthorized use
   *
   * @param {GiftCardDeactivate} req - The gift card load balance object.
   * @return {Promise<GiftCardDeactivateResponse>} - A promise that resolves to the gift card load request.
   */
  async processGiftCardDeactivate(
    req: GiftCardDeactivate
  ): Promise<GiftCardDeactivateResponse> {
    return await this.request(`/gift/deactivate`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
            giftcard: 5,
            mid: req.mid,
            creditcard: req.account_number,
        },
      }),
    });
  }

  /**
   * Refund a Gift Card transaction
   *
   * @param {GiftCardRefund} req - The gift card refund transaction object.
   * @return {Promise<GiftCardRefundResponse>} - A promise that resolves to the gift card refund transaction request.
   */
  async processGiftCardRefund(
    req: GiftCardRefund
  ): Promise<GiftCardRefundResponse> {
    return await this.request(`/gift/refund`, {
      method: "POST",
      body: JSON.stringify({
        transaction_data: {
          giftcard: 5,
          mid: req.mid,
          amount: req.amount,
          creditcard: req.account_number,
        },
      }),
    });
  }
}
