import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import projectConfiguration from '../projects/projectConfiguration';

const styles = theme => ({
    root: {
        width: '280px',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'scroll',
        height: '100vh',
    },
    linkStyle: {
        textDecoration: 'none',
        color: '#0097a7',
    },
});

class AppSidebar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <NavLink
                        exact
                        to="/"
                        className={classes.linkStyle}
                        activeClassName="currently-selected-link"
                    >
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </NavLink>
                    {projectConfiguration.map((project, key) => (
                        <NavLink
                            exact
                            to={`/projects${project.routeId}`}
                            className={classes.linkStyle}
                            key={key}
                            activeClassName="currently-selected-link"
                        >
                            <ListItem button>
                                <ListItemText primary={project.title} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
        );
    }
}

AppSidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppSidebar);
