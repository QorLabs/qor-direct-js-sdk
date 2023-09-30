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
    PaymentCardManualInputResponse,
    PaymentCardTokenInputParams,
    PaymentCardTokenResponse,   
    PaymentCardSwipeInputParams,
    PaymentCardSwipeResponse,
} from "./types";

const cardManualCardSaleResource = "payment/sale/manual";
const cardManualCardAuthResource = "payment/sale/authorize";
const cardManualTokenResource = "payment/sale/token";
const cardSwipeResource = "payment/card/swipe";

export class Payments extends Base {

    /**
     * Processes a manual card sale.
     *
     * @param {PaymentCardManualInputParams} card - The payment card params for the manual input.
     * @return {Promise<PaymentCardResponse>} - The promise that resolves with the payment card response.
     */
    processManualCardSale(card: PaymentCardManualInputParams): Promise<PaymentCardManualInputResponse> {
        const { card_detail, billing, customer, discount, ...rest } = card;

        if (!validateCreditCardNumber(card_detail?.number)) throw new Error('Invalid credit card number');
        if (!validateCreditCardExpiration(card_detail?.exp_month, card_detail?.exp_year)) throw new Error('Invalid credit card expiration date');
        const brand = getCardBrand(card_detail?.number);
        if (!brand) throw new Error('Invalid credit card brand');
        if ((brand === 'American Express' && card_detail?.cvv.toString().length !== 4) || (card_detail?.cvv.toString().length !== 3)) throw new Error('Invalid card validation number (cvv)');
        
        if (card.send_receipt && !customer?.email) throw new Error('You must provide a customer email address to send a payment receipt')
        
        if (!card.type) throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');
        if (card.type.toUpperCase() !== 'SALE' && card.type.toUpperCase() !== 'AUTHORIZE') throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");

        const resource = card.type.toUpperCase() === 'SALE' ? cardManualCardSaleResource : cardManualCardAuthResource

        return this.request(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify({
                transaction_data: {
                    mid: card.mid,
                    amount: card.amount,
                    orderId: card.order_id || 'ORDER_' + genRandomString(8),
                    invoiceId: card.invoice_id,
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
                    tid: card.terminal_id,
                    cfirstname: customer?.first_name,
                    clastname: customer?.last_name,
                    cemail: customer?.email,
                    cphone: customer?.phone,
                    metadata: card.meta_data,
                    send_rcpt: card.send_receipt,
                    ...rest
                }
            }),
        });
    }

    /**
     * Processes a manual card token sale.
     *
     * @param {PaymentCardTokenInputParams} card - The payment card token input parameters.
     * @return {Promise<PaymentCardTokenResponse>} - A promise that resolves to the payment card token response.
     */
    processManualCardTokenSale(card: PaymentCardTokenInputParams): Promise<PaymentCardTokenResponse> {

        if (!card.type) throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');
        if (card.type.toUpperCase() !== 'SALE' && card.type.toUpperCase() !== 'AUTHORIZE') throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");

        const resource = card.type.toUpperCase() === 'SALE' ? cardManualTokenResource : cardManualCardAuthResource

        return this.request(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify({
                transaction_data: {
                    mid: card.mid,
                    amount: card.amount,
                    creditcard: card.token,
                    cvv: card.cvv,
                    orderId: card.order_id || 'ORDER_' + genRandomString(8),
                    invoiceId: card.invoice_id,
                    ipaddress: card.ip_address || getIPAddress(),                        
                    currency: card.currency || 'USD',
                    service_charge: card.service_charge,
                    cash_discount_amount: card.discount?.amount,
                    cash_discount_percent: card.discount?.percent,
                    risk_score: card.risk_score,
                    reference_id: card.reference_id,
                    topt: card.topt,
                    tid: card.terminal_id,
                    metadata: card.meta_data,
                    send_rcpt: card.send_receipt,
                }
            }),
        });
    }

    /**
     * Processes a card track sale.
     *
     * @param {PaymentCardSwipeInputParams} card - the payment card swipe input parameters
     * @return {Promise<PaymentCardSwipeResponse>} - a promise that resolves to the payment card swipe response
     */
    processCardTrackSale(card: PaymentCardSwipeInputParams): Promise<PaymentCardSwipeResponse> {
        const { track_data, customer, discount, ...rest } = card;

        if (!card.type) throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');
        if (card.type.toUpperCase() !== 'SALE' && card.type.toUpperCase() !== 'AUTHORIZE') throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");

        const resource = card.type.toUpperCase() === 'SALE' ? cardSwipeResource : cardManualCardAuthResource

        return this.request(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify({
                transaction_data: {
                    mid: card.mid,
                    amount: card.amount,
                    orderId: card.order_id || 'ORDER_' + genRandomString(8),
                    invoiceId: card.invoice_id,
                    ipaddress: card.ip_address || getIPAddress(),
                    trackdata: track_data?.track,
                    ksnTrack: track_data?.ksn,
                    currency: card.currency || 'USD',
                    risk_score: card.risk_score,
                    store_card: card.store_card ? 1 : 0,
                    reference_id: card.reference_id,
                    topt: card.topt,
                    tid: card.terminal_id,
                    cfirstname: customer?.first_name,
                    clastname: customer?.last_name,
                    cemail: customer?.email,
                    cphone: customer?.phone,
                    metadata: card.meta_data,
                    send_rcpt: card.send_receipt,
                    ...rest
                }
            }),
        });
    }
}