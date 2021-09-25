import React, { useContext } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { CloudStateContext } from '../../context/animationContext';
import Sparkles from '../shared/Animations/Sparkles';

// logos
import MuiLogo from '../../assets/images/tech_skills/Mui.png';
import StyledComponentsLogo from '../../assets/images/tech_skills/styled-components.png';
import RubyLogo from '../../assets/images/tech_skills/ruby.png';
import RubyOnRailsLogo from '../../assets/images/tech_skills/ruby-on-rails.png';
import BootstrapLogo from '../../assets/images/tech_skills/bootstrap.png';
import JavaScriptLogo from '../../assets/images/tech_skills/javascript.png';

export default function Skills() {
  const [cloudMode] = useContext(CloudStateContext);

  return (
    <Section className="language" cloudMode={cloudMode}>
      <div className="card">
        <h1>
          <Sparkles>
            <div className="text-letter">S</div>
            <div className="text-letter">k</div>
            <div className="text-letter">i</div>
            <div className="text-letter">l</div>
            <div className="text-letter">l</div>
            <div className="text-letter">s</div>
          </Sparkles>
        </h1>
        <br />
        <br />

        <Tooltip arrow placement="top" title="HTML5">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/html5-41-1175209.png"
            alt="HTML"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="CSS3 (Cascading Style Sheets)">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png"
            alt="CSS"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="JavaScript">
          <img src={JavaScriptLogo} alt="JavaScript" />
        </Tooltip>
        <Tooltip arrow placement="top" title="jQuery">
          <img src="https://logodix.com/logo/941103.png" alt="jQuery" />
        </Tooltip>
        <br />
        <Tooltip arrow placement="top" title="React.js">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="Material UI">
          <img src={MuiLogo} alt="Material UI" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Styled-Components">
          <img src={StyledComponentsLogo} alt="styled components" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Bootstrap">
          <img src={BootstrapLogo} alt="Bootstrap" />
        </Tooltip>
        <br />

        <br />
        <Tooltip arrow placement="top" title="Ruby">
          <img src={RubyLogo} alt="ruby" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Ruby on Rails">
          <img src={RubyOnRailsLogo} alt="Rails" />
        </Tooltip>
        <Tooltip arrow placement="top" title="PostgreSQL">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            alt="postgresql"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="Git">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="Git"
          />
        </Tooltip>
        <br />
        <Tooltip arrow placement="top" title="MongoDB">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png"
            alt="mongodb"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="Node.js">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            alt="node"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="Express">
          <img
            src="https://img2.pngio.com/express-js-png-5-png-image-expressjs-png-800_800.png"
            alt="Express"
          />
        </Tooltip>
        <Tooltip arrow placement="top" title="Axios">
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
    object-fit: contain;
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

  .text-letter {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .text-letter:hover {
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
