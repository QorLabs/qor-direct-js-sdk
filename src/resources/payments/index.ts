import { Base } from "../base";
import { 
    genRandomString, 
    getIPAddress,
    validateCreditCardNumber,
    getCardBrand,
    validateCreditCardExpiration,
} from "../utils";
import {
    PaymentCardManualInputParams,   
    PaymentCardDetailObject,   
    PaymentCustomerDetailObject,   
    PaymentCardBillingAddressObject,
    PaymentCardResponse
} from "./types";

const cardManualResource = "payment/sale/manual";

export class Payments extends Base {

/**
 * Processes a manual card sale.
 *
 * @param {PaymentCardManualInputParams} card - The payment card params for the manual input.
 * @return {Promise<PaymentCardResponse>} - The promise that resolves with the payment card response.
 */
processManualCardSale(card: PaymentCardManualInputParams): Promise<PaymentCardResponse> {
    const { card_detail, billing, customer, ...rest } = card;

    if (!validateCreditCardNumber(card_detail?.number)) {
        throw new Error('Invalid credit card number');
    }
    if (!validateCreditCardExpiration(card_detail?.exp_month, card_detail?.exp_year)) {
        throw new Error('Invalid credit card expiration date');
    }
    const brand = getCardBrand(card_detail?.number);
    if (!brand) {
        throw new Error('Invalid credit card brand');
    }
    if ((brand === 'American Express' && card_detail?.cvv.toString().length !== 4) ||
        (card_detail?.cvv.toString().length !== 3)) {
        throw new Error('Invalid card validation number (cvv)');
    }

    if (card.send_rcpt && !customer?.email) {
        throw new Error('You must provide a customer email address to send a payment receipt')
    }

    return this.request(`/${cardManualResource}`, {
        method: 'POST',
        body: JSON.stringify({
            transaction_data: {
                mid: card.mid,
                amount: card.amount,
                orderId: card.orderid || 'ORDER_' + genRandomString(8),
                invoice_id: card.invoice_id,
                ipaddress: card.ip_address || getIPAddress(),
                creditcard: card_detail?.number,
                cvv: card_detail?.cvv,
                month: card_detail?.exp_month,
                year: card_detail?.exp_year,
                cardfullname: card_detail?.cardholder?.toUpperCase(),
                bzip: billing?.postal_code,
                baddress: billing?.street_1,
                baddress2: billing?.street_2,
                bcity: billing?.city,
                bstate: billing?.state_code,
                bcountry: billing?.country_code,
                currency: card.currency || 'USD',
                risk_score: card.risk_score,
                store_card: card.store_card ? 1 : 0,
                reference_id: card.reference_id,
                topt: card.topt,
                tid: card.tid,
                cfirstname: customer?.first_name,
                clastname: customer?.last_name,
                cemail: customer?.email,
                cphone: customer?.phone,
                metadata: card.meta_data,
                ...rest
            }
        }),
    });
}
}