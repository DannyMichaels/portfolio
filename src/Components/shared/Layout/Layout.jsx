import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div
      style={{ overflowX: "hidden", overflowY: "hidden" }}
      className="layout-children">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
