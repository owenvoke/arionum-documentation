# Node API

## General Information

Each API call will return the result in JSON format. There are 3 objects with every response:

- `status` This is the status of the request. It will either be `ok` or `error`.
- `data` This is the contents of the request. It can be a string, array, object or numeric value.
- `coin` This is the current coin. It is used to determine forks or testnets.

The parameters must be sent either as `POST['data']`, a json encoded array or independently as `GET` parameters.

## getAddress

> Converts the public key to an ARO address.

```http
GET /api.php?q=getAddress&public_key={publicKey} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{address}",
  "coin": "arionum"
}
```

## base58

> Converts a string to base58.

```http
GET /api.php?q=base58&data={stringToEncode} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{base58EncodedString}",
  "coin": "arionum"
}
```

## getBalance

> Returns the balance for a specific account.

```http
GET /api.php?q=getBalance&public_key={publicKey} HTTP/1.1
GET /api.php?q=getBalance&account={account} HTTP/1.1
GET /api.php?q=getBalance&alias={alias} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{balance}",
  "coin": "arionum"
}
```

## getPendingBalance

> Returns the pending balance, which includes pending transaction, for a specific account.

```http
GET /api.php?q=getPendingBalance&public_key={publicKey} HTTP/1.1
GET /api.php?q=getPendingBalance&account={account} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{pendingBalance}",
  "coin": "arionum"
}
```

## getTransactions

> Returns the latest transactions of an account.

```http
GET /api.php?q=getTransactions&public_key={publicKey} HTTP/1.1
GET /api.php?q=getTransactions&account={account} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": [
    {
      // See 'getTransaction' for transaction properties
    }
  ],
  "coin": "arionum"
}
```

## getTransaction

> Returns details about a specific transaction.

```http
GET /api.php?q=getTransaction&transaction={transactionId} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
      "block": "{blockId}",
      "confirmations": ...,
      "date": ...,
      "dst": "{destinationAddress}",
      "fee": "...",
      "height": ...,
      "id": "{transactionId}",
      "message": "...",
      "public_key": "...",
      "signature": "...",
      "src": "{sourceAddress}",
      "type": "{transactionType}",
      "val": "...",
      "version": ...
  },
  "coin": "arionum"
}
```

## getPublicKey

> Returns the public key for a specific account.

```http
GET /api.php?q=getPublicKey&account={address} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{publicKey}",
  "coin": "arionum"
}
```

## generateAccount

> Generates a new account key pair and address.

!> This function should only be used when the node is on the same host or over a really secure network.

```http
GET /api.php?q=generateAccount HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
    "address": "...",
    "public_key": "...",
    "private_key": "..."
  },
  "coin": "arionum"
}
```

## currentBlock

> Returns details about the current block.

```http
GET /api.php?q=currentBlock HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
      // See 'getBlock' for block properties
  },
  "coin": "arionum"
}
```

## getBlock

> Returns details about a specific block.

```http
GET /api.php?q=getBlock&height={height} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
      "id": "...",
      "generator": "...",
      "height": ...,
      "date": ...,
      "nonce": "...",
      "signature": "...",
      "difficulty": ...,
      "argon": "...",
      "transactions": ...
  },
  "coin": "arionum"
}
```

## getBlockTransactions

> Returns the transactions of a specific block.

```http
GET /api.php?q=getBlockTransactions&height={height} HTTP/1.1
GET /api.php?q=getBlockTransactions&block={blockId} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": [
    {
      // See 'getBlock' for transaction details
    }
  ],
  "coin": "arionum"
}
```

## version

> Returns the node's version.

```http
GET /api.php?q=version HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{versionNumber}",
  "coin": "arionum"
}
```

## send

> Sends a transaction.

!> It is recommended to sign the transaction instead of sending a private key to the node.

```http
POST /api.php?q=send HTTP/1.1
Content-Type: application/json

{
  "data": {
    "val": ...,
    "dst": "...",
    "public_key": "...",
    "signature": "...",   // Optional
    "private_key": "...", // Optional, only use when the transaction isn't signed
    "date": ...,
    "message": "...",     // Optional
    "version": ...
  }
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{transactionId}",
  "coin": "arionum"
}
```

## mempoolSize

> Returns the number of transactions in the mempool.

```http
GET /api.php?q=mempoolSize HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": ...,
  "coin": "arionum"
}
```

## randomNumber

> Returns a random number based on an ARO block id.

```http
GET /api.php?q=randomNumber&height={height}&min={minimumNumber} HTTP/1.1
GET /api.php?q=randomNumber&height={height}&min={minimumNumber}&max={maximumNumber} HTTP/1.1
GET /api.php?q=randomNumber&height={height}&min={minimumNumber}&seed={seedString} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": ...,
  "coin": "arionum"
}
```

## checkSignature

> Checks a signature against a public key.

```http
GET /api.php?q=checkSignature&public_key={publicKey}&signature={signature}&data={data} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": true|false,
  "coin": "arionum"
}
```

## masternodes

> Returns all the masternode data.

```http
GET /api.php?q=masternodes HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": [
    {
      "public_key": "...",
      "height": ...,
      "ip": "...",
      "last_won": ...,
      "blacklist": ...,
      "fails": ...,
      "status": ...
    }
  ],
  "coin": "arionum"
}
```

## getAlias

> Returns the alias for a specific account.

```http
GET /api.php?q=getAlias&public_key={publicKey} HTTP/1.1
GET /api.php?q=getAlias&account={address} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": "{alias}",
  "coin": "arionum"
}
```

## sanity

> Returns details about the node's sanity process.

```http
GET /api.php?q=sanity HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
    "sanity_running": true|false, // Whether the sanity process is currently running
    "last_sanity": ..., // The timestamp for the last sanity runtime
    "sanity_sync": true|false // Whether the sanity process is currently synchronising
  },
  "coin": "arionum"
}
```

## node-info

> Returns details about the node.

```http
GET /api.php?q=node-info HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": {
    "hostname": "...",
    "version": "...",
    "dbversion": "...",
    "accounts": ...,
    "transactions": ...,
    "mempool": ...,
    "masternodes": ...
  },
  "coin": "arionum"
}
```

## checkAddress

> Checks the validity of an address.
> Optionally validate it against the corresponding public key.

```http
GET /api.php?q=checkAddress&account={address} HTTP/1.1
GET /api.php?q=checkAddress&account={address}&public_key={publicKey} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": true|false, // Whether or not the address is valid
  "coin": "arionum"
}
```

## assetBalance

> Checks the asset balances of an address or public key.

!> TESTNET ONLY

```http
GET /api.php?q=assetBalance&public_key={publicKey} HTTP/1.1
GET /api.php?q=assetBalance&account={address} HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "data": [
    {
      "asset": "...",
      "alias": "...",
      "balance": ...,
    }
  ],
  "coin": "arionum"
}
```
