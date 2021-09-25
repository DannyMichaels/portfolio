import React, { useContext } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { CloudStateContext } from '../../context/animationContext';
import Sparkles from '../shared/Animations/Sparkles';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  color: white;
  h1 {
    font-family: montserrat, sans-serif;
    font-size: clamp(19px, 10vw, 40px);
    text-align: center;
  }

  @keyframes stackFloat {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }
  img {
    max-width: 100px;
    min-width: 100px;
    width: 100px;
    padding: 20px;
    margin: 20px;
    max-height: 100px;
    height: 100px;
    border-radius: 36px;
    min-height: 100px;
    width: 100%;
    height: auto;
    background: #fff;
    transform: translatey(0px);
    animation: ${({ cloudMode }) =>
      cloudMode && 'stackFloat 6s ease-in-out infinite'};
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
  @media screen and (max-width: 768px) {
    img {
      width: 15vw;
      max-width: 15vw;
      min-width: 8vw;
    }
  }

  @media screen and (max-width: 533px) {
    img {
      width: 15vw;
      margin: 10px;
      max-width: 15vw;
      min-width: 15vw;
    }
  }

  @media screen and (max-width: 433px) {
    img {
      width: 18vw;
      margin: 5px;
      max-width: 18vw;
      min-width: 18vw;
    }
  }

  @media screen and (max-width: 330px) {
    img {
      width: 17vw;
      margin: 4px;
      max-width: 17vw;
      min-width: 17vw;
    }
  }

  img:hover {
    cursor: pointer;
  }
  .card {
    margin: 0 auto;
    margin-top: 100px;
  }
`;
function Skills() {
  const [cloudMode] = useContext(CloudStateContext);

  return (
    <Section className="language" cloudMode={cloudMode}>
      <div className="card">
        <h1>
          <Sparkles>
            <div className="span">S</div>
            <div className="span">k</div>
            <div className="span">i</div>
            <div className="span">l</div>
            <div className="span">l</div>
            <div className="span">s</div>
          </Sparkles>
        </h1>
        <br />
        <br />

        <Tooltip title="HTML5">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/html5-41-1175209.png"
            alt="HTML"
          />
        </Tooltip>
        <Tooltip title="CSS3 (Cascading Style Sheets)">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png"
            alt="CSS"
          />
        </Tooltip>
        <Tooltip title="JavaScript">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="JavaScript"
          />
        </Tooltip>
        <Tooltip title="jQuery">
          <img src="https://logodix.com/logo/941103.png" alt="jQuery" />
        </Tooltip>
        <br />
        <Tooltip title="React.js">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
          />
        </Tooltip>
        <Tooltip title="Material UI">
          <img
            src="https://material-ui.com/static/logo.png"
            alt="Material UI"
          />
        </Tooltip>
        <Tooltip title="Styled-Components">
          <img
            src="https://avatars2.githubusercontent.com/u/20658825?s=200&v=4"
            alt="styled components"
          />
        </Tooltip>
        <Tooltip title="Bootstrap">
          <img
            src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
            alt="Bootstrap"
          />
        </Tooltip>
        <br />

        <br />
        <Tooltip title="Ruby">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
            alt="ruby"
          />
        </Tooltip>
        <Tooltip title="Ruby on Rails">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"
            alt="Rails"
          />
        </Tooltip>
        <Tooltip title="PostgreSQL">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            alt="postgresql"
          />
        </Tooltip>
        <Tooltip title="Git">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="Git"
          />
        </Tooltip>
        <br />
        <Tooltip title="MongoDB">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png"
            alt="mongodb"
          />
        </Tooltip>
        <Tooltip title="Node.js">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            alt="node"
          />
        </Tooltip>
        <Tooltip title="Express">
          <img
            src="https://img2.pngio.com/express-js-png-5-png-image-expressjs-png-800_800.png"
            alt="Express"
          />
        </Tooltip>
        <Tooltip title="Axios">
          <img
            src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
            alt="Axios"
          />
        </Tooltip>
        <br />
      </div>
    </Section>
  );
}

export default Skills;
