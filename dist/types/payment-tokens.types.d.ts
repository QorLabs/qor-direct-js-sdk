import { PaymentCustomerObject } from "./shared-payment.types";
export declare type CardTokenObject = {
    number: string;
    cardholder: string;
    exp_month: number;
    exp_year: number;
    cvv?: number;
    postal_code: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_code?: string;
    token_nickname?: string;
};
export declare type CardTokenResponseObject = {
    profile_id: string;
    cardholder_name: string;
    phone: string;
    email: string;
    expdate: string;
    brand: string;
    last_4: string;
};
export declare type CreateCardToken = {
    type?: string;
    card_detail: CardTokenObject;
    customer: {
        customer_id: PaymentCustomerObject["customer_id"];
        email: PaymentCustomerObject["email"];
        phone: PaymentCustomerObject["phone"];
    };
};
export declare type CreateTokenResponse = {
    status: string;
    code: string;
    message: string;
    profile_id: string;
    token: string;
};
export declare type UpdateCardToken = {
    token: string;
    month: string;
    year: string;
};
export declare type UpdateCardTokenResponse = {
    status: string;
    code: string;
    message: string;
    token: string;
};
export declare type RotateCardToken = {
    token: string;
};
export declare type RotateCardTokenResponse = {
    status: string;
    code: string;
    message: string;
    token: string;
};
export declare type RollbackCardToken = {
    token: string;
};
export declare type RollbackCardTokenResponse = {
    status: string;
    code: string;
    message: string;
    token: string;
};
export declare type DeleteCardToken = {
    token: string;
};
export declare type DeleteCardTokenResponse = {
    status: string;
    code: string;
    message: string;
};
export declare type FetchCardTokenParams = {
    customer_id: string;
    token: string;
};
export declare type FetchCardTokenByIdResponse = {
    status: string;
    code: string;
    message: string;
    token: CardTokenResponseObject;
};
export declare type FetchCardTokenByCustomerResponse = {
    status: string;
    code: string;
    message: string;
    count: number;
    tokens: CardTokenResponseObject[];
};
export declare type AchTokenObject = {
    account_holder: string;
    routing_number: number;
    account_number: number;
    account_kind: string;
    account_type: string;
    bank_name?: string;
    bank_city?: string;
    bank_state?: string;
    store_token?: boolean;
    token_nickname?: string;
};
export declare type CreateAchToken = {
    type?: string;
    ach_detail: AchTokenObject;
    customer: {
        customer_id: PaymentCustomerObject["customer_id"];
        email: PaymentCustomerObject["email"];
        phone: PaymentCustomerObject["phone"];
        street_1: PaymentCustomerObject["address_street_1"];
        street_2: PaymentCustomerObject["address_street_1"];
        city: PaymentCustomerObject["address_city"];
        state_code: PaymentCustomerObject["address_state_code"];
        postal_code: PaymentCustomerObject["address_postal_code"];
    };
};
export declare type AchTokenReponseObject = {
    profile_id: string;
    account_holder_name: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    nickname: string;
    account_type: string;
    bank_name: string;
    last_4: string;
};
export declare type FetchAchTokenByIdResponse = {
    status: string;
    code: string;
    message: string;
    token: AchTokenReponseObject;
};
export declare type FetchAchTokenByCustomerResponse = {
    status: string;
    code: string;
    message: string;
    tokens: AchTokenReponseObject[];
};
export declare type FetchAchTokenParams = {
    token: string;
    customer_id: string;
};
