import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-scroll";

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  height: 55px;
  background: none;
  padding: 0 20px;
  display: flex;
  z-index: 9999;
  margin: 0;
  justify-content: space-between;
  align-items: center;

  #hello {
    background: red;
  }
  .logo {
    padding: 15px 0;
    color: white;
    cursor: pointer;
    display: flex;
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
  console.log(window.scrollY);
  const changeBackground = () => {
    if (window.scrollY > 55) {
      return setNavBar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Nav id={navBar ? "hello" : "nav"}>
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
      <Burger />
    </Nav>
  );
};

export default Navbar;
