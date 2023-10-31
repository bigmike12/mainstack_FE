import React from "react";
import "./sidebarWrapper.scss";
import Icon from "../../../assets/Icon/icon";

const SidebarWrapper = ({ handleSidebarClose, children }) => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarWrapper__top">
        <h1>Filter</h1>
        <Icon name="close" onClick={() => handleSidebarClose()} />
      </div>
      {children}
    </div>
  );
};

export default SidebarWrapper;
