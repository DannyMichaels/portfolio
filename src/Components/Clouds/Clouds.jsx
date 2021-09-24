import React from 'react';
import styled from 'styled-components';
import CloudImg from '../../assets/images/cloud.png';

const BigCloud = styled.img`
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

export const CloudsSection = () => (
  <>
    <Giv className="desktop clouds-row">
      {new Array(6).fill().map((_, key) => (
        <BigCloud className="cloud" src={CloudImg} key={key} alt="cloud" />
      ))}
    </Giv>

    <Giv className="desktop clouds-row">
      {new Array(6).fill().map((_, key) => (
        <BigCloud className="cloud" src={CloudImg} key={key} alt="cloud" />
      ))}
    </Giv>

    <Biv className="mobile clouds-row">
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
    </Biv>
    <Biv className="mobile clouds-row">
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
    </Biv>
  </>
);

export const CloudsSectionAlt = () => (
  <Liv>
    <Giv className="desktop">
      {new Array(6).fill().map((_, key) => (
        <BigCloud className="cloud" src={CloudImg} key={key} alt="cloud" />
      ))}
    </Giv>

    <Giv className="desktop">
      {new Array(6).fill().map((_, key) => (
        <BigCloud className="cloud" src={CloudImg} key={key} alt="cloud" />
      ))}
    </Giv>

    <Ziv className="mobile">
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
    </Ziv>
    <Ziv className="mobile">
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
      <BigCloud className="cloud" src={CloudImg} alt="cloud" />
    </Ziv>
  </Liv>
);
