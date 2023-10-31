import React from "react";
import "./transactionItems.scss";
import Icon from "../../../assets/Icon/icon";

const TransactionItems = ({ data }) => {
  const { product_name, name, amount, date, type } = data;
  return (
    <div className="transactionItems">
      <div className="transactionItems__left">
        <Icon name={type} />
        <div className="transactionItems__left-info">
          <h2>{product_name}</h2>
          <h4>{name} </h4>
        </div>
      </div>

      <div className="transactionItems__right">
        <h2>USD {amount} </h2>
        <h4>{date} </h4>
      </div>
    </div>
  );
};

export default TransactionItems;
