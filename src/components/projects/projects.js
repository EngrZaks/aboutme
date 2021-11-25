import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { projects } from "./projectsArr";
import { Section, trans, scroll } from "../helpers";
import { AiOutlineGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import "./projects.css";
const Projects = () => {
  useEffect(() => {
    trans("projects", 1);
    scroll();
  }, []);
  const projectsList = projects.map((project) => {
    return (
      <Zoom>
        <div className="project" key={project.name}>
          <img src={project.imgurl} alt={project.imgurl} />
          <div className="content">
            <p className="title">{project.name}</p>
            <p>
              <span className="tech">Tech stack:</span> {project.tech}
            </p>
            <div className="links">
              {project.giturl && (
                <a href={project.giturl} target="">
                  <AiOutlineGithub />
                </a>
              )}
              {project.liveurl && (
                <a href={project.liveurl} target="">
                  <BiGlobe />
                </a>
              )}
            </div>
          </div>
        </div>
      </Zoom>
    );
  });
  return (
    <Section className="projects">
      <p className="heading">PROJECTS</p>
      <div className="projectCard">{projectsList}</div>
    </Section>
  );
};

export default Projects;
