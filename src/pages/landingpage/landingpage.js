import React, { useRef, useState } from "react";
import "./landingpage.scss";
import Appbar from "../../components/ui/appbar/appbar";
import Wallet from "../../components/ui/wallet/wallet";
import Dashboard from "../../components/ui/dashboard/dashboard";
import Transactions from "../../components/ui/transactions/transactions";
import Navbar from "../../components/ui/navbar/navbar";
import useClickOutside from "../../hooks/useClickOutside";
import Sidebar from "../../components/ui/sidebar/sidebar/sidebar";

const Landingpage = () => {
  const ref = useRef(null);
  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(true);
  };

  const handleSidebarClose = () => {
    setSidebar(false);
  };

  const node = useClickOutside(handleSidebarClose);

  return (
    <div>
      <Navbar />
      <div
        className={sidebar ? "sidebarOverlay" : "landingpage"}
        // onClick={handleClickOutside}
      >
        <div className="bar">
          <Appbar />
        </div>

        <div className="landingpage__content">
          <div className="landingpage__content-top">
            <Dashboard />
            <Wallet />
          </div>

          <div className="landingpage__content-bottom">
            <Transactions handleSidebar={handleSidebar} />
          </div>
        </div>
      </div>

      {sidebar && (
        <div ref={node}>
          <Sidebar handleSidebarClose={handleSidebarClose}>hello</Sidebar>
        </div>
      )}
    </div>
  );
};

export default Landingpage;
