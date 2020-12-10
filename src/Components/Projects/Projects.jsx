import React, { useState, useEffect } from "react";
import Project from "./Project";
import styled from "styled-components";
import { getAllProjects } from "../../services/projects.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSortedProjects } from "../../utils/sortedProjects.js";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .card {
    box-shadow: 2px 2px 2px 2px #999;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .projects {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 10px;
    padding: 10px;
  }
  .title {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 600px) {
    .card {
      max-width: 100%;
    }
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
    <React.Fragment key={project?.id}>
      <Project
        project={project}
        name={project?.fields.name}
        date={project?.fields.date}
        projectImage={project?.fields.img_url}
        description={project?.fields.description}
        website={project?.fields.website}
        github={project?.fields.github}
        techName1={project.fields.tech_name1}
        techName2={project?.fields.tech_name2}
        techName3={project?.fields.tech_name3}
        techName4={project?.fields.tech_name4}
      />
    </React.Fragment>
  ));

  if (!loaded) {
    return (
      <Div>
        <div className="loading">
          <div className="card">
            <h1>Loading Projects</h1>
            <CircularProgress />
          </div>
        </div>
      </Div>
    );
  }

  return (
    <>
      <Div>
        <div className="card">
          <div className="title">
            <h1>Projects</h1>
          </div>
          <div className="projects">{PROJECTS}</div>
        </div>
      </Div>
    </>
  );
}

export default Projects;
