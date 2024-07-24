import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig, config } from "@/config";

import { fontSans } from "@/lib/fonts";
import Web3ModalProvider from "@/providers/web3Provider";
import Header from "@/components/shared/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
  },
};

export default function RootLayout({ children }: Readonly<ILayout>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-dvh font-sans antialiased flex flex-col flex-1",
          fontSans.variable
        )}>
        <Analytics />
        <Web3ModalProvider initialState={initialState}>
          <Header />
          <main className="flex-1">{children}</main>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
