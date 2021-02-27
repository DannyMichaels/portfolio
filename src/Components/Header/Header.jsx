import React from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";

const Div = styled.div`
  flex-shrink: 1;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  min-height: 90vh;
  display: ${({ isFireFox }) => !isFireFox && "flex"};
  flex-direction: ${({ isFireFox }) => !isFireFox && "column"};
  justify-content: ${({ isFireFox }) => !isFireFox && "center"};
  position: ${({ isFireFox }) => !isFireFox && "relative"};

  @media screen and (max-width: 813px) {
    height: 1012px;
  }
`;

function Header() {
  return (
    <Div
      id="header"
      isFireFox={navigator?.userAgent?.indexOf("Firefox") !== -1}>
      <HeaderContent
        isFireFox={navigator?.userAgent?.indexOf("Firefox") !== -1}
      />
    </Div>
  );
}

export default Header;
