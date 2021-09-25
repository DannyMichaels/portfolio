import React, { useState, useEffect, useContext } from 'react';
import Ul from './Ul';
import { onResize } from '../../../utils/onResize';
import { Link } from 'react-scroll';
import { blockBodyOnCondition } from '../../../utils/blockBodyOnCondition';
import { IconButton } from '@material-ui/core';
import CloudOn from '@material-ui/icons/Cloud';
import CloudOff from '@material-ui/icons/CloudOff';
import { CloudStateContext } from '../../../context/cloudContext';
import useResize from './../../../hooks/useResize';

function OpenNav({ open, setOpen, toggleCloudMode }) {
  const [cloudMode] = useContext(CloudStateContext);

  useResize(() => {
    let width = window.innerWidth;
    if (width > 768) {
      // close navbar when it's open and user is resizing to greater  width than 768px
      setOpen(false);
    }
  });

  useResize(onResize); // check for akward animations with navbar when resizing

  useEffect(() => {
    blockBodyOnCondition(open);
  }, [open]);

  const [disabled, setDisabled] = useState(false);

  const handleDisable = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (disabled) {
      document.querySelector('.layout-children').style.pointerEvents = 'none';
    }
    setTimeout(async () => {
      setDisabled(false);
    }, 600);
  };

  return (
    <>
      <Ul
        style={
          disabled ? { pointerEvents: 'none' } : { pointerEvents: 'inherit' }
        }
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
          to="testimonials"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={handleDisable}>
          <li>Testimonials</li>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="mobile-link"
          activeClass="active"
          to="testimonials"
          spy={true}
          smooth={true}
          duration={1000}>
          <li>Testimonials</li>
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
        <IconButton onClick={toggleCloudMode}>
          {cloudMode ? (
            <CloudOn style={{ color: '#fff' }} />
          ) : (
            <CloudOff style={{ color: '#fff' }} />
          )}
        </IconButton>
      </Ul>
    </>
  );
}

export default OpenNav;
