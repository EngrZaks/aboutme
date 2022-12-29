import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";

import { trans, scroll } from "../helpers";
export default function About() {
  useEffect(() => {
    trans("about", 1);
    scroll();
  }, []);
  return (
    <Zoom>
      <Container className="about" sx={{ pb: 2 }}>
        <p className="heading" style={{ textAlign: "center" }}>
          About me
        </p>
        <Box
          style={{
            fontSize: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 1, bgcolor: "black", p: 1, color: "#e3e3e3" }}
          >
            As a self-taught full stack web developer, I am constantly evolving
            and learning in order to bring the best possible solutions to my
            projects. I am excited to be part of a tech team that is committed
            to solving African problems in a creative and innovative way, and I
            am eager to contribute my skills and expertise to such a team.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, bgcolor: "black", p: 1, color: "#e3e3e3" }}
          >
            I am proud to have recently completed the Zuri HNGi9 internship,
            widely considered to be the most challenging internship in Nigeria,
            as a finalist on both the front-end and back-end tracks. I had the
            opportunity to serve as the CTO for my team's project and managed a
            team of approximately 50 interns. This experience allowed me to
            further develop my skills in full stack development and team
            leadership and I am excited to bring these skills to my future
            endeavors in the tech industry.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, bgcolor: "black", p: 1, color: "#e3e3e3" }}
          >
            I am currently working on a safety application that has the
            potential to revolutionize crime reporting and tracking in Nigeria,
            while also improving the overall safety of citizens. Whether it's
            designing and building new projects from scratch or collaborating
            with a team to bring an idea to life, I thrive on the challenge of
            solving complex technical problems and delivering high-quality
            results that exceed expectations.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 1, bgcolor: "black", p: 1, color: "#e3e3e3" }}
          >
            In addition to my passion for coding and learning, I am also an avid
            traveler and sports enthusiast. Though I have not yet had the
            opportunity to travel extensively, it is a hobby that I greatly
            enjoy. When I'm not working or learning, I love to play football and
            watch interesting documentaries. My all-time favorite documentary is
            Air Crash Investigation ✈.
          </Typography>
          {/* <a
            style={{
              padding: "15px 5px",
              color: "lime",
              marginTop: "20px",
              fontWeight: "bold",
            }}
            href="https://drive.google.com/file/d/1J1Qb86-dJsJOCW7R5JtfiiqyMd5z_BUn/view?usp=sharing"
          >
            My Resume
          </a> */}
        </Box>
      </Container>
    </Zoom>
  );
}
