import React, { useState, useEffect } from "react";
import Home from "./screens/Home";
import { Route, Switch } from "react-router-dom";
import ProjectDetail from "./screens/ProjectDetail";
import { getAllProjects } from "./services/projects";
import { getSortedProjects } from "./utils/sortedProjects";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        // borderBottom: `1px solid ${"white"}`,
        "&:before": {
          //underline color when textfield is inactive
          // borderBottom: `1px solid ${"red"}`,
        },
        "&:hover:not($disabled):before": {
          //underline color when hovered
          borderBottom: `.8px solid ${"white"}`,
        },
      },
    },
  },
});

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
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/projects/:id"> */}
          {/* <ProjectDetail allProjects={allProjects} /> */}
          {/* </Route> */}
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
