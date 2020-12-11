import React from "react";
import Fill1 from "./Fill/Fill1";
import Fill2 from "./Fill/Fill2";
import HeaderText from "./Text/HeaderText";
import Scroll from "./Scroll/Scroll";
import MoveInLeft from "../shared/Animations/MoveInLeft";
import About from "../Home/About";
import Stack from "../Stack/Stack";
import styled from "styled-components";

const CloudBig = styled.img`
  @keyframes float {
    0% {
      box-shadow: none;

      transform: translatey(0px);
    }
    50% {
      box-shadow: none;

      transform: translatey(-20px);
    }

    100% {
      box-shadow: none;
      transform: translatey(0px);
    }
  }
  /* margin-top: -200px; */
  z-index: -1;
  filter: blur(4px);
  z-index: 0;
  opacity: 0.5;
  cursor: pointer;
  transform: translatey(0px);
  box-shadow: none;
  animation: float 6s ease-in-out infinite;
  margin-top: -60px;
`;

const SmallCloudsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CloudSmall = styled.img`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  width: 150px;
  height: 150px;
  filter: blur(3.05px);
  margin-top: -400px;
  z-index: 0;
  opacity: 0.7;
  cursor: pointer;
  z-index: 2;
  margin-left: 300px;
  transition: transform 2s ease-out;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  &:hover {
    transform: scale(2);
    transition: transform 250s ease-in;
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
        <SmallCloudsContainer>
          {/* <CloudSmall className="cloud" src="https://i.imgur.com/UOQ3aCS.png" /> */}
          {/* <CloudSmall className="cloud" src="https://i.imgur.com/UOQ3aCS.png" /> */}
          {/* <CloudSmall className="cloud" src="https://i.imgur.com/UOQ3aCS.png" /> */}
          {/* <CloudSmall className="cloud" src="https://i.imgur.com/UOQ3aCS.png" /> */}
        </SmallCloudsContainer>

        <Fill1 fill1="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-3E925590-1D1F-4FAB-9036-050A24FF5082.png" />
        {navigator?.userAgent?.indexOf("Firefox") !== -1 ? (
          <></>
        ) : (
          <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
        )}

        <Div class="crop">
          <Fill2 fill2="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-2D5D0138-9E96-48FA-B912-5523E3A31DAE.png" />
        </Div>
      </MoveInLeft>
    </>
  );
}
