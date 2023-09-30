import"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.apply(this,arguments)}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}var n=function(){try{return Promise.resolve(fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){var t=e.ip;return console.log("IP Address:",t),t}).catch(function(e){console.error("Error fetching IP address:",e)}))}catch(e){return Promise.reject(e)}};function o(e){for(var t="",r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}var i=/*#__PURE__*/function(){function t(e){var t,r;this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=e.apiKey,this.clientKey=e.clientKey,this.requestId=null!=(t=e.requestId)?t:o(12),this.baseUrl=null!=(r=e.baseUrl)?r:"https://api-sandbox.qorcommerce.io/v3"}return t.prototype.request=function(t,r,n){try{var o=this,i=new URL(""+o.baseUrl+t);if(r){var a=new URLSearchParams;Object.entries(r).forEach(function(e){a.append(e[0],e[1])}),i.search=new URLSearchParams(a).toString()}var s=e({},n,{headers:{"Content-Type":"application/json","x-api-key":o.apiKey,"x-client-key":o.clientKey,"x-request-id":o.requestId}});return console.log("Sending Request",JSON.stringify(""+i),s),Promise.resolve(fetch(i,s)).then(function(e){if(e.ok)return e.json();throw console.error("ERROR",e.statusText),new Error(e.statusText)})}catch(e){return Promise.reject(e)}},t}(),a="/payment/transactions",s=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchPaymentTransactionById=function(e){try{return Promise.resolve(this.request("/payment/transaction/"+e)).then(function(e){return{status:e.status,code:e.code,message:e.message,data:e.data[0]}})}catch(e){return Promise.reject(e)}},n.listPaymentTransactions=function(e){return this.request(""+a,e)},n.listPaymentTransactionsByProfileId=function(e){return this.request("/payment/transactions/profile/"+e)},n.listPaymentTransactionsByBatchId=function(e){return this.request("/payment/transactions/batch/"+e)},n.fetchAchTransactionById=function(e){return this.request("/ach/transactions/"+e)},n.listAchTransactions=function(e){return this.request(""+a,e)},r}(i),c=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.fetchMarketplaceTransactionByBatchId=function(e){return this.request("payment/transactions/mp/batch/"+e)},n.createMarketplaceMerchantAccount=function(e){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify({data:e})})},r}(i),u="payment/transaction/proof_of_delivery",l=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.listProofOfDelivery=function(e){return this.request(""+u,e)},n.fetchProofOfDeliveryById=function(e){return this.request(u+"/"+e)},n.createProofOfDelivery=function(e){return this.request("/"+u,{method:"POST",body:JSON.stringify(e)})},n.patchProofOfDelivery=function(e){return this.request("/"+u,{method:"PATCH",body:JSON.stringify(e)})},n.deleteProofOfDelivery=function(e){return this.request("/"+u+"/"+e,{method:"DELETE"})},r}(i),d=["token_detail","card_detail","track_detail","customer_detail","discount_detail","items_detail","shipping_detail","three_ds"],p=/*#__PURE__*/function(r){function i(){return r.apply(this,arguments)||this}return t(i,r),i.prototype.processManualCardSale=function(t){try{var r=function(){var r;if(null!=s&&s.store_card&&(null==u||!u.email))throw new Error("You must provide a 'customer_detail.email' address to store a card token");if(Object.keys(a)&&!a.token)throw new Error("You must provide a 'token_detail.token' value");if(t.send_receipt&&(null==u||!u.email))throw new Error("You must provide a 'customer_detail.email' value to send a payment receipt");var d="SALE"===t.type.toUpperCase()?"payment/sale/manual":"payment/sale/authorize",f=e({mid:t.mid,amount:t.total_amount,total_tax:t.total_tax_amount,ipaddress:t.ip_address||n(),currency:t.currency||"USD",orderId:t.order_id||"ORDER_"+o(12),invoiceId:t.invoice_id,purchase_order:t.purchase_order,risk_score:t.risk_score,reference_id:t.reference_id,topt:t.topt,tid:t.terminal_id,metadata:t.meta_data,send_rcpt:!0===t.send_receipt?1:0,shipping_amount:null==p?void 0:p.amount,shipping_zip:null==p?void 0:p.postal_code,shipping_country:null==p?void 0:p.country_code,creditcard:(null==s?void 0:s.number)||(null==a?void 0:a.token),cvv:(null==s?void 0:s.cvv)||a.cvv,month:null==s?void 0:s.exp_month,year:null==s?void 0:s.exp_year,cardfullname:null==s||null==(r=s.cardholder)?void 0:r.toUpperCase(),bzip:null==s?void 0:s.postal_code,baddress:null==s?void 0:s.street_1,baddress2:null==s?void 0:s.street_2,bcity:null==s?void 0:s.city,bstate:null==s?void 0:s.state_code,bcountry:null==s?void 0:s.country_code,trackdata:c.track,ksnTrack:c.ksn,line_items:l,response_3DS:h.response,CAVV:h.CAVV,ECIFlag:h.ECIFlag,XID:h.XID,store_card:!0===(null==s?void 0:s.store_card)?1:0,nickname:null==s?void 0:s.nickname,cfirstname:null==u?void 0:u.first_name,clastname:null==u?void 0:u.last_name,cemail:null==u?void 0:u.email,cphone:null==u?void 0:u.phone,cwebaddress:null==u?void 0:u.website},v);return i.request("/"+d,{method:"POST",body:JSON.stringify({transaction_data:f})})},i=this,a=t.token_detail,s=t.card_detail,c=t.track_detail,u=t.customer_detail,l=t.items_detail,p=t.shipping_detail,h=t.three_ds,v=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(t,d);if(!t.type)throw new Error('You must provide a processing type.  Accepted values are "sale" and "authorize"');if("SALE"!==t.type.toUpperCase()&&"AUTHORIZE"!==t.type.toUpperCase())throw new Error("Invalid processing type.  Accepted 'type' values are 'sale' and 'authorize'");if(!Object.keys(s)&&!Object.keys(a)&&!Object.keys(c)||Object.keys(s)&&Object.keys(a)||Object.keys(s)&&Object.keys(c)||Object.keys(a)&&Object.keys(c))throw new Error("You must provide only one of 'card_detail', 'token_detail', or 'track_detail' objects with required values to process a payment");var f=function(){if(Object.keys(s))return Promise.resolve(function(e){try{if(!e.number)return Promise.resolve(new Error("A 'card_detail.number' value is required"));if(!e.exp_month)return Promise.resolve(new Error("A 'card_detail.exp_month' value is required"));if(!e.exp_year)return Promise.resolve(new Error("A 'card_detail.exp_year' value is required"));if(!e.cvv)return Promise.resolve(new Error("A 'card_detail.cvv' value is required"));if(!function(e){var t=e.replace(/[\s-]/g,"");if(!/^\d+$/.test(t)||!(t.length>=13&&t.length<=19))return!1;for(var r=0,n=!1,o=t.length-1;o>=0;o--){var i=parseInt(t.charAt(o));n&&(i=(i*=2)>9?i-9:i),r+=i,n=!n}return r%10==0}(e.number))return Promise.resolve(new Error("Invalid 'card_detail.number' value"));if(n=e.exp_month,o=e.exp_year,a=(i=new Date).getMonth()+1,o>(s=i.getFullYear())+10||!(o>s||o===s&&n>=a))return Promise.resolve(new Error("Invalid 'card_detail.exp_month' or 'card_detail.exp_year' value"));var t=(r=e.number.replace(/[\s-]/g,""),/^4/.test(r)?"Visa":/^5[1-5]/.test(r)?"Mastercard":/^3[47]/.test(r)?"American Express":/^6(?:011|5)/.test(r)?"Discover":/^(?:2131|1800|35\d{3})/.test(r)?"JCB":/^3(?:0[0-5]|[68])/.test(r)?"Diners Club":/^(?:5[0678]|6304|6390|67\d{2})/.test(r)?"Maestro":"Unknown");if(!t)return Promise.resolve(new Error("Invalid or not supported credit card brand"));if("American Express"===t&&4!==e.cvv.toString().length||3!==e.cvv.toString().length)return Promise.resolve(new Error("Invalid 'card_detail.cvv' value"));if(e.store_card&&!e.nickname)throw new Error("You must provide 'card_detail.nickname' to store a card token");return Promise.resolve(!0)}catch(e){return Promise.reject(e)}var r,n,o,i,a,s}(s).catch(function(e){throw new Error(e)})).then(function(){})}();return Promise.resolve(f&&f.then?f.then(r):r())}catch(e){return Promise.reject(e)}},i}(i),h=function(e){this.payments=void 0,this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.payments=new p(e),this.transactions=new s(e),this.marketplace=new c(e),this.proofOfDelivery=new l(e)};export{h as QorDirectSDK};
