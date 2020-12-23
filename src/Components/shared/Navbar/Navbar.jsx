import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-scroll";
import { onResize } from "../../../utils/onResize";

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
  const [navBar, setNavBar] = React.useState(false);

  const changeBackground = () => {
    const width = window?.innerWidth;
    if (width <= 768) {
      setNavBar(false);
    } else if (window.scrollY >= 198) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("resize", changeBackground);
  return (
    <Nav
      style={
        navBar
          ? {
              transition: "250ms ease-in-out",
              background: "rgba(148, 187, 233, 0.8)",
            }
          : {
              transition: "250ms ease-in-out",
              background: "inherit",
            }
      }
    >
      <div className="logo">
        <Link
          className="back-to-top"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Daniel Michael
        </Link>
      </div>
      <Burger navBar={navBar} />
    </Nav>
  );
};

export default Navbar;
