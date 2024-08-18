import { useTonConnect } from "@/app/hooks/useTokenConnect";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import s from "./Wallet.module.css";

type Props = {};

const Wallet = (props: Props) => {
  const { network, connected } = useTonConnect();

  return (
    <>
      <div className={s.container}>
        <TonConnectButton />
        {network && connected && (
          <button className={s.btn}>
            {network ? (network === CHAIN.MAINNET ? "mainnet" : "testnet") : ""}
          </button>
        )}
      </div>
    </>
  );
};

export default Wallet;
