import styled from "styled-components";
export const Section = styled.div`
   width: 100%;
   /* display: flex; */
`;
export const Button = ({ text, onClick, style }) => (
   <button className='button' style={style} onClick={onClick}>
      {text}
   </button>
);

export const trans = (el) => {
   document.querySelector(`.${el}`).style.opacity = 1;
};
export const scroll = () => {
   window.scroll({ top: 500, left: 0, behavior: "smooth" });
};
