import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import "./skills.scss";
import cssLogo from "../../assets/css_logo.png";
import htmlLogo from "../../assets/html_logo.png";
import jamstack from "../../assets/Jamstack_logo.png";
import jslogo from "../../assets/js_logo.png";
import reactLogo from "../../assets/react_logo.png";
import nodeLogo from "../../assets/node.jpeg";
import mongoLogo from "../../assets/mongo.png";
import gitLogo from "../../assets/git.png";
import pwaLogo from "../../assets/pwa.png";
import { Section, trans, scroll } from "../helpers";

const skills = [
   { skill: "HTML", url: htmlLogo },
   { skill: "CSS", url: cssLogo },
   { skill: "JavaScript", url: jslogo },
   { skill: "React", url: reactLogo },
   { skill: "Node", url: nodeLogo },
   { skill: "MongoDB", url: mongoLogo },
   { skill: "Git", url: gitLogo },
   { skill: "JAM Stack", url: jamstack },
   { skill: "Progressive Web Apps", url: pwaLogo },
];
const Skills = () => {
   // useEffect(() => {});
   useEffect(() => {
      trans("skills", 1);
      scroll();
   }, []);
   let skillList = skills.map(({ skill, url }) => (
      <Zoom>
         <div key={skill} className='skill'>
            <img alt={skill} src={url} />
            <h3>{skill}</h3>
         </div>
      </Zoom>
   ));
   return (
      <Section className='skills'>
         <p className='heading'>SKILLS</p>
         <div className='skillCard'> {skillList}</div>
      </Section>
   );
};

export default Skills;
