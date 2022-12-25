import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import "./skills.scss";
import { skills } from "./skillsData";

import { Section, trans, scroll } from "../helpers";

const Skills = () => {
  // useEffect(() => {});
  useEffect(() => {
    trans("skills", 1);
    scroll();
  }, []);
  let skillList = skills.map(({ skill, url }) => (
    <Zoom>
      <div key={skill} className="skill">
        <image>
          <img
            alt={skill}
            src={url}
            style={{ backgroundColor: "white", borderRadius: 8 }}
          />
        </image>
        <h3>{skill}</h3>
      </div>
    </Zoom>
  ));
  return (
    <Section className="skills">
      <p className="heading">SKILLS</p>
      <div className="skillCard"> {skillList}</div>
    </Section>
  );
};

export default Skills;
