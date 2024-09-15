import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type NftFixPriceSaleConfig = {};

export function nftFixPriceSaleConfigToCell(config: NftFixPriceSaleConfig): Cell {
    return beginCell().endCell();
}

export class NftFixPriceSale implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new NftFixPriceSale(address);
    }

    static createFromConfig(config: NftFixPriceSaleConfig, code: Cell, workchain = 0) {
        const data = nftFixPriceSaleConfigToCell(config);
        const init = { code, data };
        return new NftFixPriceSale(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
