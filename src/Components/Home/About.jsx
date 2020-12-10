import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Resume from "./Resume";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Div = styled.div`
  font-family: "montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  /* max-width: 1500px; */
  /* border: 2px solid green; */

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
    /* border: 1px solid black; */
  }
  .title-container {
    text-align: center;
    padding: 20px;
    font-size: 36px;
    font-family: montserrat, sans-serif;
    color: white;
  }
  .text-container {
    display: flex;
    color: white;
    font-size: 20px;
    flex-flow: row wrap;
    max-width: 450px;
    /* border: 1px solid black; */
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
    /* max-width: -5px; */
    flex-flow: row nowrap;
    align-self: flex-end;
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;
    left: 50%;
    padding-top: 30px;

    /* border: 1px solid red; */
    /* margin-left: 20px; */
  }
  .buttons-container {
    padding-top: 30px;
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
            {/* <div className="image-container">
              <img src="https://i.imgur.com/rRGsY5c.jpeg" alt="about me" />
            </div> */}
            <div className="title-container">About Me</div>
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
                  href="https://drive.google.com/file/d/1xgVibtb632Yd65f47_yQm__J2fjViwxo/view?usp=sharing"
                >
                  <Button
                    // onClick={handleClick}
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
