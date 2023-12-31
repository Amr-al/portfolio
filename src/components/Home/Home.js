import React from "react";
import { homeStyle } from "./HomeStyles";

export default function Home() {
  return (
    <div className={homeStyle.homeContainer} id="home">
      <h1 className={homeStyle.name}>Hi, I am Amr Mohamed</h1>
      <h1 className={homeStyle.title}>Full Stack</h1>
      <h1 className={homeStyle.title}>Software</h1>
      <h1 className={homeStyle.title}>Developer</h1>
      <button type="button" className={homeStyle.btn}>
        Preview Projects
      </button>
    </div>
  );
}
