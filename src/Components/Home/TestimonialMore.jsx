import React, { memo } from 'react';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GlassButton from '../shared/GlassButton/GlassButton';
import MacOSDialog from '../shared/MacOSDialog/MacOSDialog';

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
import ReduxLogo from '../../assets/images/tech_skills/redux.png';
import SCSSLogo from '../../assets/images/tech_skills/SCSS.png';
import VueLogo from '../../assets/images/tech_skills/vue.png';
import GraphqlLogo from '../../assets/images/tech_skills/graphql.png';
import ContentfulLogo from '../../assets/images/tech_skills/contentful.png';
import GatsbyLogo from '../../assets/images/tech_skills/gatsby.png';

const IMAGES = {
  'Ruby on Rails': RubyOnRailsLogo,
  Ruby: RubyLogo,
  PostgreSQL: PostgresLogo,
  React: ReactLogo,
  HTML: HtmlLogo,
  JavaScript: JavaScriptLogo,
  jQuery: JQueryLogo,
  SCSS: SCSSLogo,
  CSS: CSSLogo,
  Bootstrap: BootstrapLogo,
  'Material UI': MuiLogo,
  'styled-components': StyledComponentsLogo,
  Axios: AxiosLogo,
  Git: GitLogo,
  Express: ExpressLogo,
  Node: NodeLogo,
  MongoDB: MongoDBLogo,
  Vue: VueLogo,
  Redux: ReduxLogo,
  GraphQL: GraphqlLogo,
  Gatsby: GatsbyLogo,
  Contentful: ContentfulLogo,
};

function TestimonialMore({ testimonial, open, onClose }) {
  const {
    fields: { company, jobDescription, techStack, website, jobLogo },
  } = testimonial;

  return (
    <MacOSDialog
      title={`Job: ${jobDescription}`}
      open={open}
      onClose={onClose}
      width="650px"
      id={`testimonial-${company}-${jobDescription}`}
      dockIcon={jobLogo && jobLogo[0] && jobLogo[0].url}
      dockColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      actions={[
        {
          label: 'Close Details',
          onClick: onClose,
          size: 'medium'
        }
      ]}>
      
      <CompanySection>
        {website ? (
          <Typography variant="h6" className="company-text">
            Company: &nbsp;
            <Tooltip arrow placement="top" title="Visit company website">
              <a
                className="company-link"
                target="_blank"
                rel="noreferrer"
                href={website}
                alt={company + ' website'}>
                {company}
              </a>
            </Tooltip>
          </Typography>
        ) : (
          <Typography variant="h6" className="company-text">
            Company: {company}
          </Typography>
        )}
      </CompanySection>

      <TechSection>
        <Typography variant="h6" className="tech-title">
          Technologies Used:
        </Typography>

        <div className="skills-list">
          {techStack.split(',').map((techSkill, key) => {
            let trimmedTechSkillName = techSkill.trim();

            return (
              <Tooltip
                title={trimmedTechSkillName}
                placement="top"
                arrow
                key={key}>
                <img src={IMAGES[trimmedTechSkillName]} alt={techSkill} />
              </Tooltip>
            );
          })}
        </div>
      </TechSection>
    </MacOSDialog>
  );
}


const CompanySection = styled.div`
  margin-bottom: 24px;
  
  .company-text {
    color: rgba(255, 255, 255, 0.95) !important;
    font-weight: 500 !important;
  }
  
  .company-link {
    color: #64b5f6 !important;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
    
    &:hover {
      color: #90caf9 !important;
      border-bottom-color: #64b5f6;
    }
  }
`;

const TechSection = styled.div`
  .tech-title {
    color: rgba(255, 255, 255, 0.95) !important;
    font-weight: 600 !important;
    margin-bottom: 16px !important;
  }
  
  .skills-list {
    max-height: 320px;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-gap: 16px;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, 
        rgba(102, 126, 234, 0.6) 0%, 
        rgba(118, 75, 162, 0.6) 100%);
      border-radius: 3px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      &:hover {
        background: linear-gradient(180deg, 
          rgba(102, 126, 234, 0.8) 0%, 
          rgba(118, 75, 162, 0.8) 100%);
      }
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 80px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.95);
      cursor: help;
      padding: 8px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      &:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 1);
      }
    }
  }
`;



export default memo(TestimonialMore);