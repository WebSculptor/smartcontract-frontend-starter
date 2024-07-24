"use client";

import NextTopLoader from "nextjs-toploader";
import { createContext, useContext } from "react";
import { useAccount } from "wagmi";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useSession } from "next-auth/react";
import { SIWESession } from "@web3modal/siwe";

const AuthContext = createContext<IAuthContext | null>(null);

export default function AuthProvider({ children }: ILayout) {
  const { open } = useWeb3Modal();
  const { isConnecting, isConnected } = useAccount();

  const { data, status } = useSession();
  const session = data as unknown as SIWESession;

  const authProps = {
    openWallet: open,
    accountStatus: status,
    address: session?.address,
    chainId: session?.chainId,
    isConnected,
    isConnecting,
  };

  return (
    <AuthContext.Provider value={authProps}>
      <SonnerToaster richColors />
      <NextTopLoader showSpinner={false} color="hsl(var(--primary))" />
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
