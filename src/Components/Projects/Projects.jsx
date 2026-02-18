import { useState, useEffect } from 'react';
import ProjectCarousel3D from './ProjectCarousel3D';
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
  z-index: 100;  /* Increased to be above clouds */
  position: relative;
  isolation: isolate;  /* Prevents blur inheritance from background elements */

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
      console.log('Fetched projects:', projects);
      const filteredProjects = projects.filter(project => !project.fields.hidden);
      setAllProjects(getSortedProjects(filteredProjects));
      setLoaded(true);
    };
    fetchProjects();
  }, []);

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
              <ProjectCarousel3D projects={allProjects} />
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
