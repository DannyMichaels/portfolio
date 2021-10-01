import React, { useState, useEffect } from 'react';
import Project from './Project';
import styled from 'styled-components';
import { getAllProjects } from '../../services/projects.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getSortedProjects } from '../../utils/sortedProjects.js';
import Sparkles from '../shared/Animations/Sparkles';
import { Fade } from 'react-awesome-reveal';

const Span = styled.div`
  transition: transform 250ms ease-out;
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  width: auto;
  z-index: 1;

  &:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
`;

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getAllProjects();
      setAllProjects(getSortedProjects(projects));
      setLoaded(true);
    };
    fetchProjects();
  }, []);

  const PROJECTS = allProjects?.map((project) => (
    <li className="project" key={project?.id}>
      <Project
        project={project}
        name={project?.fields.name.trim()}
        date={project?.fields.date}
        projectImage={project?.fields.img_url}
        description={project?.fields.description}
        website={project?.fields.website}
        github={project?.fields.github}
        video={project?.fields?.video}
        techName1={project.fields.tech_name1}
        techName2={project?.fields.tech_name2}
        techName3={project?.fields.tech_name3}
        techName4={project?.fields.tech_name4}
      />
    </li>
  ));

  return (
    <>
      <section className="page-section projects" id="projects">
        <inner-column>
          <header className="section-header projects">
            <h2 className="projects-h1">
              <Sparkles>
                {[...'Personal'].map((text, key) => (
                  <Span key={key}>{text}</Span>
                ))}
                &nbsp;
                {[...'Projects'].map((text, key) => (
                  <Span key={key}>{text}</Span>
                ))}
              </Sparkles>
            </h2>
          </header>
          {loaded ? (
            <Fade triggerOnce>
              <ol className="project-list">{PROJECTS}</ol>
            </Fade>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CircularProgress size={80} />
            </div>
          )}
        </inner-column>
      </section>
    </>
  );
}

export default Projects;
