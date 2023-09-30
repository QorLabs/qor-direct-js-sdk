!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],t):t((e||self).qorDirectSdk={})}(this,function(e){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function i(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var o=function(){try{return Promise.resolve(fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){var t=e.ip;return console.log("IP Address:",t),t}).catch(function(e){console.error("Error fetching IP address:",e)}))}catch(e){return Promise.reject(e)}},a=function(e){try{for(var t="",r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return Promise.resolve(t)}catch(e){return Promise.reject(e)}},s=/*#__PURE__*/function(){function e(e){var t,r;this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=e.apiKey,this.clientKey=e.clientKey,this.requestId=null!=(t=e.requestId)?t:a(12),this.baseUrl=null!=(r=e.baseUrl)?r:"https://api-sandbox.qorcommerce.io/v3"}return e.prototype.request=function(e,r,n){try{var i=this,o=new URL(""+i.baseUrl+e);if(r){var a=new URLSearchParams;Object.entries(r).forEach(function(e){a.append(e[0],e[1])}),o.search=new URLSearchParams(a).toString()}var s=t({},n,{headers:{"Content-Type":"application/json","x-api-key":i.apiKey,"x-client-key":i.clientKey,"x-request-id":i.requestId}});return console.log("Sending Request",JSON.stringify(""+o),s),Promise.resolve(fetch(o,s)).then(function(e){if(e.ok)return e.json();throw console.error("ERROR",e.statusText),new Error(e.statusText)})}catch(e){return Promise.reject(e)}},e}(),c="/payment/transactions",d=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.fetchPaymentTransactionById=function(e){try{return Promise.resolve(this.request("/payment/transaction/"+e)).then(function(e){return{status:e.status,code:e.code,message:e.message,data:e.data[0]}})}catch(e){return Promise.reject(e)}},n.listPaymentTransactions=function(e){return this.request(""+c,e)},n.listPaymentTransactionsByProfileId=function(e){return this.request("/payment/transactions/profile/"+e)},n.listPaymentTransactionsByBatchId=function(e){return this.request("/payment/transactions/batch/"+e)},n.fetchAchTransactionById=function(e){return this.request("/ach/transactions/"+e)},n.listAchTransactions=function(e){return this.request(""+c,e)},t}(s),u=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.fetchMarketplaceTransactionByBatchId=function(e){return this.request("payment/transactions/mp/batch/"+e)},n.createMarketplaceMerchantAccount=function(e){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify({data:e})})},t}(s),l="payment/transaction/proof_of_delivery",p=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.listProofOfDelivery=function(e){return this.request(""+l,e)},n.fetchProofOfDeliveryById=function(e){return this.request(l+"/"+e)},n.createProofOfDelivery=function(e){return this.request("/"+l,{method:"POST",body:JSON.stringify(e)})},n.patchProofOfDelivery=function(e){return this.request("/"+l,{method:"PATCH",body:JSON.stringify(e)})},n.deleteProofOfDelivery=function(e){return this.request("/"+l+"/"+e,{method:"DELETE"})},t}(s),f=["card_detail","billing","customer","discount"],h=["track_data","customer","discount"],m=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var s=n.prototype;return s.processManualCardSale=function(e){var r,n,s,c,d,u,l=e.card_detail,p=e.billing,h=e.customer,m=e.discount,v=i(e,f);if(!function(e){var t=e.replace(/[\s-]/g,"");if(!/^\d+$/.test(t)||!(t.length>=13&&t.length<=19))return!1;for(var r=0,n=!1,i=t.length-1;i>=0;i--){var o=parseInt(t.charAt(i));n&&(o=(o*=2)>9?o-9:o),r+=o,n=!n}return r%10==0}(null==l?void 0:l.number))throw new Error("Invalid credit card number");if(n=null==l?void 0:l.exp_month,s=null==l?void 0:l.exp_year,d=(c=new Date).getMonth()+1,s>(u=c.getFullYear())+10||!(s>u||s===u&&n>=d))throw new Error("Invalid credit card expiration date");var y,_=(y=(null==l?void 0:l.number).replace(/[\s-]/g,""),/^4/.test(y)?"Visa":/^5[1-5]/.test(y)?"Mastercard":/^3[47]/.test(y)?"American Express":/^6(?:011|5)/.test(y)?"Discover":/^(?:2131|1800|35\d{3})/.test(y)?"JCB":/^3(?:0[0-5]|[68])/.test(y)?"Diners Club":/^(?:5[0678]|6304|6390|67\d{2})/.test(y)?"Maestro":"Unknown");if(!_)throw new Error("Invalid credit card brand");if("American Express"===_&&4!==(null==l?void 0:l.cvv.toString().length)||3!==(null==l?void 0:l.cvv.toString().length))throw new Error("Invalid card validation number (cvv)");if(e.send_receipt&&(null==h||!h.email))throw new Error("You must provide a customer email address to send a payment receipt");return this.request("/"+(null!=m&&m.amount||null!=m&&m.percent?"payment/sale/cashdiscount":"payment/sale/manual"),{method:"POST",body:JSON.stringify({transaction_data:t({mid:e.mid,amount:e.amount,orderId:e.order_id||"ORDER_"+a(8),invoiceId:e.invoice_id,ipaddress:e.ip_address||o(),creditcard:null==l?void 0:l.number,cvv:null==l?void 0:l.cvv,month:null==l?void 0:l.exp_month,year:null==l?void 0:l.exp_year,cardfullname:null==l||null==(r=l.cardholder)?void 0:r.toUpperCase(),bzip:null==p?void 0:p.postal_code,baddress:null==p?void 0:p.street_1,baddress2:null==p?void 0:p.street_2,bcity:null==p?void 0:p.city,bstate:null==p?void 0:p.state_code,bcountry:null==p?void 0:p.country_code,currency:e.currency||"USD",risk_score:e.risk_score,store_card:e.store_card?1:0,reference_id:e.reference_id,topt:e.topt,tid:e.terminal_id,cfirstname:null==h?void 0:h.first_name,clastname:null==h?void 0:h.last_name,cemail:null==h?void 0:h.email,cphone:null==h?void 0:h.phone,metadata:e.meta_data,send_rcpt:e.send_receipt},v)})})},s.processManualCardTokenSale=function(e){var t,r;return this.request("/payment/sale/token",{method:"POST",body:JSON.stringify({transaction_data:{mid:e.mid,amount:e.amount,creditcard:e.token,cvv:e.cvv,orderId:e.order_id||"ORDER_"+a(8),invoiceId:e.invoice_id,ipaddress:e.ip_address||o(),currency:e.currency||"USD",service_charge:e.service_charge,cash_discount_amount:null==(t=e.discount)?void 0:t.amount,cash_discount_percent:null==(r=e.discount)?void 0:r.percent,risk_score:e.risk_score,reference_id:e.reference_id,topt:e.topt,tid:e.terminal_id,metadata:e.meta_data,send_rcpt:e.send_receipt}})})},s.processCardTrackSale=function(e){var r=e.track_data,n=e.customer,s=i(e,h);return this.request("/payment/card/swipe",{method:"POST",body:JSON.stringify({transaction_data:t({mid:e.mid,amount:e.amount,orderId:e.order_id||"ORDER_"+a(8),invoiceId:e.invoice_id,ipaddress:e.ip_address||o(),trackdata:null==r?void 0:r.track,ksnTrack:null==r?void 0:r.ksn,currency:e.currency||"USD",risk_score:e.risk_score,store_card:e.store_card?1:0,reference_id:e.reference_id,topt:e.topt,tid:e.terminal_id,cfirstname:null==n?void 0:n.first_name,clastname:null==n?void 0:n.last_name,cemail:null==n?void 0:n.email,cphone:null==n?void 0:n.phone,metadata:e.meta_data,send_rcpt:e.send_receipt},s)})})},n}(s);e.QorDirectSDK=function(e){this.payments=void 0,this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.payments=new m(e),this.transactions=new d(e),this.marketplace=new u(e),this.proofOfDelivery=new p(e)}});
