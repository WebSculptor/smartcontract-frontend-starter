export const env = {
  // ? NEXT AUTH
  nextAuthUrl: process.env.NEXTAUTH_URL! || "",
  nextAuthSecret: process.env.NEXTAUTH_SECRET! || "",
  sessionSecret: process.env.SESSION_SECRET! || "",
  // ? CONTRACT ADDRESSES
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! || "",
  // ? ETHEREUM
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL! || "",
  w3mProjectId: process.env.NEXT_PUBLIC_W3M_PROJECT_ID! || "",
};
