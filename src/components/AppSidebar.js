import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 280,
    backgroundColor: theme.palette.background.paper
  }
});

class AppSidebar extends React.Component {
  state = {
    selectedIndex: 1
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" className={classes.subHeader}>
              Select a project
            </ListSubheader>
          }
        >
          <ListItem
            button
            selected={this.state.selectedIndex === 0}
            onClick={event => this.handleListItemClick(event, 0)}
          >
            <ListItemText primary="Project 1" />
          </ListItem>
          <ListItem
            button
            selected={this.state.selectedIndex === 1}
            onClick={event => this.handleListItemClick(event, 1)}
          >
            <ListItemText primary="Project 2" />
          </ListItem>
        </List>
      </div>
    );
  }
}

AppSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppSidebar);
