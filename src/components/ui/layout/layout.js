import React from "react";
import "./layout.scss";
import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="layout__content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
