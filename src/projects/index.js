import React from "react";
import { Route } from "react-router-dom";
import projectConfiguration from "./projectConfiguration";

function Projects({ match }) {
  return projectConfiguration.map(project => (
    <Route
      exact
      path={`${match.url}${project.routeId}`}
      component={project.component}
    />
  ));
}

export default Projects;
