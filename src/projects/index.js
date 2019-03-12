import React from 'react';
import { Route } from 'react-router-dom';
import projectConfiguration from './projectConfiguration';

function Projects({ match }) {
    return projectConfiguration.map((project, key) => (
        <Route
            exact
            path={`${match.url}${project.routeId}`}
            component={project.component}
            key={key}
        />
    ));
}

export default Projects;
