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
import image from "../../assets/Zaksnew.jpg";

// import PropTypes from "prop-types";

const Header = () => {
   return (
      <div className='details'>
         <img src={image} alt='myself' />
         <Zoom>
            <h1>Zakariyya Abdullahi</h1>
         </Zoom>
         <h3 id='el'> 💻</h3>
         <div className='contacts'>
            <a href='mailto:abzakariyya@gmail.com'>
               {" "}
               <AiOutlineMail />
            </a>{" "}
            <a href='tel:+2348023767822'>
               {" "}
               <AiOutlinePhone />
            </a>{" "}
            <a href='https://twitter.com/DevZaks'>
               {" "}
               <AiOutlineTwitter />
            </a>{" "}
            <a href='https://www.linkedin.com/in/zakariyya123'>
               {" "}
               <FaLinkedinIn />
            </a>{" "}
            <a href='https://github.com/EngrZaks'>
               {" "}
               <AiOutlineGithub />
            </a>
            <a href='https://drive.google.com/file/d/1J1Qb86-dJsJOCW7R5JtfiiqyMd5z_BUn/view?usp=sharing'>
               {" "}
               <AiOutlineDownload />
            </a>
         </div>
         <div className='mouse_scroll'>
            <div className='mouse'>
               <div className='wheel'></div>
            </div>
            <div>
               <span className='m_scroll_arrows unu'></span>
               <span className='m_scroll_arrows doi'></span>
               <span className='m_scroll_arrows trei'></span>
            </div>
         </div>
      </div>
   );
};

export default Header;
