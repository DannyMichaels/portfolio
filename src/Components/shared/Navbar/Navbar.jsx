import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-scroll";
import { CloudStateContext } from "../../../context/animationContext";
import CloudBtn from "./CloudBtn";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: 60px;
  background: none;
  padding: 0 20px;
  display: flex;
  z-index: 9999;
  margin: 0;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 15px 0;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    font-family: "Helvetica", sans-serif;
    visibility: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    margin-top: 0;

    .logo {
      display: none;
    }
  }
`;

const Navbar = () => {
  const [isCyanShowing, setCyanShowing] = useState(false);
  const [cloudMode, setCloudMode] = useContext(CloudStateContext);

  const toggleCloudMode = () => {
    if (cloudMode) {
      setCloudMode(false);
      localStorage.setItem("cloudMode", "false");
    } else {
      setCloudMode(true);
      localStorage.setItem("cloudMode", "true");
    }
  };

  const changeBackground = () => {
    const width = window?.innerWidth;
    if (width <= 768) {
      setCyanShowing(false);
    } else if (window.scrollY >= 198) {
      setCyanShowing(true);
    } else {
      setCyanShowing(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", changeBackground);
    };
  }, []);

  return (
    <Nav
      style={
        isCyanShowing
          ? {
              transition: "250ms ease-in-out",
              background: "rgba(148, 187, 233, 0.8)",
            }
          : {
              transition: "250ms ease-in-out",
              background: "inherit",
            }
      }>
      <div className="logo">
        <Link
          className="back-to-top"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          duration={1000}>
          Daniel Michael
        </Link>
      </div>

      <Burger toggleCloudMode={toggleCloudMode} />

      <CloudBtn toggleCloudMode={toggleCloudMode} cloudMode={cloudMode} />
    </Nav>
  );
};

export default Navbar;
