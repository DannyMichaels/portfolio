import React, { useEffect } from "react";
import Ul from "./Ul";
import { onResize } from "../../../utils/onResize";
import { Link } from "react-scroll";

function OpenNav({ navBar, open, setOpen }) {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", () => {
      setOpen(false);
      onResize();
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
      ? (document.body.style.overflow = "hidden") &&
        (document.querySelector(".layout-children").style.filter =
          "brightness(0.4)") &&
        (document.querySelector(".layout-children").style.background =
          "rgba(0, 0, 0, 0.5)") &&
        (document.querySelector(".footer").style.filter = "brightness(0.4)") &&
        (document.querySelector(".footer").style.background =
          "rgba(0, 0, 0, 0.5)") &&
        (document.querySelector(".layout-children").style.userSelect = "none")
      : (document.body.style.overflow = "inherit") &&
        (document.querySelector(".layout-children").style.filter = "inherit") &&
        (document.querySelector(".layout-children").style.background =
          "inherit") &&
        (document.querySelector(".layout-children").style.userSelect =
          "inherit") &&
        (document.querySelector(".footer").style.filter = "inherit") &&
        (document.querySelector(".footer").style.background = "inherit");
  }, [open]);

  return (
    <Ul navBar={navBar} id="menu" open={open} setOpen={setOpen}>
      <Link
        className="desktop-link"
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        duration={1000}
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
