import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="layout-children">{children}</div>
    <Footer />
  </div>
);

export default Layout;
