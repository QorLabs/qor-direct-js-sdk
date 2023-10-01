import"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.apply(this,arguments)}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}var o=function(){try{return Promise.resolve(fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){var t=e.ip;return console.log("IP Address:",t),t}).catch(function(e){console.error("Error fetching IP address:",e)}))}catch(e){return Promise.reject(e)}};function a(e){for(var t="",r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}var i=/*#__PURE__*/function(){function t(e){var t,r;this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=e.apiKey,this.clientKey=e.clientKey,this.requestId=null!=(t=e.requestId)?t:a(12),this.baseUrl=null!=(r=e.baseUrl)?r:"https://api-sandbox.qorcommerce.io/v3"}return t.prototype.request=function(t,r,n){try{var o=this,a=new URL(""+o.baseUrl+t);if(r){var i=new URLSearchParams;Object.entries(r).forEach(function(e){i.append(e[0],e[1])}),a.search=new URLSearchParams(i).toString()}var s=e({},n,{headers:{"Content-Type":"application/json","x-api-key":o.apiKey,"x-client-key":o.clientKey,"x-request-id":o.requestId}});return console.log("Sending Request",JSON.stringify(""+a),s),Promise.resolve(fetch(a,s)).then(function(e){if(e.ok)return e.json();throw console.error("ERROR",e.statusText),new Error(e.statusText)})}catch(e){return Promise.reject(e)}},t}(),s="/payment/transactions",c=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchPaymentTransactionById=function(e){try{return Promise.resolve(this.request("/payment/transaction/"+e)).then(function(e){return{status:e.status,code:e.code,message:e.message,data:e.data[0]}})}catch(e){return Promise.reject(e)}},n.listPaymentTransactions=function(e){return this.request(""+s,e)},n.listPaymentTransactionsByProfileId=function(e){return this.request("/payment/transactions/profile/"+e)},n.listPaymentTransactionsByBatchId=function(e){return this.request("/payment/transactions/batch/"+e)},n.fetchAchTransactionById=function(e){return this.request("/ach/transactions/"+e)},n.listAchTransactions=function(e){return this.request(""+s,e)},r}(i),d=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchMarketplaceTransactionByBatchId=function(e){return this.request("payment/transactions/mp/batch/"+e)},n.createMarketplaceMerchantAccount=function(e){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify({data:e})})},r}(i),u="payment/transaction/proof_of_delivery",l=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.listProofOfDelivery=function(e){return this.request(""+u,e)},n.fetchProofOfDeliveryById=function(e){return this.request(u+"/"+e)},n.createProofOfDelivery=function(e){return this.request("/"+u,{method:"POST",body:JSON.stringify(e)})},n.patchProofOfDelivery=function(e){return this.request("/"+u,{method:"PATCH",body:JSON.stringify(e)})},n.deleteProofOfDelivery=function(e){return this.request("/"+u+"/"+e,{method:"DELETE"})},r}(i),p=["token_detail","card_detail","track_detail","customer_detail","discount_detail","items_detail","shipping_detail","three_ds"],m=/*#__PURE__*/function(r){function i(){return r.apply(this,arguments)||this}t(i,r);var s=i.prototype;return s.processCreditCardPayment=function(t){try{var r=function(){var r;if(null!=c&&c.store_token&&(null==u||!u.email))throw new Error("You must provide a 'customer_detail.email' address to store a card token");if(Object.keys(s).length&&!s.token)throw new Error("You must provide a 'token_detail.token' value");if(Object.keys(s).length&&!s.cvv)throw new Error("You must provide a 'token_detail.cvv' value");if(t.send_receipt&&(null==u||!u.email))throw new Error("You must provide a 'customer_detail.email' value to send a payment receipt");var n="SALE"===t.type.toUpperCase()||"L2"===t.type.toUpperCase()||"L3"===t.type.toUpperCase()?"payment/sale/manual":"payment/sale/authorize",p=e({islvl3:"L3"===t.type.toUpperCase()||"L2"===t.type.toUpperCase()?1:0,mid:t.mid,amount:t.total_amount,total_tax:t.total_tax_amount,ipaddress:t.ip_address||o(),currency:t.currency||"USD",orderId:t.order_id||"ORDER_"+a(12),invoiceId:t.invoice_id,purchase_order:t.purchase_order,risk_score:t.risk_score,reference_id:t.reference_id,topt:t.topt,tid:t.terminal_id,metadata:t.meta_data,send_rcpt:!0===t.send_receipt?1:0,shipping_amount:null==h?void 0:h.amount,shipping_zip:null==h?void 0:h.postal_code,shipping_country:null==h?void 0:h.country_code,creditcard:(null==c?void 0:c.number)||(null==s?void 0:s.token),cvv:(null==c?void 0:c.cvv)||s.cvv,month:null==c?void 0:c.exp_month,year:null==c?void 0:c.exp_year,cardfullname:null==c||null==(r=c.cardholder)?void 0:r.toUpperCase(),bzip:null==c?void 0:c.postal_code,baddress:null==c?void 0:c.street_1,baddress2:null==c?void 0:c.street_2,bcity:null==c?void 0:c.city,bstate:null==c?void 0:c.state_code,bcountry:null==c?void 0:c.country_code,trackdata:d.track,ksnTrack:d.ksn,cash_discount_amount:null==l?void 0:l.amount,cash_discount_percentage:null==l?void 0:l.percent,line_items:m,response_3DS:y.response,CAVV:y.CAVV,ECIFlag:y.ECIFlag,XID:y.XID,store_card:!0===(null==c?void 0:c.store_token)?1:0,nickname:null==c?void 0:c.token_nickname,cfirstname:null==u?void 0:u.first_name,clastname:null==u?void 0:u.last_name,cemail:null==u?void 0:u.email,cphone:null==u?void 0:u.phone,cwebaddress:null==u?void 0:u.website},v);return i.request("/"+n,{method:"POST",body:JSON.stringify({transaction_data:p})})},i=this,s=t.token_detail,c=t.card_detail,d=t.track_detail,u=t.customer_detail,l=t.discount_detail,m=t.items_detail,h=t.shipping_detail,y=t.three_ds,v=n(t,p);if(!t.type)throw new Error('You must provide a processing type.  Accepted values are "sale", "authorize", "L2" and "L3"');if("SALE"!==t.type.toUpperCase()&&"AUTHORIZE"!==t.type.toUpperCase()&&"L2"!==t.type.toUpperCase()&&"L3"!==t.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale', 'authorize' and 'L2' for Level 2 transactions and 'L3' for Level 3 transactions");if(!("L2"!==t.type.toUpperCase()||t.total_tax_amount&&u&&Object.keys(u).length))throw new Error("You must provide a 'total_tax_amount' and 'customer_detail' values for Level 2 transactions");if(!(("L3"!==t.type.toUpperCase()||t.total_tax_amount&&u&&Object.keys(u).length)&&m&&Object.keys(m).length))throw new Error("You must provide a 'total_tax_amount', 'customer_detail' and at least one 'items_detail' object for Level 3 transactions");if(!Object.keys(c).length&&!Object.keys(s).length&&!Object.keys(d).length||Object.keys(c).length&&Object.keys(s).length||Object.keys(c).length&&Object.keys(d).length||Object.keys(s).length&&Object.keys(d).length)throw new Error("You must provide only one of 'card_detail', 'token_detail', or 'track_detail' objects with required values to process a payment");var _=function(){if(Object.keys(c).length)return Promise.resolve(function(e){try{if(!e.number)return Promise.resolve(new Error("A 'card_detail.number' value is required"));if(!e.exp_month)return Promise.resolve(new Error("A 'card_detail.exp_month' value is required"));if(!e.exp_year)return Promise.resolve(new Error("A 'card_detail.exp_year' value is required"));if(!e.cvv)return Promise.resolve(new Error("A 'card_detail.cvv' value is required"));if(!function(e){var t=e.replace(/[\s-]/g,"");if(!/^\d+$/.test(t)||!(t.length>=13&&t.length<=19))return!1;for(var r=0,n=!1,o=t.length-1;o>=0;o--){var a=parseInt(t.charAt(o));n&&(a=(a*=2)>9?a-9:a),r+=a,n=!n}return r%10==0}(e.number))return Promise.resolve(new Error("Invalid 'card_detail.number' value"));if(n=e.exp_month,o=e.exp_year,i=(a=new Date).getMonth()+1,o>(s=a.getFullYear())+10||!(o>s||o===s&&n>=i))return Promise.resolve(new Error("Invalid 'card_detail.exp_month' or 'card_detail.exp_year' value"));var t=(r=e.number.replace(/[\s-]/g,""),/^4/.test(r)?"Visa":/^5[1-5]/.test(r)?"Mastercard":/^3[47]/.test(r)?"American Express":/^6(?:011|5)/.test(r)?"Discover":/^(?:2131|1800|35\d{3})/.test(r)?"JCB":/^3(?:0[0-5]|[68])/.test(r)?"Diners Club":/^(?:5[0678]|6304|6390|67\d{2})/.test(r)?"Maestro":"Unknown");if(!t)return Promise.resolve(new Error("Invalid or not supported credit card brand"));if("American Express"===t&&4!==e.cvv.toString().length||3!==e.cvv.toString().length)return Promise.resolve(new Error("Invalid 'card_detail.cvv' value"));if(e.store_token&&!e.token_nickname)throw new Error("You must provide 'card_detail.nickname' to store a card token");return Promise.resolve(!0)}catch(e){return Promise.reject(e)}var r,n,o,a,i,s}(c).catch(function(e){throw new Error(e)})).then(function(){})}();return Promise.resolve(_&&_.then?_.then(r):r())}catch(e){return Promise.reject(e)}},s.processCreditCardVoid=function(e){try{return Promise.resolve(this.request("/payment/void",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},s.processCreditCardRefund=function(e){try{return Promise.resolve(this.request("/payment/refund",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},s.processCreditCardCapture=function(e){try{return Promise.resolve(this.request("/payment/capture",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},i}(i),h=["ach_detail","customer_detail"],y=/*#__PURE__*/function(r){function i(){return r.apply(this,arguments)||this}t(i,r);var s=i.prototype;return s.processAchPayment=function(t){try{var r,i=t.ach_detail,s=t.customer_detail,c=n(t,h);if(!t.type)throw new Error("You must provide a 'type' value to process an ACH payment.  Accepted values are 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account");if("CREDIT"!==t.type.toUpperCase()&&"DEBIT"!==t.type.toUpperCase())throw new Error("You must provide a 'type' value of 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account");if(!Object.keys(i).length&&!t.token)throw new Error("You must provide an 'ach_detail' object or a 'token' value to process an ACH payment");if(i&&t.token)throw new Error("You must provide one of an 'ach_detail' object or a 'token' value to process an ACH payment.  Not both");if(i.store_token&&(null==s||!s.email))throw new Error("You must provide a 'customer_detail.email' value to create and store an ACH payment token");if(i.store_token&&(null==i||!i.token_nickname))throw new Error("You must provide an 'ach_detail.token_nickname' value to create and store an ACH payment token");if(!i.account_kind||!i.account_type)throw new Error("You must provide both an 'ach_detail.account_kind' and 'ach_detail.account_type' values to process a payment");if("PERSONAL"!==i.account_kind.toLocaleUpperCase()&&"BUSINESS"!==i.account_kind.toLocaleUpperCase())throw new Error("You must provide a 'ach_detail.account_kind' value of 'PERSONAL' or 'BUSINESS' to process a payment");if("CHECKING"!==i.account_type.toLocaleUpperCase()&&"SAVINGS"!==i.account_type.toLocaleUpperCase())throw new Error("You must provide a 'ach_detail.account_type' value of 'CHECKING' or 'SAVINGS' to process a payment");"CHECKING"===i.account_type.toUpperCase()?"PERSONAL"===i.account_kind.toUpperCase()?r=1:"BUSINESS"===i.account_kind.toUpperCase()&&(r=3):"SAVINGS"===i.account_type.toUpperCase()&&("PERSONAL"===i.account_kind.toUpperCase()?r=2:"BUSINESS"===i.account_kind.toUpperCase()&&(r=4));var d="DEBIT"===t.type.toUpperCase()?"payment/ach/debit":"payment/ach/credit";return Promise.resolve(this.request("/"+d,{method:"POST",body:JSON.stringify({transaction_data:e({type:t.type,mid:t.mid,amount:t.total_amount,orderid:t.order_id||a(12),checknumber:null==i?void 0:i.check_number,checkdate:null==i?void 0:i.check_date,transactiondate:null==i?void 0:i.process_date,name_on_account:null==i?void 0:i.account_holder,routing_number:null==i?void 0:i.routing_number,account_number:null!=i&&i.account_number?null==i?void 0:i.account_number:t.token,account_type:r,bankname:null==i?void 0:i.bank_name,bankcity:null==i?void 0:i.bank_city,bankstate:null==i?void 0:i.bank_state,customerid:null==s?void 0:s.customer_id,cfirstname:null==s?void 0:s.first_name,clastname:null==s?void 0:s.last_name,cphone:null==s?void 0:s.phone,cemail:null==s?void 0:s.email,caddress1:null==s?void 0:s.address_street_1,caddress2:null==s?void 0:s.address_street_2,ccity:null==s?void 0:s.address_city,cstate:null==s?void 0:s.address_state_code,czip:null==s?void 0:s.address_postal_code,ipaddress:t.ip_address||o(),memo:t.memo,store_accnt:null!=i&&i.store_token?1:0,account_nickname:null!=i&&i.store_token?null==i?void 0:i.token_nickname:"",send_rcpt:t.send_receipt},c)})}))}catch(e){return Promise.reject(e)}},s.processCreditCardVoid=function(e){try{return Promise.resolve(this.request("/payment/ach/void",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},s.processCreditCardRefund=function(e){try{return Promise.resolve(this.request("/payment/ach/refund",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},i}(i),v=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.processCashPayment=function(e){try{var t,r,n,o;return Promise.resolve(this.request("/payment/cash",{method:"POST",body:JSON.stringify({type:"cash",mid:e.mid,transaction_data:{amount:e.amount,currency:e.currency,orderId:e.order_id,invoiceId:e.invoice_id,reference_id:e.reference_id,service_charge:e.service_charge,totp:e.totp,ipaddress:e.ip_address,cfirstname:null==(t=e.customer_detail)?void 0:t.first_name,clastname:null==(r=e.customer_detail)?void 0:r.last_name,cemail:null==(n=e.customer_detail)?void 0:n.email,cphone:null==(o=e.customer_detail)?void 0:o.phone,items:e.items_detail}})}))}catch(e){return Promise.reject(e)}},r}(i),_=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.processGiftCardBalance=function(e){try{return Promise.resolve(this.request("/gift/balance",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:2,mid:e.mid,creditcard:e.account_number}})}))}catch(e){return Promise.reject(e)}},n.processGiftCardSale=function(e){try{if(!e.redemption_type)throw new Error("You must provide a 'redemption_type' value to process a gift card sale.  Accepted types are 'FULL' or 'PARTIAL'");if("FULL"!==e.redemption_type.toUpperCase()&&"PARTIAL"!==e.redemption_type.toUpperCase())throw new Error("You must provide a 'redemption_type' value of 'FULL' or 'PARTIAL' to process a gift card sale");return Promise.resolve(this.request("/gift/sale",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:"FULL"===e.redemption_type.toUpperCase()?1:8,mid:e.mid,amount:e.total_amount,creditcard:e.account_number,invoiceId:e.invoice_id,orderId:e.order_id||a(12),ipaddress:e.ip_address||o()}})}))}catch(e){return Promise.reject(e)}},n.processGiftCardLoad=function(e){try{return Promise.resolve(this.request("/gift/load",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:5,mid:e.mid,creditcard:e.account_number,amount:e.amount}})}))}catch(e){return Promise.reject(e)}},n.processGiftCardActivate=function(e){try{return Promise.resolve(this.request("/gift/activate",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:5,mid:e.mid,creditcard:e.account_number,amount:e.amount}})}))}catch(e){return Promise.reject(e)}},n.processGiftCardDeactivate=function(e){try{return Promise.resolve(this.request("/gift/deactivate",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:5,mid:e.mid,creditcard:e.account_number}})}))}catch(e){return Promise.reject(e)}},n.processGiftCardRefund=function(e){try{return Promise.resolve(this.request("/gift/refund",{method:"POST",body:JSON.stringify({transaction_data:{giftcard:5,mid:e.mid,amount:e.amount,creditcard:e.account_number}})}))}catch(e){return Promise.reject(e)}},r}(i),f=function(e){this.cardPayments=void 0,this.achPayments=void 0,this.cashPayments=void 0,this.giftCards=void 0,this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.cardPayments=new m(e),this.achPayments=new y(e),this.cashPayments=new v(e),this.giftCards=new _(e),this.transactions=new c(e),this.marketplace=new d(e),this.proofOfDelivery=new l(e)};export{f as QorDirectSDK};
