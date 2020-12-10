import React from "react";
import Fill1 from "./Fill/Fill1";
import Fill2 from "./Fill/Fill2";
import HeaderText from "./Text/HeaderText";
import Scroll from "./Scroll/Scroll";
import MoveInLeft from "../shared/Animations/MoveInLeft";
import About from "../Home/About";
import Stack from "../Stack/Stack";
import styled from "styled-components";
const Div = styled.div`
  /* overflow: clip; */
  /* width: 1000px;
  height: 1000px;
  overflow: hidden;
  display: flex;
  right: -29px;
  flex-shrink: 1;
  position: absolute; */

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
  /* margin-right: 0; */
  /* margin-right: 20px; */

  img {
    width: 1270px;
    height: 1210px;
    /* margin-right: -315px; */
    margin-top: -350px;
    /* width: 1000px; */
    /* height: 1000px; */
    /* margin: -75px 0 0 -100px; */
  }
`;
export default function HeaderContent() {
  return (
    <>
      <MoveInLeft className="animation1">
        <HeaderText />
        <Scroll />
        <Fill1 fill1="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-3E925590-1D1F-4FAB-9036-050A24FF5082.png" />
        <Div class="crop">
          <Fill2 fill2="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-2D5D0138-9E96-48FA-B912-5523E3A31DAE.png" />
        </Div>
      </MoveInLeft>
    </>
  );
}
