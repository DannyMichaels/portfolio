import styled from "styled-components";
import { Link } from "react-scroll";

const Div = styled.div`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
  @import url("https://fonts.googleapis.com/css?family=Poppins:600,500,700|Playfair+Display:900,700|Roboto:400|Montserrat:600,500,400,700");
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
  min-width: 161px;
  /* width: auto; */
  transition: transform 250ms ease-in;

  .border-class-1 {
    border: 2px solid rgba(255, 255, 255, 1);
  }
  .font-class-2 {
    color: white;
    font-family: "Helvetica", Helvetica, Arial, serif;
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
    <Link
      activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      duration={1000}
    >
      <Div className="scroll">
        <div className="scroll-for-more font-class-2">Scroll For More</div>
        <div className="group-3">
          <div className="rectangle-5"></div>
          <div className="rectangle-4 border-class-1"></div>
        </div>
      </Div>
    </Link>
  );
}

export default Scroll;
