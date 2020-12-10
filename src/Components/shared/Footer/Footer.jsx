import "./Footer.css";
import { Component } from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        CONTACT ME <SiLinkedin /> <SiGithub />
        <a
          href={"https://www.github.com/DannyMichaels/daniel-portfolio"}
          target="_blank"
          rel="noreferrer"
        >
          Webpage by Daniel Michael &copy; 2020
        </a>
      </footer>
    );
  }
}

export default Footer;
