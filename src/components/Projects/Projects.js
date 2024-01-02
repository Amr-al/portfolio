import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { styles } from "./projectStyles";
import { projectStyle } from "../eachProject/projectStyles";

export default function Projects() {
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
    <div className="h-screen bg-slate-900" id="projects">
      <div className={styles.header}>PROJECTS</div>
      <div className="px-7">
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={false}
          draggable={false}
        >
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className={projectStyle.cardContainer}>
              <Link to={`/`}>View details</Link>
              <ImArrowUpRight2 />
            </div>
          </div>
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961877/bt_zzlk6o.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className={projectStyle.cardContainer}>
              <Link to={`/`}>View details</Link>
              <ImArrowUpRight2 />
            </div>
          </div>
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className={projectStyle.cardContainer}>
              <Link to={`/`}>View details</Link>
              <ImArrowUpRight2 />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
