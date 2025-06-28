"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode, useState } from "react"
import config from "@/rainbowKitConfig"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"

// 提供者 = wagmi提供者 + 查询客户端提供者 + 彩虹套件提供者
export function Providers(props: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {/* <ConnectButton /> */}
                    {props.children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}