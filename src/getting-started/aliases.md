# Aliases

The Arionum alias system makes it easy for users to send transactions.

The transaction logic is the same as standard transactions, except they use **2** for the version number.

## Style Guide

- Must consist of **only** alpha-numeric characters
- Must contain no less than **4** characters
- Must contain no more than **25** characters

## Creating an alias

Aliases can be created using the `alias set` command in the [Official Light Wallet CLI][light-wallet-cli].

```bash
php light-arionum-cli alias set 'alias'
```

They can also be set using the [arionum-cli] as follows:

```bash
arionum alias:set 'alias'
```

## Sending to an alias

Aliases can be created using the `alias send` command in the [Official Light Wallet CLI][light-wallet-cli].

```bash
php light-arionum-cli alias send 'alias' 'value' [message]
```

They can also be set using the [arionum-cli] as follows:

```bash
arionum alias:send 'alias' 'value' [message]
```

[light-wallet-cli]: https://github.com/arionum/lightWalletCLI
[arionum-cli]: https://github.com/owenvoke/arionum-cli
