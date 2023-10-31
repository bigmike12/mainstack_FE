import React from "react";
import Button from "../button/button";
import "./transactions.scss";
import { ButtonsData, TransactionsData } from "./transactionsData";
import TransactionItems from "../transactionsItems/transactionItems";

const Transactions = ({handleSidebar}) => {
  return (
    <div className="transactions">
      <div className="transactions__top">
        <div className="transactions__top-info">
          <h3>24 Transactions</h3>
          <p>Your transactions for the last 7 days</p>
        </div>

        <div className="transactions__top-button">
          {ButtonsData.map((data) => (
            <Button title={data.title} icon={data.icon} count={data.count} onClick={handleSidebar}/>
          ))}
        </div>
      </div>

      <div className="transactions__bottom">
        {TransactionsData.map((data) => (
          <TransactionItems data={data} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
