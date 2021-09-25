import React, { useContext, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { CloudStateContext } from '../../context/animationContext';
import Sparkles from '../shared/Animations/Sparkles';

// logos
import HtmlLogo from '../../assets/images/tech_skills/html.png';
import CSSLogo from '../../assets/images/tech_skills/css3.png';
import JavaScriptLogo from '../../assets/images/tech_skills/javascript.png';
import JQueryLogo from '../../assets/images/tech_skills/jQuery.png';

import ReactLogo from '../../assets/images/tech_skills/react.png';
import MuiLogo from '../../assets/images/tech_skills/Mui.png';
import StyledComponentsLogo from '../../assets/images/tech_skills/styled-components.png';
import BootstrapLogo from '../../assets/images/tech_skills/bootstrap.png';

import RubyLogo from '../../assets/images/tech_skills/ruby.png';
import RubyOnRailsLogo from '../../assets/images/tech_skills/ruby-on-rails.png';
import PostgresLogo from '../../assets/images/tech_skills/postgresql.png';
import GitLogo from '../../assets/images/tech_skills/git.png';

import MongoDBLogo from '../../assets/images/tech_skills/mongodb.png';
import NodeLogo from '../../assets/images/tech_skills/node.png';
import ExpressLogo from '../../assets/images/tech_skills/express.png';
import AxiosLogo from '../../assets/images/tech_skills/axios.png';

class Skill {
  constructor(name, logo, categories) {
    this.name = name;
    this.logo = logo;
    this.categories = categories || [];
  }
}

const CATEGORIES = {
  FRONT_END: 'Front-End',
  BACK_END: 'Back-End',
  DATABASE: 'Database',
  VERSION_CONTROL: 'Version Control',
  UI_FRAMEWORKS: 'UI Frameworks & Libraries',
};

export default function Skills() {
  const [cloudMode] = useContext(CloudStateContext);
  const [skills, setSkills] = useState([
    new Skill('HTML5', HtmlLogo),
    new Skill('CSS3 (Cascading Style Sheets)', CSSLogo),
    new Skill('JavaScript', JavaScriptLogo),
    new Skill('jQuery', JQueryLogo),

    new Skill('React.js', ReactLogo), // ❤️
    new Skill('Material UI', MuiLogo),
    new Skill('styled-components', StyledComponentsLogo),
    new Skill('Bootstrap', BootstrapLogo),

    new Skill('Ruby', RubyLogo),
    new Skill('Ruby on Rails', RubyOnRailsLogo),
    new Skill('PostgreSQL', PostgresLogo),
    new Skill('Git', GitLogo),

    new Skill('MongoDB', MongoDBLogo),
    new Skill('Node.js', NodeLogo),
    new Skill('Node.js', ExpressLogo),
    new Skill('Axios', AxiosLogo),
  ]);

  return (
    <Wrapper className="language" cloudMode={cloudMode}>
      <div className="card">
        <h1>
          <Sparkles>
            {[...'Skills'].map((letter, key) => (
              <div key={key} className="text-letter">
                {letter}
              </div>
            ))}
          </Sparkles>
        </h1>
        {/* <br />
        <br /> */}

        <div className="skills-container">
          {skills.map((skill, key) => (
            <Tooltip arrow placement="top" title={skill.name} key={key}>
              <img className="tech-logo" src={skill.logo} alt={skill.name} />
            </Tooltip>
          ))}
        </div>

        <br />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  color: white;

  h1 {
    font-family: montserrat, sans-serif;
    font-size: clamp(19px, 10vw, 40px);
    text-align: center;
    margin-bottom: 30px;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* logo float */
  @keyframes stackFloat {
    0% {
      /* down */
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      /* up */
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
    100% {
      /* back down */
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }

  .tech-logo {
    object-fit: contain;
    max-width: 100px;
    min-width: 100px;
    padding: 20px;
    margin: 20px;
    max-height: 100px;
    height: 100px;
    border-radius: 36px;
    min-height: 100px;
    width: 100%;
    height: auto;
    background: #fff;
    transform: translateY(0px);
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

  @media screen and (max-width: 533px) {
    .tech-logo {
      margin: 10px;
    }
  }

  @media screen and (max-width: 433px) {
    .tech-logo {
      margin: 5px;
    }
  }

  @media screen and (max-width: 330px) {
    .tech-logo {
      width: 25vw;
      margin: 4px;
      max-width: 25vw;
      min-width: 25vw;
    }
  }

  .tech-logo:hover {
    cursor: pointer;
  }

  .card {
    margin: 100px auto;
  }
`;
