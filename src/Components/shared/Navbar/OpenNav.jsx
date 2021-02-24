import React, { useState, useEffect } from "react";
import Ul from "./Ul";
import { onResize } from "../../../utils/onResize";
import { Link } from "react-scroll";
import { blockBodyOnCondition } from "../../../utils/blockBodyOnCondition";
import ClickAwayListener from "./ClickAwayListener";

function OpenNav({ navBar, open, setOpen }) {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      if (width >= 768) {
        setOpen(false);
        onResize();
      }
    });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setOpen]);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    blockBodyOnCondition(open);
  }, [open]);

  const [disabled, setDisabled] = useState(false);

  const handleDisable = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (disabled) {
      document.querySelector(".layout-children").style.pointerEvents = "none";
    }
    setTimeout(async () => {
      setDisabled(false);
    }, 600);
  };

  const handleClickAway = () => {
    let menu = document.getElementById("menu");

    if ((menu.value = "open")) {
      console.log(menu.value);
      setOpen(false);
    } else {
      return;
    }
  };

  const [value, setValue] = useState("closed");

  useEffect(() => {
    console.log("test", value);
    if (open) {
      setTimeout(async () => {
        setValue("open");
      }, 300);
    } else {
      setTimeout(async () => {
        setValue("closed");
      }, 300);
    }
  }, [value, open]);

  return (
    <ClickAwayListener onClickAway={handleClickAway} isMenuShowing={open}>
      <Ul
        value={value}
        style={
          disabled ? { pointerEvents: "none" } : { pointerEvents: "inherit" }
        }
        navBar={navBar}
        id="menu"
        open={open}
        setOpen={setOpen}>
        <Link
          className="desktop-link"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={handleDisable}>
          <li>Home</li>
        </Link>

        <Link
          onClick={() => setOpen(!open)}
          className="mobile-link"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          duration={1000}>
          <li>Home</li>
        </Link>

        <Link
          className="desktop-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={handleDisable}>
          <li>About</li>
        </Link>

        <Link
          onClick={() => setOpen(!open)}
          className="mobile-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}>
          <li>About</li>
        </Link>

        <Link
          className="desktop-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={handleDisable}>
          <li>Projects</li>
        </Link>

        <Link
          onClick={() => setOpen(!open)}
          className="mobile-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}>
          <li>Projects</li>
        </Link>

        <Link
          className="desktop-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={handleDisable}>
          <li>Contact</li>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="mobile-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}>
          <li>Contact</li>
        </Link>
      </Ul>
    </ClickAwayListener>
  );
}

export default OpenNav;
