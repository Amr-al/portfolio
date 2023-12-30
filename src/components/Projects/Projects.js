import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

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
      <div className="text-white text-5xl font-semibold font-serif text-center pt-9 mb-32">
        PROJECTS
      </div>
      <div className="px-7">
        <Carousel
          responsive={responsive}
          swipeable={true}
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
          <div className="bg-white h-[75%] m-2 flex flex-col rounded-lg">
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <div>
              <Link to={`/`}>
                View details
              </Link>
              <ImArrowUpRight2 />
            </div>
          </div>
          <div className="bg-white h-[75%] m-2 flex flex-col rounded-lg">
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961877/bt_zzlk6o.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <button
              type="button"
              class="font-bold text-xl bg-gradient-to-r from-cyan-600 to-indigo-800 hover:from-pink-900 hover:to-yellow-500  text-white rounded-xl px-2 py-2 m-auto w-[50%] transition-all duration-500"
            >
              show
            </button>
          </div>
          <div className="bg-white h-[75%] m-2 flex flex-col rounded-lg">
            <img
              src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703961560/Screenshot_2023-12-30_203640_qewhot.png"
              className="w-[100%] h-[80%] rounded-3xl"
            />
            <button
              type="button"
              class="font-bold text-xl bg-gradient-to-r from-cyan-600 to-indigo-800 hover:from-pink-900 hover:to-yellow-500  text-white rounded-xl px-2 py-2 m-auto w-[50%] transition-all duration-500"
            >
              show
            </button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
