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
    minWidth: "250px",
    width: "100%"
  },
  media: {
    height: 140
  },
  linkStyle: {
    textDecoration: "none",
    color: "#0097a7"
  }
};

function ProjectCard(props) {
  const { classes, title, description, id, routeId } = props;
  return (
    <Link to={`/projects${routeId}`} className={classes.linkStyle}>
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
