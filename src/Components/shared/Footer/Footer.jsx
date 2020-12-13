import "./Footer.css";
import { Component } from "react";
import styled from "styled-components";
import Contact from "../../../Form/Contact";

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

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }

  z-index: -1;
  filter: blur(5px);
  z-index: 0;
  opacity: 0.4;
  cursor: pointer;
  margin: 10px;
  transform: translatey(0px);
  box-shadow: none;
  animation: float 6s ease-in-out infinite;
  margin-top: -60px;
`;
const Giv = styled.div`
  margin-bottom: -200px;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Biv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-flex;
  }
`;
class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Giv className="desktop">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Giv>
          <Giv className="desktop">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Giv>
          <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv>
          <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv>
          <Contact id="contact" />

          <div style={{ display: "none" }} className="bg-image"></div>
        </footer>
      </>
    );
  }
}

export default Footer;
