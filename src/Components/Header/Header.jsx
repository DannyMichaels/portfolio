import React from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";

const Div = styled.div`
  /* background-image: url("https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-rectangle-2-F05F0B6A-9C51-4A16-A795-BC7F67EC0F4E.png"); */
  flex-shrink: 1;
  overflow-x: hidden;
  overflow: hidden;
  background-repeat: round;
  height: 1012px;
  width: 100vw;
`;
function Header() {
  return (
    <>
      <Div className="header">
        <HeaderContent />
      </Div>
    </>
  );
}

export default Header;
