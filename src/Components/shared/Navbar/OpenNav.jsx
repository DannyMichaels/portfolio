import React, { useState, useEffect } from "react";
import Ul from "./Ul";
import { onResize } from "../../../utils/onResize";
import { Link } from "react-scroll";

function OpenNav({ navBar, open, setOpen }) {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", () => {
      let width = document.body.clientWidth;
      if (width >= 768) {
        setOpen(false);
        onResize();
      }
    });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    open
      ? (document.body.style.overflowY = "hidden") &&
        (document.querySelector(".layout-children").style.filter =
          "brightness(0.4)") &&
        (document.querySelector(".layout-children").style.background =
          "rgba(0, 0, 0, 0.5)") &&
        (document.querySelector(".footer").style.filter = "brightness(0.4)") &&
        (document.querySelector(".footer").style.background =
          "rgba(0, 0, 0, 0.5)") &&
        (document.querySelector(".layout-children").style.pointerEvents =
          "none")
      : (document.body.style.overflowY = "inherit") &&
        (document.querySelector(".layout-children").style.filter = "inherit") &&
        (document.querySelector(".layout-children").style.background =
          "inherit") &&
        (document.querySelector(".layout-children").style.pointerEvents =
          "inherit") &&
        (document.querySelector(".footer").style.filter = "inherit") &&
        (document.querySelector(".footer").style.background = "inherit");
  }, [open]);
  const [disabled, setDisabled] = useState(false);

  const handleDisable = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (disabled) {
      document.querySelector(".layout-children").style.pointerEvents = "none";
    } else {
    }
    setTimeout(async () => {
      setDisabled(false);
    }, 600);
  };

  return (
    <Ul
      style={
        disabled ? { pointerEvents: "none" } : { pointerEvents: "inherit" }
      }
      navBar={navBar}
      id="menu"
      open={open}
      setOpen={setOpen}
    >
      <Link
        className="desktop-link"
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        duration={1000}
        onClick={handleDisable}
      >
        <li>Home</li>
      </Link>

      <Link
        onClick={() => setOpen(!open)}
        className="mobile-link"
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>Home</li>
      </Link>

      <Link
        className="desktop-link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
        onClick={handleDisable}
      >
        <li>About</li>
      </Link>

      <Link
        onClick={() => setOpen(!open)}
        className="mobile-link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>About</li>
      </Link>

      <Link
        className="desktop-link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
        onClick={handleDisable}
      >
        <li>Projects</li>
      </Link>

      <Link
        onClick={() => setOpen(!open)}
        className="mobile-link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>Projects</li>
      </Link>

      <Link
        className="desktop-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
        onClick={handleDisable}
      >
        <li>Contact</li>
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        className="mobile-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <li>Contact</li>
      </Link>
    </Ul>
  );
}

export default OpenNav;
