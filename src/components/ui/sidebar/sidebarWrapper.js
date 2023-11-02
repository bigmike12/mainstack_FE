import React from "react";
import "./sidebarWrapper.scss";
import Icon from "../../../assets/Icon/icon";
import { FilterButton } from "./sidebar/sidebarData";

const SidebarWrapper = ({ handleSidebarClose, handleReset, children }) => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarWrapper__top">
        <h1>Filter</h1>
        <Icon name="close" onClick={() => handleSidebarClose()} />
      </div>
      {children}

      <div className="sidebarWrapper__button">
        {FilterButton.map((data) => (
          <button
            className={
              data.name === "Apply"
                ? "sidebarWrapper__button-black"
                : "sidebarWrapper__button-default"
            }
            onClick={data.name === "Apply" ? handleSidebarClose : handleReset}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarWrapper;
