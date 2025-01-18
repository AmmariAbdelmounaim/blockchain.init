import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'

export const localHardhat = defineChain({
  id: 31337,
  name: 'GoChain Testnet',
  network: 'local',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
})

export const config = createConfig({
  chains: [localHardhat],
  transports: {
    [localHardhat.id]: http(),
  },
})
