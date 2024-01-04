import React, { useEffect, useState } from "react";
import { homeStyle } from "../Home/HomeStyles";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styles } from "../Projects/projectStyles";
import { projectStyle } from "./projectStyles";
import { useNavigate, useParams } from "react-router-dom";
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
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const id = useParams().id;
  useEffect(() => {
    let getData = async () => {
      let res = await fetch(`http://127.0.0.1:5000/projects/${1}`);
      res = await res.json();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div className="h-fit">
      <div
        className={`${homeStyle.homeContainer} md:pt-10 md:pb-32 min-h-screen `}
        id="home"
      >
        <h1 className={homeStyle.name}>{data?.name}</h1>
        <h1 className={`${homeStyle.title} w-[80%] md:text-2xl `}>
          This page contains the case study of Dopefolio Open-Source Project
          which includes the Project Overview, Tools Used and Live Links to the
          official product.
        </h1>
        <Link
          to={"/"}
          onClick={() => (window.location = data?.link || data?.demo)}
          smooth={true}
          duration={1000}
        >
          <button type="button" className={homeStyle.btn}>
            Preview Projects
          </button>
        </Link>
      </div>

      <div className={projectStyle.carouselContainer}>
        {data && (
          <div className="h-80 m-auto w-[85%]">
            <Carousel
              responsive={responsive}
              infinite={false}
              draggable={false}
            >
              {data?.image?.map((img, key) => {
                return (
                  <div className={`${styles.imgStyle}`} key={key}>
                    <img src={img} className="w-[100%] min-h-full m-auto" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
        <h1 className={projectStyle.title}>PROJECT OVERVIEW</h1>
        {data &&
          data.description.map((desc, key) => {
            return (
              <h1 className={projectStyle.description} key={key}>
                {desc}
              </h1>
            );
          })}

        <h1 className={projectStyle.title}>Tools Used</h1>
        <div className={projectStyle.btnsContainer}>
          {data?.tools.map((tool, key) => {
            return (
              <button className={projectStyle.skill} key={key}>
                {" "}
                {tool.trim()}{" "}
              </button>
            );
          })}
        </div>
        <h1 className={projectStyle.seeLive}>See Live </h1>
        <div className={projectStyle.btnsContainer}>
          <button
            type="button"
            className={projectStyle.projectBtn}
            onClick={() =>
              (window.location = data?.github || data?.link || data?.demo)
            }
          >
            Project Link
          </button>

          <button
            type="button"
            className={projectStyle.goBack}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
