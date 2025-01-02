import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import RouteContainer from "./components/routes";
// import Typing from "../node_modules/typing-animate/typing";

function App() {
  useEffect(() => {
    const image = document.querySelector(".details .image");
    const el = document.getElementById("el");
    console.log(el);
    // const string = " Full stack Developer";
    // if (el.textContent.trim().length < 3) {
    //   new Typing({
    //     element: el,
    //     text: string,
    //     // hideClass: el,
    //     typingDelay: 200,
    //   }).run();
    // }
    setTimeout(() => {
      image.style.transform = "translateY(0) scale(1)";
    }, 200);
  });

  const dark = {
    background: "black",
    color: "white",
  };
  //   const white = {
  //     background: "white",
  //     color: "black",
  //   };
  const defaultTheme = () => {
    let theme = dark;
    // let hour = new Date().getHours();
    // if (hour >= 8 && hour < 19) theme = white;
    return theme;
  };
  const [theme] = useState(defaultTheme());
  //   const changeTheme = (e) => {
  //     e.preventDefault();
  //     theme.background === "black" ? setTheme(white) : setTheme(dark);
  //   };
  return (
    <div className="App" style={theme}>
      {/* <Button
        className="themebtn"
        onClick={changeTheme}
        text={<MdBrightness6 />}
      /> */}
      <Header />
      <RouteContainer />
    </div>
  );
}

export default App;
