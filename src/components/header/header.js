import "./header.scss";
import { FaLinkedinIn } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import {
  AiFillFilePdf,
  // AiFillFileText,
  // AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import image from "../../assets/zaks_crop.png";
import scrolldown from "../../assets/movedown.png";
import { Box, Button, Link, Typography } from "@mui/material";
import { scroll } from "../helpers";

// import PropTypes from "prop-types";

const Header = () => {
  return (
    //  <div className="details-wrapper">
    <Box className="details">
      <Box className="contacts" sx={{ bgcolor: "black", height: 100 }}>
        <a href="mailto:abzakariyya@gmail.com">
          {" "}
          <AiOutlineMail />
        </a>{" "}
        <a href="tel:+2348023767822">
          {" "}
          <AiOutlinePhone />
        </a>{" "}
        <a href="https://twitter.com/Engr_Zaks">
          {" "}
          <AiOutlineTwitter />
        </a>{" "}
        <a href="https://www.linkedin.com/in/zakariyya123">
          {" "}
          <FaLinkedinIn />
        </a>{" "}
        <a href="https://github.com/EngrZaks">
          {" "}
          <AiOutlineGithub />
        </a>
        {/* <a href="https://docs.google.com/document/d/1JBQKCIkZyVoYHKhAe7OoCo-nYxqtsKZHsIUweSUJVKE/edit?usp=share_link">
          {" "}
          <AiOutlineDownload />
        </a> */}
        {/* <Button color="primary" variant="contained"> */}{" "}
        <Box className="scrolldown" onClick={() => scroll()}>
          <img
            src={scrolldown}
            alt="scroll down button"
            width={20}
            height={30}
          />
        </Box>
        {/* </Button> */}
      </Box>
      <div className="image">
        <img src={image} alt="myself" />
      </div>
      <Zoom>
        <Typography variant="h4" component="h1">
          Zakariyya Abdullahi
        </Typography>
      </Zoom>
      {/* <h2 id="el"> 💻</h2> */}

      <Typography
        align="center"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          color: "gray",
          fontSize: 18,
          px: 2,
          bgcolor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        Software engineer @{" "}
        <a
          pashref
          target="_blank"
          rel="noreferrer"
          href="https://www.snappieanalytics.com/"
        >
          <Link sx={{ color: "palegoldenrod" }}>Snappie Analytics Ltd </Link>
        </a>{" "}
        <span style={{ fontStyle: "normal" }}>|</span> Technical Product
        Manager/Front-end Lead @{" "}
        <a
          pashref
          target="_blank"
          rel="noreferrer"
          href="https://www.orbitalsai.com/"
        >
          <Link sx={{ color: "palegoldenrod" }}>OrbitalsAI Nigeria Ltd </Link>
        </a>{" "}
        <span style={{ fontStyle: "normal" }}>|</span> Freelancer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          p: 2,
          // textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.586)",
          color: "#ffffffd4",
          maxWidth: 700,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Whether it's planning and designing the architecture, converting Figma
        designs into intuitive front-end interfaces, writing business logic on
        the back-end, or setting up robust cloud deployments, I truly enjoy the
        process of bringing an idea to life and seeing the end result come to
        fruition. And I am constantly learning.
      </Typography>
      <Button
        className="cv"
        href="https://drive.google.com/file/d/1YCvfbtufmVJJvVy5jMy3_5FNKK0OX1HI/view?usp=share_link"
        variant="contained"
        startIcon={<AiFillFilePdf />}
        size="large"
        sx={{
          mt: 1,
          fontWeight: "bold",
          borderRadius: 10,
          bgcolor: "gray",
        }}
      >
        Open CV
      </Button>
    </Box>
    //  {/* </div> */}
  );
};

export default Header;
