import { env } from "@/utils/env";
import type {
  SIWEVerifyMessageArgs,
  SIWECreateMessageArgs,
  SIWESession,
} from "@web3modal/siwe";
import { mainnet, sepolia } from "viem/chains";
import { cookieStorage, createStorage } from "wagmi";
import { createSIWEConfig, formatMessage } from "@web3modal/siwe";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { getCsrfToken, signIn, signOut, getSession } from "next-auth/react";

const chains = [mainnet, sepolia] as const;
const projectId = env.w3mProjectId;

if (!projectId) throw new Error("Project ID is not defined");

const siteConfig = {
  title: "Dapp title",
  description: "Dapp description",
  url: "https://example.com",
  icon: "/imgs/favicon.ico",
};

const metadata = {
  name: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  icons: [siteConfig.icon],
};

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: typeof window !== "undefined" ? window.location.host : "",
    uri: typeof window !== "undefined" ? window.location.origin : "",
    chains: [mainnet.id, sepolia.id],
    statement: `To effectively utilize ${siteConfig.title}, you must sign with your account to verify ownership.`,
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) =>
    formatMessage(args, address),
  getNonce: async () => {
    const nonce = await getCsrfToken();
    if (!nonce) {
      throw new Error("Failed to get nonce!");
    }

    return nonce;
  },
  getSession: async () => {
    const session = await getSession();
    if (!session) {
      throw new Error("Failed to get session!");
    }

    const { address, chainId } = session as unknown as SIWESession;

    return { address, chainId };
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn("credentials", {
        message,
        redirect: false,
        signature,
        callbackUrl: "/protected",
      });

      return Boolean(success?.ok);
    } catch (error) {
      return false;
    }
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false,
      });

      return true;
    } catch (error) {
      return false;
    }
  },
});

export { siteConfig, config, siweConfig, projectId };
