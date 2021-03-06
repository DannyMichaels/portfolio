import "./Footer.scss";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/daniel-michael-718825155/"
            style={{ textDecoration: "none", color: "#fff" }}>
            Webpage by Daniel Michael &copy; 2020
          </a>
        </footer>
      </>
    );
  }
}

export default Footer;
