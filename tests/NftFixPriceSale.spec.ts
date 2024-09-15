import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { NftFixPriceSale } from '../wrappers/NftFixPriceSale';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('NftFixPriceSale', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('NftFixPriceSale');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nftFixPriceSale: SandboxContract<NftFixPriceSale>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftFixPriceSale = blockchain.openContract(NftFixPriceSale.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nftFixPriceSale.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftFixPriceSale.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftFixPriceSale are ready to use
    });
});
