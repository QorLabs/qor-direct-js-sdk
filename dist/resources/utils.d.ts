import { PaymentCardObject } from "../types/card-payments.types";
export declare function genRandomString(length: number): Promise<string>;
export declare function validateCard(card_detail: PaymentCardObject): Promise<Error>;
export declare function getIPAddress(): Promise<string>;
export declare function validateCreditCardExpiration(month: number, year: number): Promise<boolean>;
export declare function validateCreditCardNumber(cardNumber: string): Promise<boolean>;
export declare function getCreditCardBrand(cardNumber: string): Promise<string>;
export declare function validateCreditCardCvv(cardNumber: string, cvv: number): Promise<boolean>;
