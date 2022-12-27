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
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Typography variant="body1">
            I am an evolving, self-taught full stack web developer, who is
            passionate about building scalable and fast cloud solutions. I would
            love to form part of a formidable tech team that can help solve some
            of African problems creatively and innovatively.
          </Typography>
          <Typography variant="body1">
            I am currently working on a web portal that shows physical
            properties of various agricultural products based on a database of
            researches that are been conducted from other studies as my
            undergraduate project at Ahmadu Bello University, Zaria Nigeria. I
            am also working on UI and performance improvement for Sindhi Dry
            Fruits (New Delhi, India.)
          </Typography>
          <Typography variant="body1">
            I am open to opportunities, Jobs, collaboration or freelancing.
          </Typography>
          <Typography variant="body1">
            Appart from coding and learning, I love to travel-even though I've
            not been able to travel much yet. When I take a time out, my
            favorite sport is football - I can play too ⚽. I like interesting
            documentaries, with my favorite being Air Crash Investigation ✈.
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
