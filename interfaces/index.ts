type TpNode = React.ReactNode;

interface ILayout {
  children: TpNode;
}

interface IWrapper {
  children: TpNode;
  className?: string;
}

interface IAuthContext {
  openWallet: () => void;
  accountStatus: string;
  address: string;
  chainId: string | number;
  isConnected: boolean;
  isConnecting: boolean;
}

interface IFetchHook {
  data?: any;
  isLoading?: boolean | null | undefined | any;
  isError?: string | null | any;
  fn: (...args: any) => Promise<boolean>;
}

interface ITransitionLink {
  href: string;
  children: TpNode;
  className?: string;
}
