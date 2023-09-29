import"isomorphic-unfetch";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},t.apply(this,arguments)}class e{constructor(t){this.apiKey=void 0,this.clientKey=void 0,this.requestId=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.clientKey=t.clientKey,this.requestId=t.requestId||function(t){for(var e="",s=0;s<12;s++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}(),this.baseUrl=t.baseUrl||"https://api-sandbox.qorcommerce.io/v3"}async request(e,s,r){const n=new URL(`${this.baseUrl}${e}`);if(s){const t=new URLSearchParams;Object.entries(s).forEach(([e,s])=>{t.append(e,s)}),n.search=new URLSearchParams(t).toString()}const a=t({},r,{headers:{"Content-Type":"application/json","x-api-key":this.apiKey,"x-client-key":this.clientKey,"x-request-id":this.requestId}});return console.log("Sending Request",JSON.stringify(`${n}`),a),fetch(n,a).then(t=>{if(t.ok)return t.json();throw console.error("ERROR",t.statusText),new Error(t.statusText)})}}const s="/payment/transactions";class r extends e{fetchCardTransactionById(t){return this.request(`${s}/${t}`)}listCardTransactions(t){return this.request(`${s}`,t)}listCardTransactionsByProfileId(t){return this.request(`${s}/${t}`)}listCardTransactionsByBatchId(t){return this.request(`${s}`)}fetchAchTransactionById(t){return this.request(`/ach/transactions/${t}`)}listAchTransactions(t){return this.request(`${s}`,t)}}class n extends e{fetchMarketplaceTransactionByBatchId(t){return this.request(`payment/transactions/mp/batch/${t}`)}createMarketplaceMerchantAccount(t){return this.request("/channels/new_marketplace_merchant",{method:"POST",body:JSON.stringify(t)})}}class a{constructor(t){this.transactions=void 0,this.marketplace=void 0,this.transactions=new r(t),this.marketplace=new n(t)}}export{a as QorDirectSDK};
