# Node Utility

## General Information

The Arionum Node contains a command line utility tool called `util.php` which can be used to perform various commands.

## Accounts Hash

> Generate an `md5` hash of all registered accounts in the blockchain.

```bash
$ php util.php accounts-hash
```

## Balance

> Output the balance for a specific account.

```bash
$ php util.php balance 'address/public_key'
```

## Block

> Output details about a specific block.

```bash
$ php util.php block 'block_id'
```

## Block Time

> Output the block time for the last 100 blocks.

```bash
$ php util.php block-time
```

## Blocks

> Output the id and height of blocks higher than a specific height.

```bash
$ php util.php blocks 'height' [limit]
```

## Check Address

> Output the validity of a specific address.

```bash
$ php util.php check-address 'address'
```

## Clean

> Clean the entire database.

:::warning
This will remove all accounts, blocks, masternodes, mempools and transactions from the database.
:::

```bash
$ php util.php clean
```

## Clean Blacklist

> Remove all peers from the blacklist.

```bash
$ php util.php clean-blacklist
```

## Compare Accounts

> Compare the account records between the current node and another peer.

```bash
$ php util.php compare-accounts 'peer_hostname'
```

## Compare Blocks

> Compare the blocks between the current node and another peer.

```bash
$ php util.php compare-blocks 'peer_hostname' [limit]
```

## Current Block

> Output details about the current block.

```bash
$ php util.php current
```

## Delete Peer

> Remove a specific peer from the peer list.

```bash
$ php util.php delete-peer 'peer_hostname'
```

## Get Address

> Output the address for a specific public key.

```bash
$ php util.php get-address 'public_key'
```

## Masternode Hash

> Generate an `md5` hash of all registered masternodes in the blockchain.

```bash
$ php util.php masternode-hash
```

## Mempool

> Output the number of transactions in the mempool.

```bash
$ php util.php mempool
```

## Peer

> Create a peering session with a specific node.

```bash
$ php util.php peer 'peer_hostname'
```

## Peers

> Output all peers and their current status.

```bash
$ php util.php peers
```

## Peers Block

> Output all peers and their current height.

```bash
$ php util.php peers-block
```

## Pop

> Remove a specific number of blocks from the database.

```bash
$ php util.php pop 'number_of_blocks'
```

## Recheck Blocks

> Recheck all blocks in the blockchain to assert their validity.

```bash
$ php util.php recheck-blocks
```
