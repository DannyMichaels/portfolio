import React from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";

const Div = styled.div`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
  @import url("https://fonts.googleapis.com/css?family=Poppins:600,700,500|Playfair+Display:700,900|Roboto:400|Montserrat:600,400,700,500");

  background-image: url("https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-rectangle-2-F05F0B6A-9C51-4A16-A795-BC7F67EC0F4E.png");
  flex-shrink: 1;
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
