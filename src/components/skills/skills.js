import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import "./skills.scss";
import { skills } from "./skillsData";

// eslint-disable-next-line no-unused-vars
import { Section, trans, scroll } from "../helpers";
import { Box } from "@mui/material";

const Skills = () => {
  // useEffect(() => {});
  useEffect(() => {
    trans("skills", 1);
    // scroll();
  }, []);
  let skillList = skills.map(({ skill, url }) => (
    <Zoom>
      <div key={skill} className="skill">
        <Box sx={{ borderRadius: 20 }}>
          <img
            alt={skill}
            src={url}
            style={{
              backgroundColor: "white",
              borderRadius: `${
                skill.includes("SCSS") ||
                skill.includes("Next") ||
                skill.includes("Fast") ||
                skill.includes("React") ||
                skill.includes("Node") ||
                skill.includes("Pyt")
                  ? "50%"
                  : ""
              }`,
            }}
          />
        </Box>
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
