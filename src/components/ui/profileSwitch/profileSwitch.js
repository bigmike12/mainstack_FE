import React from "react";
import "./profileSwitch.scss";
import Icon from "../../../assets/Icon/icon";

const ProfileSwitch = () => {
  return (
    <div className="switch">
      <div className="switch__name">
        <p>OJ</p>
      </div>
      <Icon name="menu" />
    </div>
  );
};

export default ProfileSwitch;
