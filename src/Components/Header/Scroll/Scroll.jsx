import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -120px;
  }
`;
const Div = styled.div`
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  flex-shrink: 1;
  height: 36px;
  justify-content: flex-start;
  margin-top: 450px;
  position: relative;
  margin-left: 120px;
  z-index: 9998;
  min-width: 161px;
  transition: transform 250ms ease-in;
  @media screen and (max-width: 768px) {
    /* margin-left: auto; */
    align-self: center;
    text-align: center;
  }
  /* width: auto; */
  .border-class-1 {
    border: 2px solid rgba(255, 255, 255, 1);
  }
  .font-class-2 {
    color: white;
    font-family: 'Helvetica', Helvetica, Arial, serif;
    font-size: 18px;
    line-height: 22px;
  }
  .group-3 {
    background-color: transparent;
    flex-shrink: 0;
    height: 36px;
    margin-left: 16px;
    position: relative;
    width: 22px;
  }
  .rectangle-4 {
    background-color: transparent;
    border-radius: 11px;
    height: 36px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 22px;
  }
  .rectangle-5 {
    background-color: white;
    border-radius: 1px;
    height: 6px;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 2px;
  }
  .scroll-for-more {
    background-color: transparent;
    flex-shrink: 0;
    height: auto;
    margin-bottom: 2px;
    min-height: 20px;
    min-width: 133px;
    text-align: left;
    white-space: nowrap;
    width: auto;
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
`;

function Scroll() {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}>
        <Div className="scroll">
          <p className="scroll-for-more font-class-2">Scroll For More</p>
          <div className="group-3">
            <div className="rectangle-5"></div>
            <div className="rectangle-4 border-class-1"></div>
          </div>
        </Div>
      </Link>
    </Wrapper>
  );
}

export default Scroll;
