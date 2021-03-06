import React, { useEffect } from "react";

import { Section, trans } from "../helpers";
import react30 from "../../assets/projects/30days.jpg";
import avebot from "../../assets/projects/avebot.jpg";
import hotcold from "../../assets/projects/hotcold.jpg";
import js30 from "../../assets/projects/js30.jpg";
import lanoires from "../../assets/projects/meatlogo.jpg";
import node from "../../assets/projects/node.jpg";
import speech from "../../assets/projects/speech.jpg";
import tictac from "../../assets/projects/tic-tac.jpg";
import ramash from "../../assets/projects/ramash.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import "./projects.css";
const Projects = () => {
   useEffect(() => {
      trans("projects");
   });
   const projects = [
      {
         imgurl: js30,
         name: "JavaScript30",
         giturl: "https://github.com/EngrZaks/JavaScript30",
         liveurl: "",
      },
      {
         imgurl: ramash,
         name: "RamashCourier",
         giturl: "",
         liveurl: "https://ramashcourier.netlify.app",
      },
      {
         imgurl: lanoires,
         name: "La Noire's cuisine",
         giturl: "",
         liveurl: "https://lanoires.netlify.app/",
      },
      {
         imgurl: speech,
         name: "Speech Detection web app",
         giturl: "https://github.com/EngrZaks/SpeechRecorgnition",
         liveurl: "https://speechit.netlify.app/",
      },
      {
         imgurl: tictac,
         name: "tic-tac-toe",
         giturl: "https://github.com/EngrZaks/makers-projects",
         liveurl: "https://zaks-tictac.netlify.app",
      },
      {
         imgurl: hotcold,
         name: "hot-or-cold",
         giturl: "https://github.com/EngrZaks/makers-projects",
         liveurl: "https://zaks-hotcold.netlify.app",
      },
      {
         imgurl: node,
         name: "5 Node.js projects",
         giturl: "https://github.com/EngrZaks/fcc-node-microservice-projects",
         liveurl: "https://zaks-node-projects.herokuapp.com/",
      },
      {
         imgurl: react30,
         name: "30 Days of React",
         giturl: "https://github.com/EngrZaks/30-Days-Of-React",
         liveurl: "",
      },
      { imgurl: avebot, name: "AveBot", giturl: "", liveurl: "" },
   ];
   const projectsList = projects.map((project) => {
      let techs;
      //    let
      switch (project.imgurl) {
         case js30:
            techs = "JavaScript";
            break;
         case lanoires:
            techs = "React.js";
            break;
         case ramash:
            techs = "JavaScript, Markup & APIs (JAMStack)";
            break;
         case avebot:
            techs = "HTML, CSS & JavaScript";
            break;
         case speech:
            techs = "JavaScript, HTML & CSS ";
            break;
         case tictac:
            techs = "JavaScript, HTML & CSS ";
            break;
         case hotcold:
            techs = "JavaScript, HTML & CSS ";
            break;
         case node:
            techs = "Node.js";
            break;
         case react30:
            techs = "React.js";
            break;
         default:
            techs = "";
            break;
      }
      return (
         <div className='project' key={project.name}>
            <img src={project.imgurl} alt={project.imgurl} />
            <div className='content'>
               <p className='title'>{project.name}</p>
               <p>
                  <span className='tech'>Tech stack:</span> {techs}
               </p>
               <div className='links'>
                  {project.giturl && (
                     <a href={project.giturl} target=''>
                        <AiOutlineGithub />
                     </a>
                  )}
                  {project.liveurl && (
                     <a href={project.liveurl} target=''>
                        <BiGlobe />
                     </a>
                  )}
               </div>
            </div>
         </div>
      );
   });
   return (
      <Section className='projects'>
         <p className='heading'>PROJECTS</p>
         <div className='projectCard'>{projectsList}</div>
      </Section>
   );
};

export default Projects;
