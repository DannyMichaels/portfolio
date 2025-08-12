import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-scroll';
import { CloudStateContext } from '../../../context/cloudContext';
import CloudBtn from './CloudBtn';
import lightSwitchSFX from '../../../assets/sounds/lightswitch.wav';
import useSound from 'use-sound';
import { Hidden } from '@material-ui/core';

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: 70px;
  background: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.05)'};
  backdrop-filter: blur(${props => props.scrolled ? '20px' : '10px'});
  -webkit-backdrop-filter: blur(${props => props.scrolled ? '20px' : '10px'});
  border-bottom: 1px solid rgba(255, 255, 255, ${props => props.scrolled ? '0.2' : '0.1'});
  padding: 0 30px;
  display: flex;
  z-index: 9999;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.scrolled 
    ? '0 8px 32px rgba(31, 38, 135, 0.15)' 
    : 'none'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(102, 126, 234, 0.1) 0%, 
      rgba(240, 147, 251, 0.1) 100%);
    opacity: ${props => props.scrolled ? 1 : 0};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .logo {
    padding: 15px 0;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1.3rem;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 12px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    margin-top: 0;
    height: 60px;
    padding: 0 20px;

    .logo {
      display: none;
    }
  }
`;

const Navbar = () => {
  const [isCyanShowing, setCyanShowing] = useState(false);
  const [cloudMode, setCloudMode] = useContext(CloudStateContext);

  const [playOn] = useSound(lightSwitchSFX, {
    volume: 0.25,
  });

  const [playOff] = useSound(lightSwitchSFX, {
    volume: 0.25,
    playbackRate: 0.75,
  });

  const toggleCloudMode = () => {
    //  turn it off
    if (cloudMode) {
      playOff();
      setCloudMode(false);
    } else {
      // turn it on
      playOn();
      setCloudMode(true);
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
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('resize', changeBackground);
    };
  }, []);

  return (
    <Nav scrolled={isCyanShowing}>
      <div className="logo">
        <Hidden smDown>
          <Link
            className="back-to-top"
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            duration={1000}>
            Daniel Michael
          </Link>
        </Hidden>
      </div>

      <Burger toggleCloudMode={toggleCloudMode} />

      <CloudBtn toggleCloudMode={toggleCloudMode} cloudMode={cloudMode} />
    </Nav>
  );
};

export default Navbar;