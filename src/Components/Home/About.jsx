import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiUpwork } from 'react-icons/si';

const Div = styled.div`
  font-family: 'montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;

  .github,
  .linkedin,
  .upwork {
    font-size: 40px;
    color: #fff;
    margin-right: 20px;
    transition: transform 250ms ease-out;
  }

  .resume-button {
    transition: transform 250ms ease-out;
    background: #fff;
    color: black;
    margin-left: -50px;

    @media screen and (max-width: 600px) {
      margin-left: -60px;
    }
  }
  .resume-button:hover {
    background: #fff;
    color: black;
  }
  a {
    display: block;
  }
  .github:hover,
  .linkedin:hover,
  .upwork:hover,
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
    display: flex;
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

  .text-container {
    display: flex;
    color: white;
    font-size: 20px;
    flex-flow: row wrap;
    max-width: 450px;

    max-height: 500px;
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    .text-container {
      font-size: 18px;
    }
    .title-container {
      font-size: 29px;
      padding: 10px;
    }
    .button-container {
      display: flex;
      flex-flow: row nowrap;
      align-self: flex-end;
      margin-bottom: 20px;
      position: relative;
      left: 48%;
      padding-top: 30px;
    }
  }
`;

function About() {
  return (
    <>
      <Div className="page-section about">
        <>
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
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://github.com/DannyMichaels/'}>
                  <SiGithub className="github" />
                </a>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    'https://www.linkedin.com/in/daniel-michael-718825155/'
                  }>
                  <SiLinkedin className="linkedin" />
                </a>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    'https://www.upwork.com/o/profiles/users/~019a9afd0f1e94fc80/'
                  }>
                  <SiUpwork className="upwork" />
                </a>
              </div>
              <div className="button-container">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href={
                    'https://drive.google.com/file/d/1Wjfz8E9NeW4QMK_nhpwSicwg9_pDA5JD/view?usp=sharing'
                  }>
                  <Button
                    variant="contained"
                    color="primary"
                    className="resume-button">
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      </Div>
    </>
  );
}

export default About;
