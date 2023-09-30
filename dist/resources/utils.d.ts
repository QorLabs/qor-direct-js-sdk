import { PaymentCardObject } from "../resources/payments/types";
export declare function genRandomString(length: number): string;
export declare function validateCard(card_detail: PaymentCardObject): Promise<true | Error>;
export declare function getIPAddress(): Promise<string>;
export declare function validateCreditCardExpiration(month: number, year: number): boolean;
export declare function validateCreditCardNumber(cardNumber: string): boolean;
export declare function getCardBrand(cardNumber: string): string;
