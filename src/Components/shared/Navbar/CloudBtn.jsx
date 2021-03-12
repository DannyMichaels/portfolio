import { IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CloudOn from "@material-ui/icons/Cloud";
import CloudOff from "@material-ui/icons/CloudOff";

const Background = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 50px;
    margin-top: -6px;
    position: absolute;
    background: white;
    border: 2px solid var(--vivid-tangerine);
    border-radius: 0px 0px 0px 5px;
    right: 0;
    top: 6px;
  }
`;

function CloudBtn({ toggleCloudMode, cloudMode }) {
  return (
    <>
      <Background id="burger-bg" value="burger">
        <IconButton onClick={toggleCloudMode}>
          {cloudMode ? (
            <CloudOn style={{ color: "var(--vivid-tangerine)" }} />
          ) : (
            <CloudOff style={{ color: "var(--vivid-tangerine)" }} />
          )}
        </IconButton>
      </Background>
    </>
  );
}
export default CloudBtn;
