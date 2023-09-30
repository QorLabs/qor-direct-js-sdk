import { Base } from "../base";
import { PaymentCardRequest, PaymentCardResponse, PaymentCardVoid, PaymentCardVoidResponse, PaymentCardRefund, PaymentCardRefundResponse, PaymentCardAuthorizeCapture, PaymentCardAuthorizeCaptureResponse } from "../types/card-payments";
export declare class Payments extends Base {
    processCreditCard(card: PaymentCardRequest): Promise<PaymentCardResponse>;
    processCreditCardVoid(card: PaymentCardVoid): Promise<PaymentCardVoidResponse>;
    processCreditCardRefund(card: PaymentCardRefund): Promise<PaymentCardRefundResponse>;
    processCardAuthorizeCapture(card: PaymentCardAuthorizeCapture): Promise<PaymentCardAuthorizeCaptureResponse>;
}
