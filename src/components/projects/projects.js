import * as react from "react";
import Zoom from "react-reveal/Zoom";
import { projects } from "./projectsArr";
import { Section, trans, scroll, modalStyle } from "../helpers";
import { AiOutlineGithub } from "react-icons/ai";
import { BiGlobe, BiInfoCircle } from "react-icons/bi";
import "./projects.scss";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
const Projects = () => {
  const [open, setOpen] = react.useState(null);
  const handleOpen = (e, id) => {
    e.preventDefault();
    setOpen(id);
  };
  const handleClose = (id) => setOpen(null);
  react.useEffect(() => {
    trans("projects", 1);
    scroll();
  }, []);
  const projectsList = projects.map((project, index) => {
    return (
      <Zoom key={index} style={{ flex: "1 1 auto" }}>
        <Card variant="outlined" className="card" key={project.name}>
          <CardMedia
            sx={{ height: 200 }}
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
              <a href={project.giturl} target="_blank" rel="noreferrer">
                <IconButton color="primary">
                  <AiOutlineGithub />
                </IconButton>
              </a>
            )}
            {project.liveurl && (
              <a href={project.liveurl} target="_blank" rel="noreferrer">
                <IconButton color="primary">
                  <BiGlobe />
                </IconButton>
              </a>
            )}

            {project.info && (
              <a href="none" onClick={(e) => handleOpen(e, project.name)}>
                <IconButton color="primary" sx={{}}>
                  <BiInfoCircle />
                  {/* <Button>info</Button> */}
                </IconButton>
              </a>
            )}
          </CardActions>
          <Modal
            open={open === project.name}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {project.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {project.info}
              </Typography>
            </Box>
          </Modal>
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
