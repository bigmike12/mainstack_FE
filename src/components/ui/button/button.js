import React from "react";
import "./button.scss";
import Icon from "../../../assets/Icon/icon";

const Button = ({ title, icon, count = false, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <h4>{title}</h4>
      {count ? (
        <div className="button-count">
          <p>3</p>
        </div>
      ) : null}
      <Icon name={icon} />
    </div>
  );
};

export default Button;
