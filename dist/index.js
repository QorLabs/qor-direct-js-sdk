function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.apply(this,arguments)}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}require("isomorphic-unfetch");var i=function(){try{return Promise.resolve(fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){var t=e.ip;return console.log("IP Address:",t),t}).catch(function(e){console.error("Error fetching IP address:",e)}))}catch(e){return Promise.reject(e)}},a=function(e){try{for(var t="",r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return Promise.resolve(t)}catch(e){return Promise.reject(e)}},o=/*#__PURE__*/function(){function t(e){var t,r;this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=e.apiKey,this.clientKey=e.clientKey,this.requestId=null!=(t=e.requestId)?t:a(12),this.baseUrl=null!=(r=e.baseUrl)?r:"https://api-sandbox.qorcommerce.io/v3"}return t.prototype.request=function(t,r,n){try{var i=this,a=new URL(""+i.baseUrl+t);if(r){var o=new URLSearchParams;Object.entries(r).forEach(function(e){o.append(e[0],e[1])}),a.search=new URLSearchParams(o).toString()}var s=e({},n,{headers:{"Content-Type":"application/json","x-api-key":i.apiKey,"x-client-key":i.clientKey,"x-request-id":i.requestId}});return console.log("Sending Request",JSON.stringify(""+a),s),Promise.resolve(fetch(a,s)).then(function(e){if(e.ok)return e.json();throw console.error("ERROR",e.statusText),new Error(e.statusText)})}catch(e){return Promise.reject(e)}},t}(),s="/payment/transactions",c=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchPaymentTransactionById=function(e){try{return Promise.resolve(this.request("/payment/transaction/"+e)).then(function(e){return{status:e.status,code:e.code,message:e.message,data:e.data[0]}})}catch(e){return Promise.reject(e)}},n.listPaymentTransactions=function(e){return this.request(""+s,e)},n.listPaymentTransactionsByProfileId=function(e){return this.request("/payment/transactions/profile/"+e)},n.listPaymentTransactionsByBatchId=function(e){return this.request("/payment/transactions/batch/"+e)},n.fetchAchTransactionById=function(e){return this.request("/ach/transactions/"+e)},n.listAchTransactions=function(e){return this.request(""+s,e)},r}(o),d=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchMarketplaceTransactionByBatchId=function(e){return this.request("payment/transactions/mp/batch/"+e)},n.createMarketplaceMerchantAccount=function(e){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify({data:e})})},r}(o),u="payment/transaction/proof_of_delivery",l=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.listProofOfDelivery=function(e){return this.request(""+u,e)},n.fetchProofOfDeliveryById=function(e){return this.request(u+"/"+e)},n.createProofOfDelivery=function(e){return this.request("/"+u,{method:"POST",body:JSON.stringify(e)})},n.patchProofOfDelivery=function(e){return this.request("/"+u,{method:"PATCH",body:JSON.stringify(e)})},n.deleteProofOfDelivery=function(e){return this.request("/"+u+"/"+e,{method:"DELETE"})},r}(o),p=["card_detail","billing","customer","discount"],h=["track_data","customer","discount"],v="payment/sale/authorize",f=/*#__PURE__*/function(r){function o(){return r.apply(this,arguments)||this}t(o,r);var s=o.prototype;return s.processManualCardSale=function(t){var r,o,s,c,d,u,l=t.card_detail,h=t.billing,f=t.customer,y=n(t,p);if(!function(e){var t=e.replace(/[\s-]/g,"");if(!/^\d+$/.test(t)||!(t.length>=13&&t.length<=19))return!1;for(var r=0,n=!1,i=t.length-1;i>=0;i--){var a=parseInt(t.charAt(i));n&&(a=(a*=2)>9?a-9:a),r+=a,n=!n}return r%10==0}(null==l?void 0:l.number))throw new Error("Invalid credit card number");if(o=null==l?void 0:l.exp_month,s=null==l?void 0:l.exp_year,d=(c=new Date).getMonth()+1,s>(u=c.getFullYear())+10||!(s>u||s===u&&o>=d))throw new Error("Invalid credit card expiration date");var m,_=(m=(null==l?void 0:l.number).replace(/[\s-]/g,""),/^4/.test(m)?"Visa":/^5[1-5]/.test(m)?"Mastercard":/^3[47]/.test(m)?"American Express":/^6(?:011|5)/.test(m)?"Discover":/^(?:2131|1800|35\d{3})/.test(m)?"JCB":/^3(?:0[0-5]|[68])/.test(m)?"Diners Club":/^(?:5[0678]|6304|6390|67\d{2})/.test(m)?"Maestro":"Unknown");if(!_)throw new Error("Invalid credit card brand");if("American Express"===_&&4!==(null==l?void 0:l.cvv.toString().length)||3!==(null==l?void 0:l.cvv.toString().length))throw new Error("Invalid card validation number (cvv)");if(t.send_receipt&&(null==f||!f.email))throw new Error("You must provide a customer email address to send a payment receipt");if(!t.type)throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');if("SALE"!==t.type.toUpperCase()&&"AUTHORIZE"!==t.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");var g="SALE"===t.type.toUpperCase()?"payment/sale/manual":v;return this.request("/"+g,{method:"POST",body:JSON.stringify({transaction_data:e({mid:t.mid,amount:t.amount,orderId:t.order_id||"ORDER_"+a(8),invoiceId:t.invoice_id,ipaddress:t.ip_address||i(),creditcard:null==l?void 0:l.number,cvv:null==l?void 0:l.cvv,month:null==l?void 0:l.exp_month,year:null==l?void 0:l.exp_year,cardfullname:null==l||null==(r=l.cardholder)?void 0:r.toUpperCase(),bzip:null==h?void 0:h.postal_code,baddress:null==h?void 0:h.street_1,baddress2:null==h?void 0:h.street_2,bcity:null==h?void 0:h.city,bstate:null==h?void 0:h.state_code,bcountry:null==h?void 0:h.country_code,currency:t.currency||"USD",risk_score:t.risk_score,store_card:t.store_card?1:0,reference_id:t.reference_id,topt:t.topt,tid:t.terminal_id,cfirstname:null==f?void 0:f.first_name,clastname:null==f?void 0:f.last_name,cemail:null==f?void 0:f.email,cphone:null==f?void 0:f.phone,metadata:t.meta_data,send_rcpt:t.send_receipt},y)})})},s.processManualCardTokenSale=function(e){var t,r;if(!e.type)throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');if("SALE"!==e.type.toUpperCase()&&"AUTHORIZE"!==e.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");var n="SALE"===e.type.toUpperCase()?"payment/sale/token":v;return this.request("/"+n,{method:"POST",body:JSON.stringify({transaction_data:{mid:e.mid,amount:e.amount,creditcard:e.token,cvv:e.cvv,orderId:e.order_id||"ORDER_"+a(8),invoiceId:e.invoice_id,ipaddress:e.ip_address||i(),currency:e.currency||"USD",service_charge:e.service_charge,cash_discount_amount:null==(t=e.discount)?void 0:t.amount,cash_discount_percent:null==(r=e.discount)?void 0:r.percent,risk_score:e.risk_score,reference_id:e.reference_id,topt:e.topt,tid:e.terminal_id,metadata:e.meta_data,send_rcpt:e.send_receipt}})})},s.processCardTrackSale=function(t){var r=t.track_data,o=t.customer,s=n(t,h);if(!t.type)throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');if("SALE"!==t.type.toUpperCase()&&"AUTHORIZE"!==t.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");var c="SALE"===t.type.toUpperCase()?"payment/card/swipe":v;return this.request("/"+c,{method:"POST",body:JSON.stringify({transaction_data:e({mid:t.mid,amount:t.amount,orderId:t.order_id||"ORDER_"+a(8),invoiceId:t.invoice_id,ipaddress:t.ip_address||i(),trackdata:null==r?void 0:r.track,ksnTrack:null==r?void 0:r.ksn,currency:t.currency||"USD",risk_score:t.risk_score,store_card:t.store_card?1:0,reference_id:t.reference_id,topt:t.topt,tid:t.terminal_id,cfirstname:null==o?void 0:o.first_name,clastname:null==o?void 0:o.last_name,cemail:null==o?void 0:o.email,cphone:null==o?void 0:o.phone,metadata:t.meta_data,send_rcpt:t.send_receipt},s)})})},o}(o);exports.QorDirectSDK=function(e){this.payments=void 0,this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.payments=new f(e),this.transactions=new c(e),this.marketplace=new d(e),this.proofOfDelivery=new l(e)};
