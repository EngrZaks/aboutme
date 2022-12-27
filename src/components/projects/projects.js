import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { projects } from "./projectsArr";
import { Section, trans, scroll } from "../helpers";
import { AiOutlineGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import "./projects.scss";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
const Projects = () => {
  useEffect(() => {
    trans("projects", 1);
    scroll();
  }, []);
  const projectsList = projects.map((project, index) => {
    return (
      <Zoom key={index} style={{ flex: "1 1 auto" }}>
        <Card variant="outlined" className="card" key={project.name}>
          <CardMedia
            sx={{ height: 140 }}
            image={`${project.imgurl}`}
            title="project Illustration"
          ></CardMedia>
          <CardContent className="content">
            <Typography gutterBottom variant="h6" className="name">
              {project.name}
            </Typography>
            <Typography variant="body2">
              <span className="tech">Tech stack:</span> {project.tech}
            </Typography>
          </CardContent>
          <CardActions className="links">
            {project.giturl && (
              <a href={project.giturl} target="">
                <IconButton color="primary">
                  <AiOutlineGithub />
                </IconButton>
              </a>
            )}
            {project.liveurl && (
              <a href={project.liveurl} target="">
                <IconButton color="primary">
                  <BiGlobe />
                </IconButton>
              </a>
            )}
          </CardActions>
        </Card>
      </Zoom>
    );
  });
  return (
    <Section className="projects">
      <p className="heading">PROJECTS</p>
      <div className="project">{projectsList}</div>
    </Section>
  );
};

export default Projects;
