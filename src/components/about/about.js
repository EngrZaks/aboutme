import React, { useEffect } from "react";

import { trans } from "../helpers";
export default function About() {
   useEffect(() => {
      trans("about");
   });
   return (
      <div className='about'>
         <p className='heading'>About me</p>
         <div
            style={{
               fontSize: "1.2rem",
               maxWidth: "500px",
               textAlign: "left",
               margin: "0 auto",
               padding: "10px",
            }}>
            <p>
               I am an evolving, self-taught full stack web developer, who is
               passionate about building scalable and fast cloud solutions. I
               would love to form part of a formidable tech team that can help
               solve some of African problems creatively and innovatively.
            </p>
            <p>
               I am currently working on a web portal that shows physical
               properties of various agricultural products based on a database
               of researches that are been conducted from other studies as my
               undergraduate project at Ahmadu Bello University, Zaria Nigeria.
               I am also working on UI and performance improvement for Sindhi
               Dry Fruits (New Delhi, India.)
            </p>
            <p>
               I am open to opportunities, Jobs, collaboration or freelancing.
            </p>
            <p>
               Appart from coding and learning, I love to travel-even though
               I've not been able to travel much yet. When I take a time out, my
               favorite sport is football - I can play too ⚽. I like
               interesting documentaries, with my favorite being Air Crash
               Investigation ✈.
            </p>
            <a
               style={{
                  padding: "15px 5px",
                  color: "lime",
                  marginTop: "20px",
                  fontWeight: "bold",
               }}
               href='https://drive.google.com/file/d/136nhlywrYqm35i3btbFJ6BVm2pklZznY/view?usp=sharing'>
               My Resume
            </a>
         </div>
      </div>
   );
}
