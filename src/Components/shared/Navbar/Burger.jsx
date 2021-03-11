import React, { useState } from "react";
import styled from "styled-components";
import OpenNav from "./OpenNav";

const Background = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 50px;
    margin-top: -6px;
    margin-left: -20px;
    padding: 25px;
    position: relative;
    background: white;
    border: 2px solid var(--vivid-tangerine);
    border-radius: 0 0 5px 0;
  }
`;
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 10px;
  z-index: 99999;
  display: none;
  right: 20px;
  margin-left: 8px;
  cursor: pointer;
  left: 0;

  &:active .bar-line,
  &:hover .bar-line {
    box-shadow: 0 4px 4px
      ${({ open }) => (open ? "rgba(0, 0, 0, 0.25);" : "rgba(0, 0, 0, 0.25);")};
  }

  @media (max-width: 768px) {
    display: flex;
    transition: transform 0.3s ease-in-out;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    box-shadow: 0px 0.1px 1.5px 0.5px #999999;
    background-color: ${({ open }) =>
      open ? "black" : "var(--vivid-tangerine)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Burger({ toggleCloudMode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Background id="burger-bg" value="burger">
        <StyledBurger open={open} onClick={() => setOpen(!open)} value="burger">
          <div className="bar-line" value="burger" />
          <div className="bar-line" value="burger" />
          <div className="bar-line" value="burger" />
        </StyledBurger>
      </Background>
      <OpenNav
        toggleCloudMode={toggleCloudMode}
        open={open}
        setOpen={setOpen}
        value="burger"
      />
    </>
  );
}
export default Burger;
