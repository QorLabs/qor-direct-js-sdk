export declare function genRandomString(length: number): Promise<string>;
export declare function getIPAddress(): Promise<string>;
export declare function validateCreditCardExpiration(month: number, year: number): boolean;
export declare function validateCreditCardNumber(cardNumber: string): boolean;
export declare function getCardBrand(cardNumber: string): string;
