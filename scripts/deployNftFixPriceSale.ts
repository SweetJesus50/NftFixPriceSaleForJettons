import { toNano } from '@ton/core';
import { NftFixPriceSale } from '../wrappers/NftFixPriceSale';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftFixPriceSale = provider.open(NftFixPriceSale.createFromConfig({}, await compile('NftFixPriceSale')));

    await nftFixPriceSale.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftFixPriceSale.address);

    // run methods on `nftFixPriceSale`
}
