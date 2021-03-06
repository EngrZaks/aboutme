import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import RouteContainer from "./components/routes";
import { Button } from "./components/helpers";
import { MdBrightness6 } from "react-icons/md";
import Typing from "../node_modules/typing-animate/typing";

function App() {
   useEffect(() => {
      const image = document.querySelector(".details img");
      const el = document.getElementById("el");
      console.log(el);
      const string = "Full stack JavaScript Developer";
      if (!el.textContent) {
         new Typing({
            element: el,
            text: string,
            // hideClass: el,
            typingDelay: 200,
         }).run();
      }
      setTimeout(() => {
         image.style.transform = "translateY(0) scale(1)";
      }, 200);
   });

   const dark = {
      background: "black",
      color: "white",
   };
   const white = {
      background: "white",
      color: "black",
   };
   const [theme, setTheme] = useState(dark);
   const changeTheme = (e) => {
      e.preventDefault();
      theme.background === "black" ? setTheme(white) : setTheme(dark);
   };
   return (
      <div className='App' style={theme}>
         <Button
            className='themebtn'
            onClick={changeTheme}
            text={<MdBrightness6 />}
         />
         <Header />
         <RouteContainer />
      </div>
   );
}

export default App;
