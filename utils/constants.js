export const NODE_URL = process.env.APTOS_NODE_URL || 'https://fullnode.devnet.aptoslabs.com';
export const FAUCET_URL = process.env.APTOS_FAUCET_URL || 'https://faucet.devnet.aptoslabs.com';
export const APTOS_COIN = '0x1::aptos_coin::AptosCoin';
export const TYPE_TAG = `0x1::coin::CoinStore<${APTOS_COIN}>`;
