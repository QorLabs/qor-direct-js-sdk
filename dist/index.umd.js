!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],e):e((t||self).qorDirectSdk={})}(this,function(t){function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var o=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.clientKey=t.clientKey,this.requestId=t.requestId||function(t){for(var e="",r=0;r<12;r++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}(),this.baseUrl=t.baseUrl||"https://api-sandbox.qorcommerce.io/v3"}return t.prototype.request=function(t,r,n){try{var o=this,i=new URL(""+o.baseUrl+t);if(r){var s=new URLSearchParams;Object.entries(r).forEach(function(t){s.append(t[0],t[1])}),i.search=new URLSearchParams(s).toString()}var a=e({},n,{headers:{"Content-Type":"application/json","x-api-key":o.apiKey,"x-client-key":o.clientKey,"x-request-id":o.requestId}});return console.log("Sending Request",JSON.stringify(""+i),a),Promise.resolve(fetch(i,a).then(function(t){if(t.ok)return t.json();throw console.error("ERROR",t.statusText),new Error(t.statusText)}))}catch(t){return Promise.reject(t)}},t}(),i="/payment/transactions",s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.fetchPaymentTransactionById=function(t){try{return Promise.resolve(this.request("/payment/transaction/"+t)).then(function(t){console.log("RESPONSE",t.data);var e=t.data.map(function(t){return Object.entries(t).reduce(function(t,e){return t[e[0]]=e[1],t},{})});return console.log("transformedData",e),e})}catch(t){return Promise.reject(t)}},n.listCardTransactions=function(t){return this.request(""+i,t)},n.listCardTransactionsByProfileId=function(t){return this.request(i+"/"+t)},n.listCardTransactionsByBatchId=function(t){return this.request(""+i)},n.fetchAchTransactionById=function(t){return this.request("/ach/transactions/"+t)},n.listAchTransactions=function(t){return this.request(""+i,t)},e}(o),a=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.fetchMarketplaceTransactionByBatchId=function(t){return this.request("payment/transactions/mp/batch/"+t)},n.createMarketplaceMerchantAccount=function(t){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify(t)})},e}(o),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.listCardTransactions=function(t){return this.request("payment/transaction/proof_of_delivery",t)},e}(o);t.QorDirectSDK=function(t){this.transactions=void 0,this.marketplace=void 0,this.proofOfDelivery=void 0,this.transactions=new s(t),this.marketplace=new a(t),this.proofOfDelivery=new c(t)}});
