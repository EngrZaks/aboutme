import styled from "styled-components";
export const Section = styled.div`
  width: 100%;
  /* display: flex; */
`;
export const Button = ({ text, onClick, style }) => (
  <button className="button" style={style} onClick={onClick}>
    {text}
  </button>
);

export const trans = (el, n) => {
  setTimeout(() => {
    document.querySelector(`.${el}`).style.opacity = n;
  }, 1);
};
export const scroll = () => {
  window.scroll({ top: 500, left: 0, behavior: "smooth" });
};

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(32, 26, 24)",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
