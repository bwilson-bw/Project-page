import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import cardImage from "../images/cardImage.png";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  linkStyle: {
    textDecoration: "none"
  }
};

function ProjectCard(props) {
  const { classes, title, description, id, routeId } = props;
  return (
    <Link to={routeId} className={classes.linkStyle}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cardImage}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {id}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string
};

export default withStyles(styles)(ProjectCard);
