import { Base } from "../base";
import {
  validateCreditCardCvv,
  validateCreditCardExpiration,
  validateCreditCardNumber,
} from "./utils";
import {
  CreateCardToken,
  CreateTokenResponse,
  FetchCardTokenParams,
  FetchCardTokenByIdResponse,
  FetchCardTokenByCustomerResponse,
  UpdateCardToken,
  UpdateCardTokenResponse,
  RollbackCardToken,
  RollbackCardTokenResponse,
  RotateCardToken,
  RotateCardTokenResponse,
  DeleteCardToken,
  DeleteCardTokenResponse,
  CreateAchToken,
  FetchAchTokenParams,
  FetchAchTokenByCustomerResponse,
  FetchAchTokenByIdResponse,
} from "../types/payment-tokens.types";

export class PaymentTokens extends Base {
  /**
   * Create a credit card token.
   *
   * @param {CreateCardToken} req - The request object containing the card details and customer information.
   * @return {Promise<CreateTokenResponse>} A promise that resolves to the response object containing the card token.
   */
  async processCreateCardToken(
    req: CreateCardToken
  ): Promise<CreateTokenResponse> {
    const { card_detail, customer } = req;

    if (!req.type) {
      req.type = "STORED";
    }

    const validTypes = ["STORED", "TEMPORARY"];
    if (!validTypes.includes(req.type.toUpperCase())) {
      throw new Error(
        "Invalid card type. Accepted types are 'TEMPORARY' and 'STORED'"
      );
    }

    if (!card_detail.number) {
      throw new Error("Card number is required to create a card token");
    }
    if (!validateCreditCardNumber(card_detail.number)) {
      throw new Error("Invalid card number");
    }

    if (!card_detail.exp_month) {
      throw new Error("Expiration month is required to create a card token");
    }
    if (!card_detail.exp_year) {
      throw new Error("Expiration year is required to create a card token");
    }
    if (
      !validateCreditCardExpiration(card_detail.exp_month, card_detail.exp_year)
    ) {
      throw new Error("Invalid expiration month or year");
    }

    if (!validateCreditCardCvv(card_detail.number, card_detail.cvv)) {
      throw new Error("Invalid CVV");
    }

    if (req.type.toUpperCase() === "STORED" && !card_detail.token_nickname) {
      throw new Error(
        "Card token nickname is required to create a stored card token"
      );
    }

    const street1 = card_detail.street_1 || "";
    const street2 = card_detail.street_2 || "";

    return await this.request(`/payment/token}`, {
      method: "POST",
      body: {
        store: req.type.toUpperCase() === "TEMPORARY" ? 0 : 1,
        profile_id: customer?.customer_id,
        cnickname: card_detail.token_nickname,
        creditcard: card_detail.number,
        cardfullname: card_detail.cardholder,
        month: card_detail.exp_month,
        year: card_detail.exp_year,
        baddress: street1 && street2 ? `${street1} ${street2}` : street1,
        bcity: card_detail.city || "",
        bstate: card_detail.state_code || "",
        bzip: card_detail.postal_code || "",
        cphone: customer?.phone || "",
        cemail: customer?.email || "",
        cvv: card_detail.cvv.toString(),
      },
    });
  }

  /**
   * Fetches a credit card token by token value.
   *
   * @param {FetchCardTokenParams} req - The fetch card token parameters.
   * @return {Promise<FetchCardTokenByIdResponse>} - The response object with the fetched card token.
   */
  async processFetchTokenById(
    req: FetchCardTokenParams
  ): Promise<FetchCardTokenByIdResponse> {
    const a1: { status: string; code: string; message: string; token: object } =
      await this.request(`/payment/token/${req.token}`, {
        method: "GET",
      });
    return {
      status: a1.status,
      code: a1.code,
      message: a1.message,
      token: a1.token[0],
    };
  }

  /**
   * Lists credit card tokens by Customer ID.
   *
   * @param {FetchCardTokenParams} req - The fetch card token parameters.
   * @return {Promise<FetchCardTokenByCustomerResponse>} - The response object with the fetched card tokens array.
   */
  async processFetchTokenByCustomerId(
    req: FetchCardTokenParams
  ): Promise<FetchCardTokenByCustomerResponse> {
    return await this.request(`/payment/token/${req.customer_id}`, {
      method: "GET",
    });
  }

  /**
   * Update credit card tokens expiration date.
   *
   * @param {UpdateCardToken} req - The update card token expire date parameters.
   * @return {Promise<UpdateCardTokenResponse>} - The response object with the update status.
   */
  async processUpdateToken(
    req: UpdateCardToken
  ): Promise<UpdateCardTokenResponse> {
    return await this.request(`/payment/token}`, {
      method: "PATCH",
      body: {
        transaction_data: {
          last4: req.token.substring(0, 4),
          ...req,
        },
      },
    });
  }

  /**
   * Rotate a payment token (create new encrypted token from existing card token).
   *
   * @param {RotateCardToken} req - The rotate card token parameters.
   * @return {Promise<RotateCardTokenResponse>} - The response status object with the new token.
   */
  async processRotateToken(
    req: RotateCardToken
  ): Promise<RotateCardTokenResponse> {
    return await this.request(`/payment/token}`, {
      method: "PUT",
      body: {
        transaction_data: {
          last4: req.token.substring(0, 4),
          ...req,
        },
      },
    });
  }

  /**
   * Rollback a payment token to the prior token value.
   *
   * @param {RollbackCardToken} req - The rollback card token parameters.
   * @return {Promise<RollbackCardTokenResponse>} - The response status object and prior token value.
   */
  async processRollbackToken(
    req: RollbackCardToken
  ): Promise<RollbackCardTokenResponse> {
    return await this.request(`/payment/token}`, {
      method: "PUT",
      body: {
        transaction_data: {
          last4: req.token.substring(0, 4),
          ...req,
        },
      },
    });
  }

  /**
   * Delete a payment token from the secure vault.
   *
   * @param {DeleteCardToken} req - The delete card token parameters.
   * @return {Promise<DeleteCardToken>} - The response status object.
   */
  async processDeleteToken(
    req: DeleteCardToken
  ): Promise<DeleteCardTokenResponse> {
    return await this.request(`/payment/token}`, {
      method: "DELETE",
      body: {
        transaction_data: {
          last4: req.token.substring(0, 4),
          ...req,
        },
      },
    });
  }

  /**
   * Create a credit card token.
   *
   * @param {CreateAchToken} req - The request object containing the card details and customer information.
   * @return {Promise<AchTokenReponse>} A promise that resolves to the response object containing the card token.
   */
  async processCreateAchToken(
    req: CreateAchToken
  ): Promise<CreateTokenResponse> {
    const { ach_detail, customer } = req;

    if (!req.type) {
      req.type = "STORED";
    }

    const validTypes = ["STORED", "TEMPORARY"];
    if (!validTypes.includes(req.type.toUpperCase())) {
      throw new Error(
        "Invalid card type. Accepted types are 'TEMPORARY' and 'STORED'"
      );
    }

    if (!ach_detail.account_number) {
      throw new Error("Account number is required to create a bank token");
    }

    if (req.type.toUpperCase() === "STORED" && !ach_detail.token_nickname) {
      throw new Error(
        "Card token nickname is required to create a stored card token"
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

    const street1 = customer.street_1 || "";
    const street2 = customer.street_2 || "";

    return await this.request(`/payment/token}`, {
      method: "POST",
      body: {
        store: req.type.toUpperCase() === "TEMPORARY" ? 0 : 1,
        profile_id: customer?.customer_id,
        account_type,
        name_on_account: ach_detail.account_holder,
        cnickname: ach_detail.token_nickname,
        account_number: ach_detail.account_number,
        routing_number: ach_detail.routing_number,
        baddress: street1 && street2 ? `${street1} ${street2}` : street1,
        bcity: customer?.city || "",
        bstate: customer?.state_code || "",
        bzip: customer?.postal_code || "",
        cphone: customer?.phone || "",
        cemail: customer?.email || "",
      },
    });
  }

  /**
   * Fetches an ACH/bank token by token value.
   *
   * @param {FetchCardTokenParams} req - The fetch ACH/Bank token parameters.
   * @return {Promise<FetchAchTokenByIdResponse>} - The response object with the fetched ACH/Bank token.
   */
  async processFetchAchTokenById(
    req: FetchAchTokenParams
  ): Promise<FetchAchTokenByIdResponse> {
    const a1: { status: string; code: string; message: string; token: object } =
      await this.request(`/payment/ach/token/${req.token}`, {
        method: "GET",
      });
    return {
      status: a1.status,
      code: a1.code,
      message: a1.message,
      token: a1.token[0],
    };
  }

  /**
   * Lists ACH/Bank card tokens by Customer ID.
   *
   * @param {FetchAchTokenParams} req - The fetch card token parameters.
   * @return {Promise<FetchAchTokenByCustomerResponse>} - The response object with the fetched card tokens array.
   */
  async processFetchAchTokenByCustomerId(
    req: FetchCardTokenParams
  ): Promise<FetchAchTokenByCustomerResponse> {
    return await this.request(`/payment/ach/tokens/${req.customer_id}`, {
      method: "GET",
    });
  }
}
