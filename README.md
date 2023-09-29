# [QorCommerce Direct Javascript SDK](https://github.com/QorLabs/qor-direct-js-sdk)
ES5 and ES6 compatible javascript SDK with types to interact with Qorcommerce Payment Gateway 

### [SDK API Documentation](https://qorlabs.github.io/js-sdk/index.html)
```js
https://qorlabs.github.io/js-sdk/index.html
```

### [QorCommerce Developer Documentation](https://docs.qorcommerce.io)
```js
https://docs.qorcommerce.io
```

### [NPM Registry](https://www.npmjs.com/package/qor-direct-sdk)
```js
https://www.npmjs.com/package/qor-direct-sdk
```

### UMD
```js
https://unpkg.com/qor-direct-sdk@3.0.3/dist/index.umd.js
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

