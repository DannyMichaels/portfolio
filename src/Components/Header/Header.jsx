import React from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";

const Div = styled.div`
  flex-shrink: 1;
  height: 1012px;
  width: 100vw;
  display: ${({ isFireFox }) => !isFireFox && "flex"};
  flex-direction: ${({ isFireFox }) => !isFireFox && "column"};
  justify-content: ${({ isFireFox }) => !isFireFox && "center"};
  position: ${({ isFireFox }) => !isFireFox && "relative"};
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
