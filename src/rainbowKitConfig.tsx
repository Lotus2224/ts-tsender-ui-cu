"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, optimism, arbitrum, base, zksync, sepolia } from "wagmi/chains"

export default getDefaultConfig({
    appName: 'TSender',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [anvil, mainnet, optimism, arbitrum, base, zksync, sepolia,],
    ssr: false,
})