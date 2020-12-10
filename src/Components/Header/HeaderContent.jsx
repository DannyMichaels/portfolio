import React from "react";
import Fill1 from "./Fill/Fill1";
import Fill2 from "./Fill/Fill2";
import HeaderText from "./Text/HeaderText";
import Scroll from "./Scroll/Scroll";
import MoveInLeft from "../shared/Animations/MoveInLeft";
import About from "../Home/About";
import Stack from "../Stack/Stack";
import styled from "styled-components";
const CloudBig = styled.img``;
const CloudSmall = styled.img`
  @keyframes float {
    0% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
    50% {
      /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
      transform: translatey(-20px);
    }
    100% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
  }

  width: 150px;
  height: 150px;
  filter: blur(3.05px);
  margin-top: -10px;
  z-index: 0;
  opacity: 0.7;
  cursor: pointer;
  margin-left: 200px;
  transition: transform 2s ease-out;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  &:active {
    transform: scale(0.5);
    transition: transform 2s ease-in;
  }
`;

const Div = styled.div`
  width: 955px;
  height: 1000px;
  overflow: hidden;
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
export default function HeaderContent() {
  return (
    <>
      <MoveInLeft className="animation1">
        <HeaderText />
        <Scroll />
        <CloudSmall className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
        <Fill1 fill1="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-3E925590-1D1F-4FAB-9036-050A24FF5082.png" />
        <Div class="crop">
          <Fill2 fill2="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-2D5D0138-9E96-48FA-B912-5523E3A31DAE.png" />
        </Div>
      </MoveInLeft>
    </>
  );
}
