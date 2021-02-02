import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [isBodyClick, setIsBodyClick] = useState(false);

  const handleBodyClickClose = () => {
    if (isMenuShowing) {
      setIsBodyClick(true);
      setIsMenuShowing(false);
    }
  };

  return (
    <div className="layout">
      <Navbar
        isBody={isBodyClick}
        open={isMenuShowing}
        setOpen={setIsMenuShowing}
      />
      <div
        style={{ overflowX: "hidden", overflowY: "hidden" }}
        className="layout-children"
        onClick={handleBodyClickClose}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
