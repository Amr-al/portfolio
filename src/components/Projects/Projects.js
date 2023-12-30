import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { styles } from "./projectStyles";

export default function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div className="h-screen bg-slate-900">
      <div className={styles.header}>
        PROJECTS
      </div>
      <div className="px-7">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className="flex flex-row underline justify-center items-center h-[100%] font-serif font-semibold">
              <Link to={`/`}>
                View details
              </Link>
              <ImArrowUpRight2 />
            </div>
          </div>
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961877/bt_zzlk6o.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className="flex flex-row underline justify-center items-center h-[100%] font-serif font-semibold">
              <Link to={`/`}>
                View details
              </Link>
              <ImArrowUpRight2 />
            </div>
          </div>
          <div className={styles.imgStyle}>
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div className="flex flex-row underline justify-center items-center h-[100%] font-serif font-semibold">
              <Link to={`/`}>
                View details
              </Link>
              <ImArrowUpRight2 />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
