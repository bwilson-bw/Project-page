import React from "react";
import ProjectCard from "./components/ProjectCard";
import projectConfiguration from "./projects/projectConfiguration";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./css/homepage.css";

const styles = theme => ({});

class Home extends React.Component {
  render() {
    return (
      <div className="home-body">
        <Typography variant="h1">Home Page</Typography>
        <div className="home-card-body">
          {projectConfiguration.map((project, key) => (
            <div className="home-card" key={key}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
