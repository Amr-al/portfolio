import React from "react";
import { homeStyle } from "./HomeStyles";

export default function Home() {
  return (
    <div className={homeStyle.homeContainer} id="home">
      <h1 className={homeStyle.name}>HI, I AM AMR MOHAMED</h1>
      <h1 className={homeStyle.title} >A Full Stack Developer focused Web Developer building Websites and Web Applications that leads to the success of the overall product</h1>

      <button type="button" className={homeStyle.btn}>
        Preview Projects
      </button>
    </div>
  );
}
