import React from "react";
import "./appbar.scss";
import Icon from "../../../assets/Icon/icon";
import { AppBarData } from "./appbarData";

const Appbar = () => {
  return (
    <div className="appbar">
      {AppBarData.map((data) => (
        <div className="appbar__icon">
          <Icon name={data.icon} className="appbar__icon-item" />
          <div className="appbar__icon-title">
            <p>{data.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appbar;
