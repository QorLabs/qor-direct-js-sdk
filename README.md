# QorCommerce Direct SDK

## Javascript SDK for Qorcommerce Payment Gateway.  For more details see `https://docs.qorcommerce.io`

### NPM Registry
```js
https://unpkg.com/qor-direct-sdk@3.0.3/dist/index.umd.js
```

### UMD
```js
unpkg.com/:qor-direct-sdk@:latest/:index.umd.js
```

### ES6 Example:
```js
import { QorDirectSDK } from "qor-direct-sdk"

const client = new QorDirectSDK({
    apiKey: 'YOUR_API_KEY',
    clientKey: 'YOUR_CLIENT_KEY',
    requestId: null, // <- optional.  unique identifier to track transaction.  Defaults to random generated string value
    baseUrl: 'https://api.qorcommerce.io/v3'  // <- use when ready for production.  defaults to sandbox api
  });

  client.transactions.listTransactions().then((a) => console.log(a))
```

### CommonJS Example:
```js
const QorDirectSDK require('qor-direct-sdk')

const client = new QorDirectSDK({
    apiKey: 'YOUR_API_KEY',
    clientKey: 'YOUR_CLIENT_KEY',
    requestId: null, // <- optional.  unique identifier to track transaction.  Defaults to random generated string value
    baseUrl: 'https://api.qorcommerce.io/v3'  // <- use when ready for production.  defaults to sandbox api
  });

  client.transactions.listTransactions().then((a) => console.log(a))
```
