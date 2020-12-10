import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail({ allProjects }) {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (allProjects.length) {
      const oneProject = allProjects.find(
        (project) => project.id === Number(id)
      );

      setProject(oneProject);
    }
  }, [allProjects, id]);

  return (
      <div className="project-details">
        {project && (
          <div className="card">
            <h3>{project.name}</h3>
            <img src={project.img_url} alt={project.name} />
            <p>{project.description}</p>
          </div>
        )}
      </div>
  );
}
