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
  /* background-image: url("https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-rectangle-2-F05F0B6A-9C51-4A16-A795-BC7F67EC0F4E.png"); */

  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .card {
    /* box-shadow: 2px 2px 2px 2px #999; */
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
  @media screen and (max-width: 768px) {
    .projects {
      display: flex;
      flex-flow: column no-wrap;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 36px;
    color: #fff;
    padding: 20px;
    color: #fff;
    margin-top: 20px;
    margin-bottom: -20px;
    font-family: "Helvetica", Helvetica, Arial, serif;
    font-size: 70px;
    cursor: default;
    line-height: 84px;
    z-index: 1;
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
      <Div className="projects">
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
