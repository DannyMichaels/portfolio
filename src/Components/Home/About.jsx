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

  @media screen and (min-width: 1100px) {
    position: relative;
    top: -30px;
  }

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

  .fun-letter {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .fun-letter:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }

  .text-container {
    display: flex;
    color: white;
    font-size: 20px;
    flex-flow: row wrap;
    max-width: 500px;

    p {
      line-height: 1.5em;
    }

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
              {[...'Summary'].map((char, key) => (
                <div className="fun-letter" key={key}>
                  {char}
                </div>
              ))}
            </div>
            <div className="text-container">
              <p>
                Knowledgeable Full Stack Developer brings superior front-end and
                back-end design to promote organization-specific website
                presence. Thorough comprehension of complex HTML, CSS and
                JavaScript programming languages to generate custom webpage
                design. Extensive collaboration with frontend to ascertain
                company expectations and oversee site creation, from initial
                planning through rollout and support. Detail-oriented approach
                to maintaining website responsiveness, effectiveness and
                security
              </p>
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
                    'https://drive.google.com/file/d/1sstPomtfMSs-5ci4tltEJyHIVkcZRgD4/view?usp=sharing'
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
