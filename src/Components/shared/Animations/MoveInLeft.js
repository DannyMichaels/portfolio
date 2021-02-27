import styled from "styled-components";

const MoveInLeft = styled.div`
  animation-name: moveInLeft;
  animation-duration: 1.6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
  width: 100vw;
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      opacity: 0.8;
      transform: translate(0);
    }
    100% {
      opacity: 1;
      transform: translate(0);
      /* overflow-x: hidden; */
      /* overflow-y: hidden; */
      /* width: 200px; */
    }
  }
`;

export default MoveInLeft;
