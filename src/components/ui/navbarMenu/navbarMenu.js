import React from "react";
import "./navbarMenu.scss";
import Icon from "../../../assets/Icon/icon";
import { useLocation } from "react-router-dom";

const NavbarMenu = ({ title, icon, path }) => {
  const { pathname } = useLocation();

  const currentPage = pathname === path;

  return (
    <div className={currentPage ? "menu__active" : "menu"}>
      <Icon name={icon} />
      <div className="menu__title">{title}</div>
    </div>
  );
};

export default NavbarMenu;
