import React, { useContext, useState } from 'react';
import Fill1 from './Fill/Fill1';
import Fill2 from './Fill/Fill2';
import HeaderText from './Text/HeaderText';
import Scroll from './Scroll/Scroll';
import MoveInLeft from '../shared/Animations/MoveInLeft';
import styled from 'styled-components';
import { CloudStateContext } from '../../context/cloudContext';
import useResize from './../../hooks/useResize';

const CloudBig = styled.img`
  z-index: -1;
  filter: blur(4px);
  z-index: 0;
  opacity: 0.5;
  cursor: pointer;
  transform: translatey(0px);
  filter: drop-shadow(0 5px 15px 0px rgba(0, 0, 0, 0.6));
  animation: float 6s ease-in-out infinite;

  position: absolute;
  width: 50%;
  right: 25%;
  max-width: 50%;
  bottom: 20px;
  @media screen and (max-width: 600px) {
    position: absolute;
    max-width: 400px;
  }
`;

const Div = styled.div`
  width: 955px;
  height: 1000px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  right: -18px;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  position: absolute;

  img {
    width: 1270px;
    height: 1210px;
    margin-top: -350px;
  }
`;

export default function HeaderContent({ isFireFox }) {
  const [isBigFillHidden, setIsBigFillHidden] = useState(false);
  const [cloudMode] = useContext(CloudStateContext);

  function fillCheck() {
    let width = window.innerWidth;
    if (width <= 768) {
      setIsBigFillHidden(true);
    }
    if (width >= 768) {
      setIsBigFillHidden(false);
    }
  }

  useResize(fillCheck);

  return (
    <>
      <MoveInLeft className="animation1">
        <HeaderText />
        <Fill1 fill1="https://i.imgur.com/mpPmjOy.png" />
        <Scroll />
        {isFireFox || !cloudMode ? (
          <></>
        ) : (
          <>
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </>
        )}
        {!isBigFillHidden && (
          <Div className="crop">
            <Fill2 fill2="https://i.imgur.com/gfeP1mj.png" />
          </Div>
        )}
      </MoveInLeft>
    </>
  );
}
