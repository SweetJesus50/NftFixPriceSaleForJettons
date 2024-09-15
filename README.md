# NftFixPriceSaleForJettons

- Multi NFT sale smart contract (upgraded [Getgems NFT sale smart contract v3r3](https://github.com/getgems-io/nft-contracts/tree/main/packages/contracts/nft-fixprice-sale-v3)) 
- Supports both, TON & Jetton payments

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
