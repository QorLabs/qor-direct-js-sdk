import { Base } from "../base";
import { 
    genRandomString, 
    getIPAddress,
    validateCard,

} from "./utils";
import {
    PaymentCardRequest,   
    PaymentCardResponse,
} from "../types/payments";

const cardManualCardSaleResource = "payment/sale/manual";
const cardManualCardAuthResource = "payment/sale/authorize";

export class Payments extends Base {

    async processCreditCard(card: PaymentCardRequest): Promise<PaymentCardResponse> {
        
        const { token_detail, card_detail, track_detail, customer_detail, discount_detail, items_detail, shipping_detail, three_ds, ...rest } = card;

        if (!card.type) throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');
        if (card.type.toUpperCase() !== 'SALE' && card.type.toUpperCase() !== 'AUTHORIZE') throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");

        // validate card_detail or token_detail or track_detail
        if (
            (!Object.keys(card_detail) && !Object.keys(token_detail) && !Object.keys(track_detail)) ||
            (Object.keys(card_detail) && Object.keys(token_detail)) ||
            (Object.keys(card_detail) && Object.keys(track_detail)) ||
            (Object.keys(token_detail) && Object.keys(track_detail))
            ) throw new Error("You must provide only one of 'card_detail', 'token_detail', or 'track_detail' objects with required values to process a payment");
        
        // validate card_detail
        if (Object.keys(card_detail)) await validateCard(card_detail).catch((e) => { throw new Error(e);});
        if (card_detail?.store_card && !customer_detail?.email) throw new Error("You must provide a 'customer_detail.email' address to store a card token")

        // validate token_detail
        if (Object.keys(token_detail) && !token_detail.token) throw new Error("You must provide a 'token_detail.token' value");
        if (Object.keys(token_detail) && !token_detail.cvv) throw new Error("You must provide a 'token_detail.cvv' value");

        // validate customer email for send receipt
        if (card.send_receipt && !customer_detail?.email) throw new Error("You must provide a 'customer_detail.email' value to send a payment receipt")
        
        const resource = card.type.toUpperCase() === 'SALE' ? cardManualCardSaleResource : cardManualCardAuthResource

        const data ={
            mid: card.mid,
            amount: card.total_amount,
            total_tax: card.total_tax_amount,
            ipaddress: card.ip_address || getIPAddress(),
            currency: card.currency || 'USD',
            orderId: card.order_id || 'ORDER_' + genRandomString(12),
            invoiceId: card.invoice_id,
            purchase_order: card.purchase_order,
            risk_score: card.risk_score,
            reference_id: card.reference_id,
            topt: card.topt,
            tid: card.terminal_id,
            metadata: card.meta_data,
            send_rcpt: card.send_receipt === true ? 1 : 0,

            // shipping
            shipping_amount: shipping_detail?.amount,
            shipping_zip: shipping_detail?.postal_code,
            shipping_country: shipping_detail?.country_code,

            // credit card data
            creditcard: card_detail?.number || token_detail?.token,
            cvv: card_detail?.cvv || token_detail.cvv,
            month: card_detail?.exp_month,
            year: card_detail?.exp_year,
            cardfullname: card_detail?.cardholder?.toUpperCase(),
            bzip: card_detail?.postal_code,
            baddress: card_detail?.street_1,
            baddress2: card_detail?.street_2,
            bcity: card_detail?.city,
            bstate: card_detail?.state_code,
            bcountry: card_detail?.country_code,

            // track data
            trackdata: track_detail.track,
            ksnTrack: track_detail.ksn,

            // Items 
            line_items: items_detail,

            // 3ds
            response_3DS: three_ds.response,
            CAVV: three_ds.CAVV,
            ECIFlag: three_ds.ECIFlag,
            XID: three_ds.XID,

            // store card
            store_card: card_detail?.store_card === true ? 1 : 0,
            nickname: card_detail?.nickname,
            
            // customer
            cfirstname: customer_detail?.first_name,
            clastname: customer_detail?.last_name,
            cemail: customer_detail?.email,
            cphone: customer_detail?.phone,
            cwebaddress: customer_detail?.website,

            ...rest
        }

        return this.request(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify({transaction_data: data}),
        });
    }
}