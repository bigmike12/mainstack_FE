import React from "react";
import "./walletinfo.scss";
import Icon from "../../../assets/Icon/icon";

const WalletInfo = ({ title, amount }) => {
  return (
    <div className="walletinfo">
      <div className="walletinfo__top">
        <h5>{title}</h5>
        <Icon name="tooltip" />
      </div>
      <div>
        <h2>USD {amount}</h2>
      </div>
    </div>
  );
};

export default WalletInfo;
