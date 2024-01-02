import React from "react";
import { homeStyle } from "../Home/HomeStyles";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImArrowUpRight2 } from "react-icons/im";
import { styles } from "../Projects/projectStyles";
import { projectStyle } from "./projectStyles";
export default function Project() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="h-fit">
      <div className={`${homeStyle.homeContainer} md:pt-10 md:pb-32`} id="home">
        <h1 className={homeStyle.name}>HI, I AM AMR MOHAMED</h1>
        <h1 className={`${homeStyle.title} w-[80%] md:text-2xl `}>
          This page contains the case study of Dopefolio Open-Source Project
          which includes the Project Overview, Tools Used and Live Links to the
          official product.
        </h1>
        <Link to="projects" smooth={true} duration={1000}>
          <button type="button" className={homeStyle.btn}>
            Preview Projects
          </button>
        </Link>
      </div>
      <div className={projectStyle.carouselContainer}>
        <div className="h-80 m-auto w-[85%]">
          <Carousel responsive={responsive} infinite={false} draggable={false}>
            <div className={`${styles.imgStyle} bg-none`}>
              <img
                src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
                className="w-[100%] h-[auto] rounded-3xl"
              />
            </div>
            <div className={styles.imgStyle}>
              <img
                src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961877/bt_zzlk6o.png"
                className="w-[100%] h-[80%] rounded-3xl"
              />
            </div>
            <div className={styles.imgStyle}>
              <img
                src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
                className="w-[100%] h-[80%] rounded-3xl"
              />
            </div>
            <div className={styles.imgStyle}>
              <img
                src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961877/bt_zzlk6o.png"
                className="w-[100%] h-[80%] rounded-3xl"
              />
            </div>
          </Carousel>
        </div>
        <h1 className={projectStyle.title}>PROJECT OVERVIEW</h1>
        <h1 className={projectStyle.description}>
          Dopefolio is an Open-Source project which is a simple and clean
          multi-page portfolio website template for developers. I created this
          project for developers to quickly build a good-looking and
          fast-performing multi-page portfolio without having to code their
          portfolio from scratch.
        </h1>
        <h1 className={projectStyle.title}>Tools Used</h1>
        <div className={projectStyle.btnsContainer}>
          <button className={projectStyle.skill}>CSS </button>
          <button className={projectStyle.skill}>CSS </button>
          <button className={projectStyle.skill}>CSS </button>
          <button className={projectStyle.skill}>CSS </button>
        </div>
        <h1 className={projectStyle.seeLive}>See Live </h1>
        <div className={projectStyle.btnsContainer}>
          <button type="button" className={projectStyle.projectBtn}>
            Project Link
          </button>
          <button type="button" className={projectStyle.goBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
