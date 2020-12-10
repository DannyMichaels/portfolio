import styled from "styled-components";
import ScrollTop from "react-scrolltop-button";

const StyledScrollTop = styled(ScrollTop)`
  border: 3px solid var(--vivid-tangerine);
  color: var(--vivid-tangerine);
  box-shadow: 2px 2px 2px 2px #999;
  font-size: 20px;
  z-index: 1;

  &:hover {
    background: #0633bd;
    color: var(--vivid-tangerine);
    transform: scale(1.1);
  }
`;

export default StyledScrollTop;
