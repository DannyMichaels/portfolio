import React, { useState, useEffect } from "react";
import Project from "./Project";
import styled from "styled-components";
import { getAllProjects } from "../../services/projects.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSortedProjects } from "../../utils/sortedProjects.js";

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
<<<<<<< HEAD
        name={project?.fields?.name?.trim()}
        date={project?.fields?.date}
        projectImage={project?.fields?.img_url}
        description={project?.fields?.description}
        website={project?.fields?.website}
        github={project?.fields?.github}
        techName1={project?.fields?.tech_name1}
        techName2={project?.fields?.tech_name2}
        techName3={project?.fields?.tech_name3}
        techName4={project?.fields?.tech_name4}
=======
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
>>>>>>> develop
      />
    </li>
  ));

  if (!loaded) {
    return (
      <div className="loading">
        <div className="card">
          <h1>Loading Projects</h1>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <>
      <section class="page-section projects" id="projects">
        <inner-column>
          <header class="section-header projects">
            <h2 className="projects-h1">
              <Span className="span">P</Span>
              <Span className="span">r</Span>
              <Span className="span">o</Span>
              <Span className="span">j</Span>
              <Span className="span">e</Span>
              <Span className="span">c</Span>
              <Span className="span">t</Span>
              <Span className="span">s</Span>
            </h2>
          </header>
          <ol className="project-list">{PROJECTS}</ol>
        </inner-column>
      </section>
    </>
  );
}

export default Projects;
