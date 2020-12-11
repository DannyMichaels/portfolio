import "./Footer.css";
import { Component } from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import styled from "styled-components";
import Contact from "../../../Form/Contact";

const Img = styled.img`
  filter: blur(2px);
  z-index: -1;
  width: 100vw;
  height: 500px;
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
`;
class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          {/* <SiLinkedin /> <SiGithub /> */}

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
