import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function AppHeader(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6">Project Page</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
