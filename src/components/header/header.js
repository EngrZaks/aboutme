import "./header.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
   AiOutlineDownload,
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
         <h1>Zakariyya Abdullahi</h1>
         <h3 id='el'></h3>
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
            <a href='https://www.facebook.com/AbZakariyya'>
               {" "}
               <FaFacebook />
            </a>{" "}
            <a href='https://www.instagram.com/engr.zaks'>
               {" "}
               <FaInstagram />
            </a>
            <a href='https://drive.google.com/file/d/136nhlywrYqm35i3btbFJ6BVm2pklZznY/view?usp=sharing'>
               {" "}
               <AiOutlineDownload />
            </a>
         </div>
      </div>
   );
};

export default Header;
