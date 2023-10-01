!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],t):t((e||self).qorDirectSdk={})}(this,function(e){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function o(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}var a=function(){try{return Promise.resolve(fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){var t=e.ip;return console.log("IP Address:",t),t}).catch(function(e){console.error("Error fetching IP address:",e)}))}catch(e){return Promise.reject(e)}};function i(e){for(var t="",r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}var s=/*#__PURE__*/function(){function e(e){var t,r;this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=e.apiKey,this.clientKey=e.clientKey,this.requestId=null!=(t=e.requestId)?t:i(12),this.baseUrl=null!=(r=e.baseUrl)?r:"https://api-sandbox.qorcommerce.io/v3"}return e.prototype.request=function(e,r,n){try{var o=this,a=new URL(""+o.baseUrl+e);if(r){var i=new URLSearchParams;Object.entries(r).forEach(function(e){i.append(e[0],e[1])}),a.search=new URLSearchParams(i).toString()}var s=t({},n,{headers:{"Content-Type":"application/json","x-api-key":o.apiKey,"x-client-key":o.clientKey,"x-request-id":o.requestId}});return console.log("Sending Request",JSON.stringify(""+a),s),Promise.resolve(fetch(a,s)).then(function(e){if(e.ok)return e.json();throw console.error("ERROR",e.statusText),new Error(e.statusText)})}catch(e){return Promise.reject(e)}},e}(),c="/payment/transactions",u=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.fetchPaymentTransactionById=function(e){try{return Promise.resolve(this.request("/payment/transaction/"+e)).then(function(e){return{status:e.status,code:e.code,message:e.message,data:e.data[0]}})}catch(e){return Promise.reject(e)}},n.listPaymentTransactions=function(e){return this.request(""+c,e)},n.listPaymentTransactionsByProfileId=function(e){return this.request("/payment/transactions/profile/"+e)},n.listPaymentTransactionsByBatchId=function(e){return this.request("/payment/transactions/batch/"+e)},n.fetchAchTransactionById=function(e){return this.request("/ach/transactions/"+e)},n.listAchTransactions=function(e){return this.request(""+c,e)},t}(s),d=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.fetchMarketplaceTransactionByBatchId=function(e){return this.request("payment/transactions/mp/batch/"+e)},n.createMarketplaceMerchantAccount=function(e){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify({data:e})})},t}(s),l="payment/transaction/proof_of_delivery",p=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.listProofOfDelivery=function(e){return this.request(""+l,e)},n.fetchProofOfDeliveryById=function(e){return this.request(l+"/"+e)},n.createProofOfDelivery=function(e){return this.request("/"+l,{method:"POST",body:JSON.stringify(e)})},n.patchProofOfDelivery=function(e){return this.request("/"+l,{method:"PATCH",body:JSON.stringify(e)})},n.deleteProofOfDelivery=function(e){return this.request("/"+l+"/"+e,{method:"DELETE"})},t}(s),m=["token_detail","card_detail","track_detail","customer_detail","discount_detail","items_detail","shipping_detail","three_ds"],h=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var s=n.prototype;return s.processCreditCardPayment=function(e){try{var r=function(){var r;if(null!=c&&c.store_token&&(null==d||!d.email))throw new Error("You must provide a 'customer_detail.email' address to store a card token");if(Object.keys(s).length&&!s.token)throw new Error("You must provide a 'token_detail.token' value");if(Object.keys(s).length&&!s.cvv)throw new Error("You must provide a 'token_detail.cvv' value");if(e.send_receipt&&(null==d||!d.email))throw new Error("You must provide a 'customer_detail.email' value to send a payment receipt");var o="SALE"===e.type.toUpperCase()||"L2"===e.type.toUpperCase()||"L3"===e.type.toUpperCase()?"payment/sale/manual":"payment/sale/authorize",m=t({islvl3:"L3"===e.type.toUpperCase()||"L2"===e.type.toUpperCase()?1:0,mid:e.mid,amount:e.total_amount,total_tax:e.total_tax_amount,ipaddress:e.ip_address||a(),currency:e.currency||"USD",orderId:e.order_id||"ORDER_"+i(12),invoiceId:e.invoice_id,purchase_order:e.purchase_order,risk_score:e.risk_score,reference_id:e.reference_id,topt:e.topt,tid:e.terminal_id,metadata:e.meta_data,send_rcpt:!0===e.send_receipt?1:0,shipping_amount:null==h?void 0:h.amount,shipping_zip:null==h?void 0:h.postal_code,shipping_country:null==h?void 0:h.country_code,creditcard:(null==c?void 0:c.number)||(null==s?void 0:s.token),cvv:(null==c?void 0:c.cvv)||s.cvv,month:null==c?void 0:c.exp_month,year:null==c?void 0:c.exp_year,cardfullname:null==c||null==(r=c.cardholder)?void 0:r.toUpperCase(),bzip:null==c?void 0:c.postal_code,baddress:null==c?void 0:c.street_1,baddress2:null==c?void 0:c.street_2,bcity:null==c?void 0:c.city,bstate:null==c?void 0:c.state_code,bcountry:null==c?void 0:c.country_code,trackdata:u.track,ksnTrack:u.ksn,cash_discount_amount:null==l?void 0:l.amount,cash_discount_percentage:null==l?void 0:l.percent,line_items:p,response_3DS:y.response,CAVV:y.CAVV,ECIFlag:y.ECIFlag,XID:y.XID,store_card:!0===(null==c?void 0:c.store_token)?1:0,nickname:null==c?void 0:c.token_nickname,cfirstname:null==d?void 0:d.first_name,clastname:null==d?void 0:d.last_name,cemail:null==d?void 0:d.email,cphone:null==d?void 0:d.phone,cwebaddress:null==d?void 0:d.website},v);return n.request("/"+o,{method:"POST",body:JSON.stringify({transaction_data:m})})},n=this,s=e.token_detail,c=e.card_detail,u=e.track_detail,d=e.customer_detail,l=e.discount_detail,p=e.items_detail,h=e.shipping_detail,y=e.three_ds,v=o(e,m);if(!e.type)throw new Error('You must provide a processing type.  Accepted values are "sale", "authorize", "L2" and "L3"');if("SALE"!==e.type.toUpperCase()&&"AUTHORIZE"!==e.type.toUpperCase()&&"L2"!==e.type.toUpperCase()&&"L3"!==e.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale', 'authorize' and 'L2' for Level 2 transactions and 'L3' for Level 3 transactions");if(!("L2"!==e.type.toUpperCase()||e.total_tax_amount&&d&&Object.keys(d).length))throw new Error("You must provide a 'total_tax_amount' and 'customer_detail' values for Level 2 transactions");if(!(("L3"!==e.type.toUpperCase()||e.total_tax_amount&&d&&Object.keys(d).length)&&p&&Object.keys(p).length))throw new Error("You must provide a 'total_tax_amount', 'customer_detail' and at least one 'items_detail' object for Level 3 transactions");if(!Object.keys(c).length&&!Object.keys(s).length&&!Object.keys(u).length||Object.keys(c).length&&Object.keys(s).length||Object.keys(c).length&&Object.keys(u).length||Object.keys(s).length&&Object.keys(u).length)throw new Error("You must provide only one of 'card_detail', 'token_detail', or 'track_detail' objects with required values to process a payment");var _=function(){if(Object.keys(c).length)return Promise.resolve(function(e){try{if(!e.number)return Promise.resolve(new Error("A 'card_detail.number' value is required"));if(!e.exp_month)return Promise.resolve(new Error("A 'card_detail.exp_month' value is required"));if(!e.exp_year)return Promise.resolve(new Error("A 'card_detail.exp_year' value is required"));if(!e.cvv)return Promise.resolve(new Error("A 'card_detail.cvv' value is required"));if(!function(e){var t=e.replace(/[\s-]/g,"");if(!/^\d+$/.test(t)||!(t.length>=13&&t.length<=19))return!1;for(var r=0,n=!1,o=t.length-1;o>=0;o--){var a=parseInt(t.charAt(o));n&&(a=(a*=2)>9?a-9:a),r+=a,n=!n}return r%10==0}(e.number))return Promise.resolve(new Error("Invalid 'card_detail.number' value"));if(n=e.exp_month,o=e.exp_year,i=(a=new Date).getMonth()+1,o>(s=a.getFullYear())+10||!(o>s||o===s&&n>=i))return Promise.resolve(new Error("Invalid 'card_detail.exp_month' or 'card_detail.exp_year' value"));var t=(r=e.number.replace(/[\s-]/g,""),/^4/.test(r)?"Visa":/^5[1-5]/.test(r)?"Mastercard":/^3[47]/.test(r)?"American Express":/^6(?:011|5)/.test(r)?"Discover":/^(?:2131|1800|35\d{3})/.test(r)?"JCB":/^3(?:0[0-5]|[68])/.test(r)?"Diners Club":/^(?:5[0678]|6304|6390|67\d{2})/.test(r)?"Maestro":"Unknown");if(!t)return Promise.resolve(new Error("Invalid or not supported credit card brand"));if("American Express"===t&&4!==e.cvv.toString().length||3!==e.cvv.toString().length)return Promise.resolve(new Error("Invalid 'card_detail.cvv' value"));if(e.store_token&&!e.token_nickname)throw new Error("You must provide 'card_detail.nickname' to store a card token");return Promise.resolve(!0)}catch(e){return Promise.reject(e)}var r,n,o,a,i,s}(c).catch(function(e){throw new Error(e)})).then(function(){})}();return Promise.resolve(_&&_.then?_.then(r):r())}catch(e){return Promise.reject(e)}},s.processCreditCardVoid=function(e){try{return Promise.resolve(this.request("/payment/void",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},s.processCreditCardRefund=function(e){try{return Promise.resolve(this.request("/payment/refund",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},s.processCreditCardCapture=function(e){try{return Promise.resolve(this.request("/payment/capture",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},n}(s),y=["ach_detail","customer_detail"],v=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var a=n.prototype;return a.processAchPayment=function(e){try{var r,n=e.ach_detail,a=e.customer_detail,i=o(e,y);if(!e.type)throw new Error("You must provide a 'type' value to process an ACH payment.  Accepted values are 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account");if("CREDIT"!==e.type.toUpperCase()&&"DEBIT"!==e.type.toUpperCase())throw new Error("You must provide a 'type' value of 'CREDIT' to payout an ACH payment or 'DEBIT' to draw payment from a customer account");if(!Object.keys(n).length&&!e.token)throw new Error("You must provide an 'ach_detail' object or a 'token' value to process an ACH payment");if(n&&e.token)throw new Error("You must provide one of an 'ach_detail' object or a 'token' value to process an ACH payment.  Not both");if(n.store_token&&(null==a||!a.email))throw new Error("You must provide a 'customer_detail.email' value to create and store an ACH payment token");if(n.store_token&&(null==n||!n.token_nickname))throw new Error("You must provide an 'ach_detail.token_nickname' value to create and store an ACH payment token");if(!n.account_kind||!n.account_type)throw new Error("You must provide both an 'ach_detail.account_kind' and 'ach_detail.account_type' values to process a payment");if("PERSONAL"!==n.account_kind.toLocaleUpperCase()&&"BUSINESS"!==n.account_kind.toLocaleUpperCase())throw new Error("You must provide a 'ach_detail.account_kind' value of 'PERSONAL' or 'BUSINESS' to process a payment");if("CHECKING"!==n.account_type.toLocaleUpperCase()&&"SAVINGS"!==n.account_type.toLocaleUpperCase())throw new Error("You must provide a 'ach_detail.account_type' value of 'CHECKING' or 'SAVINGS' to process a payment");"CHECKING"===n.account_type.toUpperCase()?"PERSONAL"===n.account_kind.toUpperCase()?r=1:"BUSINESS"===n.account_kind.toUpperCase()&&(r=3):"SAVINGS"===n.account_type.toUpperCase()&&("PERSONAL"===n.account_kind.toUpperCase()?r=2:"BUSINESS"===n.account_kind.toUpperCase()&&(r=4));var s="DEBIT"===e.type.toUpperCase()?"payment/ach/debit":"payment/ach/credit";return Promise.resolve(this.request("/"+s,{method:"POST",body:JSON.stringify({transaction_data:t({type:e.type,mid:e.mid,amount:e.total_amount,orderid:e.order_id,checknumber:null==n?void 0:n.check_number,checkdate:null==n?void 0:n.check_date,transactiondate:null==n?void 0:n.process_date,name_on_account:null==n?void 0:n.account_holder,routing_number:null==n?void 0:n.routing_number,account_number:null!=n&&n.account_number?null==n?void 0:n.account_number:e.token,account_type:r,bankname:null==n?void 0:n.bank_name,bankcity:null==n?void 0:n.bank_city,bankstate:null==n?void 0:n.bank_state,customerid:null==a?void 0:a.customer_id,cfirstname:null==a?void 0:a.first_name,clastname:null==a?void 0:a.last_name,cphone:null==a?void 0:a.phone,cemail:null==a?void 0:a.email,caddress1:null==a?void 0:a.address_street_1,caddress2:null==a?void 0:a.address_street_2,ccity:null==a?void 0:a.address_city,cstate:null==a?void 0:a.address_state_code,czip:null==a?void 0:a.address_postal_code,memo:e.memo,store_accnt:null!=n&&n.store_token?1:0,account_nickname:null!=n&&n.store_token?null==n?void 0:n.token_nickname:"",send_rcpt:e.send_receipt},i)})}))}catch(e){return Promise.reject(e)}},a.processCreditCardVoid=function(e){try{return Promise.resolve(this.request("/payment/ach/void",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},a.processCreditCardRefund=function(e){try{return Promise.resolve(this.request("/payment/ach/refund",{method:"POST",body:JSON.stringify({transaction_data:e})}))}catch(e){return Promise.reject(e)}},n}(s),_=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.processCashPayment=function(e){try{var t,r,n,o;return Promise.resolve(this.request("/payment/cash",{method:"POST",body:JSON.stringify({type:"cash",mid:e.mid,transaction_data:{amount:e.amount,currency:e.currency,orderId:e.order_id,invoiceId:e.invoice_id,reference_id:e.reference_id,service_charge:e.service_charge,totp:e.totp,ipaddress:e.ip_address,cfirstname:null==(t=e.customer_detail)?void 0:t.first_name,clastname:null==(r=e.customer_detail)?void 0:r.last_name,cemail:null==(n=e.customer_detail)?void 0:n.email,cphone:null==(o=e.customer_detail)?void 0:o.phone,items:e.items_detail}})}))}catch(e){return Promise.reject(e)}},t}(s);e.QorDirectSDK=function(e){this.cardPayments=void 0,this.achPayments=void 0,this.cashPayments=void 0,this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.cardPayments=new h(e),this.achPayments=new v(e),this.cashPayments=new _(e),this.transactions=new u(e),this.marketplace=new d(e),this.proofOfDelivery=new p(e)}});
