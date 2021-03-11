import React, { useContext } from "react";
import Fill1 from "./Fill/Fill1";
import Fill2 from "./Fill/Fill2";
import HeaderText from "./Text/HeaderText";
import Scroll from "./Scroll/Scroll";
import MoveInLeft from "../shared/Animations/MoveInLeft";
import styled from "styled-components";
import { CloudStateContext } from "../../context/animationContext";

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
  z-index: -1;
  filter: blur(4px);
  z-index: 0;
  opacity: 0.5;
  cursor: pointer;
  transform: translatey(0px);
  box-shadow: none;
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
  /* overflow: hidden; */
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

const InnerColumn = styled.div`
  display: block;
  width: 98%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  picture {
    display: block;
  }
`;

export default function HeaderContent({ isFireFox }) {
  const [disabled, setDisabled] = React.useState(false);
  const [cloudMode] = useContext(CloudStateContext);

  function fillCheck() {
    let width = window.innerWidth;
    if (width <= 768) {
      setDisabled(true);
    }
    if (width >= 768) {
      setDisabled(false);
    }
  }

  React.useEffect(() => {
    fillCheck();
    window.addEventListener("resize", () => {
      fillCheck();
      return () => {
        window.removeEventListener("resize", fillCheck);
      };
    });
  }, []);

  return (
    <>
      <MoveInLeft className="animation1">
        <HeaderText />
        <Fill1 fill1="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-3E925590-1D1F-4FAB-9036-050A24FF5082.png" />
        <InnerColumn>
          <Scroll />
          {isFireFox || !cloudMode ? (
            <></>
          ) : (
            <picture>
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
            </picture>
          )}
        </InnerColumn>
        {!disabled && (
          <Div class="crop">
            <Fill2 fill2="https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-fill-1-2D5D0138-9E96-48FA-B912-5523E3A31DAE.png" />
          </Div>
        )}
      </MoveInLeft>
    </>
  );
}
