import React from 'react';
import { Route, Switch } from 'react-router-dom';
import projectConfiguration from './projectConfiguration';

const NotFound = () => <div className="home-body">Page not FOUND 404..........</div>;

function Projects({ match }) {
    const routes = projectConfiguration.map((project, key) => (
        <Route
            exact
            path={`${match.url}${project.routeId}`}
            component={project.component}
            key={key}
        />
    ));
    return (
        <Switch>
            {routes}
            <Route path={`${match.url}*`} component={NotFound} />
        </Switch>
    );
}

export default Projects;
