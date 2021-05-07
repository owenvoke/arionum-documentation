# Masternodes

Masternodes are a core part of the Arionum network. They have been available since [Block 80,000](../developers/forks.md?id=block-80000-renaissance).

They will be used for the assets system and other [features of the network](../developers/roadmap.md).

Masternodes earn a third of each block, and require 100 thousand ARO to initialise.

## Closing a masternode

The steps below are for retrieving the initial deposit and closing the masternode.

> These commands require either the [light-wallet-cli] or the [arionum-cli].

1. Pause the masternode using the corresponding command for your wallet:
   ```bash
   # Light Wallet CLI
   ./light-arionum-cli masternode pause
   
   # arionum-cli
   arionum masternode:pause
   ```
1. There is then a 30 day confirmation period
1. Release the funds using the corresponding command for your wallet:
   ```bash
   # Light Wallet CLI
   ./light-arionum-cli masternode release
   
   # arionum-cli
   arionum masternode:release
   ```

[light-wallet-cli]: https://github.com/arionum/lightWalletCLI
[arionum-cli]: https://github.com/owenvoke/arionum-cli/releases/latest
