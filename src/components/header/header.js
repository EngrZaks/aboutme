import "./header.scss";
import { FaLinkedinIn } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import image from "../../assets/zaks_crop.png";
import { Box, Button, Typography } from "@mui/material";
import { BiBorderRadius } from "react-icons/bi";
import { textAlign } from "@mui/system";

// import PropTypes from "prop-types";

const Header = () => {
  return (
    //  <div className="details-wrapper">
    <Box className="details">
      <Box className="contacts">
        <a href="mailto:abzakariyya@gmail.com">
          {" "}
          <AiOutlineMail />
        </a>{" "}
        <a href="tel:+2348023767822">
          {" "}
          <AiOutlinePhone />
        </a>{" "}
        <a href="https://twitter.com/DevZaks">
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
        <a href="https://drive.google.com/file/d/1J1Qb86-dJsJOCW7R5JtfiiqyMd5z_BUn/view?usp=sharing">
          {" "}
          <AiOutlineDownload />
        </a>
      </Box>
      <Box className="image">
        <img src={image} alt="myself" />
      </Box>
      <Zoom>
        <Typography variant="h4" component="h1">
          Zakariyya Abdullahi
        </Typography>
      </Zoom>
      <h2 id="el"> 💻</h2>
      <Typography
        variant="caption"
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "black",
          color: "#ffffffd4",
        }}
      >
        Whether it's planning and designing the architecture, converting Figma
        designs into intuitive front-end interfaces, writing business logic on
        the back-end, or setting up robust cloud deployments, I truly enjoy the
        process of bringing an idea to life and seeing the end result come to
        fruition. And I am constantly learning
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 1,
          fontWeight: "bold",
          borderRadius: 10,
        }}
      >
        Download CV
      </Button>
    </Box>
    //  {/* </div> */}
  );
};

export default Header;
