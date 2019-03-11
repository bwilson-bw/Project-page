import React from "react";
import ProjectCard from "./components/ProjectCard";
import projectConfiguration from "./projects/projectConfiguration";
import "./css/homepage.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-body">
        HOME PAGE
        <div className="home-card-body">
          {projectConfiguration.map(project => (
            <div className="home-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
