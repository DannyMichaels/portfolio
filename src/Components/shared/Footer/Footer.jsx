import "./Footer.scss";
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
          <a
            target="_blank"
            rel="no_refferrer"
            href="https://www.linkedin.com/in/daniel-michael-718825155/"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Webpage by Daniel Michael &copy; 2020
          </a>
          {/* <div style={{ display: "none" }} className="bg-image"></div> */}
        </footer>
      </>
    );
  }
}

export default Footer;
