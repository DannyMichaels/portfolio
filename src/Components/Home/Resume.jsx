import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ResumeParent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: white;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;

  .resume {
    position: fixed;
    top: 2%;
    margin-top: -150px;
    margin: 0 auto;
    background: var(--awesome-blue);
    max-width: 1000px;
    padding: 40px;
    border-radius: 15px;
    height: 760px;
    z-index: 0;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .resume::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .text-container {
    color: black;
    font-family: "Helvetica", Helvetica, Arial, serif;
    font-size: 20px;
    line-height: 20px;
    z-index: 1;
    color: white;
    padding: 10px;
  }
  hr {
    color: var(--vivid-tangerine);
  }
  ul {
    list-style: inherit;
  }
  h2 {
    font-size: 26px;
    text-decoration: underline;
    text-decoration-color: var(--vivid-tangerine);
    margin-bottom: 8px;
  }
  h1 {
    font-size: 29px;
    text-decoration: underline;
    text-decoration-color: var(--vivid-tangerine);
  }
  p {
    color: white;
  }
  #buttons-container {
    margin-top: 80px;
  }

  #exit-button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -40px;
  }

  button {
    margin-right: 20px;
  }

  a {
    color: white;
  }
  @media screen and (max-width: 768px) {
    .resume {
      overflow-y: scroll;
      height: 500px;
      top: 15%;
      margin-right: 5px;
      -ms-overflow-style: inherit;
      scrollbar-width: inherit;
    }
  }

  .resume::-webkit-scrollbar {
    display: block;
  }

  #buttons-container {
    padding-bottom: 20px;
  }
  #resume-exit-button {
    margin-left: -20px;
  }
  #button-container {
    margin-bottom: -20px;
    display: flex;
  }
`;

function Resume({ handleClick }) {
  return (
    <ResumeParent className="resume-parent">
      <div className="resume">
        <div className="text-container">
          <h1>DANIEL MICHAEL</h1>
          <br />
          <p>
            | Rockville Centre, NY | 516-444-6903 |
            <a href="mailto:danielmichael@hey.com"> danielmichael@hey.com</a> |
          </p>
          <br />| &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/daniel-michael-718825155/"
          >
            https://www.linkedin.com/in/daniel-michael-718825155/
          </a>
          &nbsp; | &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DannyMichaels"
          >
            https://github.com/DannyMichaels
          </a>
          &nbsp; |
          <br />
          <br />
          <h1> SUMMARY</h1>
          <br />
          Experienced in Front-End and Back-End based programming and a
          background in music . <br /> Possess strong skills in collaborative
          environments that will help companies achieve their goals. <br />
          <br />
          <h1>EXPERIENCE</h1>
          <br />
          <h2>Software Engineering Fellow at General Assembly | 2020 </h2>
          <ul>
            <li>
              Participated in 420+ hours of applied training in software
              engineering and web development concepts focusing on front-end and
              back-end development. Worked with UX designers and led a team of
              software engineers in the creation of a full-stack web
              application.
            </li>
          </ul>
          <br />
          <br />
          <h1>EDUCATION</h1>
          <br />
          <ul>
            <h2>General Assembly Software Engineering Immersive | 2020 </h2>
            <li>
              Skills: HTML, CSS, JavaScript, React, Express, Mongoose & MongoDB,
              Ruby and Ruby on Rails
            </li>
            <br />
            <h2> Nassau Community College | 2018-2020 </h2>
            <li>
              Skills: Music Performance, Music Theory, and Audio Engineering.
            </li>
          </ul>
        </div>
        <div id="buttons-container">
          <div id="button-container">
            <Button variant="contained" color="primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1xgVibtb632Yd65f47_yQm__J2fjViwxo/view?usp=sharing"
              >
                Download PDF
              </a>
            </Button>
            <Button variant="contained" color="primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1w1XvYFB-fkayGP5ROI-GxwKUYT82ijTZ/view?usp=sharing"
              >
                Open DOC
              </a>
            </Button>
          </div>
          <div id="exit-button-container">
            <Button
              id="resume-exit-button"
              onClick={handleClick}
              variant="contained"
              color="secondary"
            >
              EXIT
            </Button>
          </div>
        </div>
      </div>
    </ResumeParent>
  );
}

export default Resume;
