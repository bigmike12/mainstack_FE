import React from "react";
import Icon from "../../../assets/Icon/icon";
import { NavbarData, Notifications } from "./navbarData";
import NavbarMenu from "../navbarMenu/navbarMenu";
import "./navbar.scss";
import ProfileSwitch from "../profileSwitch/profileSwitch";

const Navbar = () => {
  return (
    <div className="nav">
      <Icon name="logo" />

      <div className="nav__menu">
        {NavbarData.map((data) => (
          <NavbarMenu title={data.title} icon={data.icon} path={data.path} />
        ))}
      </div>

      <div className="nav__alert">
        {Notifications.map((data) => (
          <Icon name={data.icon} className="nav__alert-icon" />
        ))}

        <ProfileSwitch />
      </div>
    </div>
  );
};

export default Navbar;
