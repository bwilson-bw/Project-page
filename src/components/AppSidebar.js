import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
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
  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <Link to="/" className={classes.linkStyle}>
            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {projectConfiguration.map((project, key) => (
            <Link
              to={`/projects${project.routeId}`}
              className={classes.linkStyle}
              key={key}
            >
              <ListItem
                button
                selected={this.state.selectedIndex === key + 1}
                onClick={event => this.handleListItemClick(event, key + 1)}
              >
                <ListItemText primary={project.title} />
              </ListItem>
            </Link>
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
