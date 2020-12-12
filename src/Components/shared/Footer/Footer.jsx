import "./Footer.css";
import { Component } from "react";
import styled from "styled-components";
import Contact from "../../../Form/Contact";

const SmallCloudsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 200px;
  margin-bottom: -200px;
`;

const CloudSmall = styled.img`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  width: 150px;
  height: 150px;
  filter: blur(3.05px);
  margin-top: -400px;
  z-index: 0;
  opacity: 0.7;
  cursor: pointer;
  z-index: 2;
  /* margin-left: 300px; */
  transition: transform 2s ease-out;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  &:hover {
    transform: scale(2);
    transition: transform 250s ease-in;
  }
  @media screen and (max-width: 768px) {
    width: 20vw;
  }
`;

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
  /* margin-top: 200px; */
  margin-bottom: -200px;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          {/* <SmallCloudsContainer>
            <CloudSmall
              className="cloud"
              src="https://i.imgur.com/UOQ3aCS.png"
            />
            <CloudSmall
              className="cloud"
              src="https://i.imgur.com/UOQ3aCS.png"
            />
            <CloudSmall
              className="cloud"
              src="https://i.imgur.com/UOQ3aCS.png"
            />
            <CloudSmall
              className="cloud"
              src="https://i.imgur.com/UOQ3aCS.png"
            />
          </SmallCloudsContainer> */}

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
          {/* <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv>
          <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv> */}
          <Contact id="contact" />

          {/* <div className="bg-image"></div> */}
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={"https://www.github.com/DannyMichaels/portfolio"}
            target="_blank"
            rel="noreferrer"
          >
            {/* Webpage by Daniel Michael &copy; 2020 */}
          </a>
          <div className="bg-image"></div>
        </footer>
      </>
    );
  }
}

export default Footer;
