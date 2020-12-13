import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Resume from "./Resume";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Div = styled.div`
  font-family: "montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  .github,
  .linkedin {
    font-size: 40px;
    color: #fff;
    margin-right: 20px;
    transition: transform 250ms ease-out;
  }

  .resume-button {
    transition: transform 250ms ease-out;
    background: #fff;
    color: black;
  }
  .resume-button:hover {
    background: #fff;
    color: black;
  }

  .github:hover,
  .linkedin:hover,
  .resume-button:hover {
    transform: scale(1.05);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }

  .content-container {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  .title-container {
    text-align: center;
    padding: 20px;
    font-size: 36px;
    font-family: montserrat, sans-serif;
    color: white;
    display: inline-flex;
    text-align: center;
    justify-content: center;
  }
  .text-container {
    display: flex;
    color: white;
    font-size: 20px;
    flex-flow: row wrap;
    max-width: 450px;
    max-height: 500px;
    padding: 10px;
  }

  .image-container {
    margin-right: 20px;
  }
  img {
    width: 300px;
    height: 300px;
    margin-right: 10px;
  }
  .button-container {
    display: flex;
    flex-flow: row nowrap;
    align-self: flex-end;
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;
    left: 50%;
    padding-top: 30px;
  }
  .buttons-container {
    padding-top: 30px;
  }

  .span {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .span:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
`;

function About() {
  const [resumeAppearance, setResumeAppearance] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setResumeAppearance(!resumeAppearance);
  };

  return (
    <>
      <div
        id="about"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          flexDirection: "column",
        }}
      >
        <Div>
          <div className="content-container">
            <div className="title-container">
              <div className="span"> A</div>
              <div className="span"> b</div>
              <div className="span"> o</div>
              <div className="span"> u</div>
              <div className="span"> t</div> &nbsp;
              <div className="span"> M</div>
              <div className="span"> e</div>
            </div>
            <div className="text-container">
              I am a Junior Developer career pivoting from the music industry,
              with experience working with Rails, React, and more. My previous
              career as a musician allowed me to be collaborative and creative,
              which is something I now enjoy bringing to my code. I am
              empathetic, approachable and an active listener; traits that allow
              me to create great projects and build relationships along the way
              <div className="buttons-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://github.com/DannyMichaels/"}
                >
                  <SiGithub className="github" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://www.linkedin.com/in/daniel-michael-718825155/"}
                >
                  <SiLinkedin className="linkedin" />
                </a>
              </div>
              <div className="button-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href={
                    "https://www.docdroid.net/kFMOCJo/daniel-michael-resume-v2-pdf"
                  }
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className="resume-button"
                  >
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Div>
        {resumeAppearance ? <Resume handleClick={handleClick} /> : <></>}
      </div>
    </>
  );
}

export default About;
