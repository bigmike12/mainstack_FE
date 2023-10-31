import React from "react";
import "./wallet.scss";
import { WalletData } from "./walletData";
import WalletInfo from "../walletinfo/walletinfo";

const Wallet = () => {
  return (
    <div className="wallet">
      {WalletData.map((data) => (
        <WalletInfo title={data.title} amount={data.amount} />
      ))}
    </div>
  );
};

export default Wallet;
