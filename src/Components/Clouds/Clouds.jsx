import React from "react";
import styled from "styled-components";

const CloudBig = styled.img`
  @keyframes float {
    0% {
      box-shadow: none;
      transform: translateY(0px);
    }
    50% {
      box-shadow: none;
      transform: translateY(-20px);
    }

    100% {
      box-shadow: none;
      transform: translateY(0px);
    }
  }
  z-index: -2;
  filter: blur(4px);
  z-index: 0;
  opacity: 0.5;
  user-select: none;
  cursor: pointer;
  margin: 10px;
  transform: translatey(0px);
  box-shadow: none;
  animation: float 6s ease-in-out infinite;
  margin-top: -60px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    max-width: 150px;
    object-fit: contain;
  }
`;
let Giv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
let Biv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

let Ziv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
let Liv = styled.div`
  margin-top: 100px;
`;

export const Clouds1 = () => (
  <>
    <Giv className="desktop">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Giv>
    <Giv className="desktop">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Giv>

    <Biv className="mobile">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Biv>
    <Biv className="mobile">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Biv>
  </>
);

export const Clouds2 = () => (
  <Liv>
    <Giv className="desktop">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Giv>

    <Giv className="desktop">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Giv>

    <Ziv className="mobile">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Ziv>
    <Ziv className="mobile">
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
      <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
    </Ziv>
  </Liv>
);
