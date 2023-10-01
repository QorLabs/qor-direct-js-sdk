import { Base } from "../base";
import { PaymentCardRequest, PaymentCardResponse, PaymentCardVoid, PaymentCardVoidResponse, PaymentCardRefund, PaymentCardRefundResponse, PaymentCardAuthorizeCapture, PaymentCardAuthorizeCaptureResponse } from "../types/card-payments.types";
export declare class CardPayments extends Base {
    processCreditCardPayment(card: PaymentCardRequest): Promise<PaymentCardResponse>;
    processCreditCardVoid(card: PaymentCardVoid): Promise<PaymentCardVoidResponse>;
    processCreditCardRefund(card: PaymentCardRefund): Promise<PaymentCardRefundResponse>;
    processCreditCardCapture(card: PaymentCardAuthorizeCapture): Promise<PaymentCardAuthorizeCaptureResponse>;
}
