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

// import PropTypes from "prop-types";

const Header = () => {
  return (
    //  <div className="details-wrapper">
    <Box className="details">
      <Box className="image">
        <img src={image} alt="myself" />
      </Box>
      <Zoom>
        <Typography variant="h5" component="h1">
          Zakariyya Abdullahi
        </Typography>
      </Zoom>
      <h2 id="el"> 💻</h2>
      <Button variant="outlined">Download CV</Button>
      {/* <div className="contacts">
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
      </div> */}
    </Box>
    //  {/* </div> */}
  );
};

export default Header;
