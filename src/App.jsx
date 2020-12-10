import React, { useState, useEffect } from "react";
import Home from "./screens/Home";
import { Route, Switch } from "react-router-dom";
import ProjectDetail from "./screens/ProjectDetail";
import { getAllProjects } from "./services/projects";
import { getSortedProjects } from "./utils/sortedProjects";

function App() {
  const [allProjects, setAllProjects] = useState([]);

  const fetchProjects = async () => {
    const projects = await getAllProjects();
    setAllProjects(getSortedProjects(projects));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:id">
          <ProjectDetail allProjects={allProjects} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
