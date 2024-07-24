This is a [Next.js](https://nextjs.org/) starter project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for interacting with smart contract.

## Getting Started

Create a .env.local or .env file and replace these variables:

```bash
NEXT_PUBLIC_W3M_PROJECT_ID="your-web3-modal-project-id"

# ? NEXT AUTH
NEXTAUTH_URL="your-localhost-url"
NEXTAUTH_SECRET="a-secure-secret-for-next-auth"
SESSION_SECRET="a-strong-secret-for-session"

# ? CONTRACT ADDRESS
NEXT_PUBLIC_CONTRACT_ADDRESS="your-deployed-contract-address"
NEXT_PUBLIC_RPC_URL="your-ethereum-rpc-url"

```

You can get your wallet connect project id [here](https://cloud.walletconnect.com/sign-in).

Once you're done, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
