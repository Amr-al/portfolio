import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { styles } from "./projectStyles";
import { projectStyle } from "../eachProject/projectStyles";
import { backendUrl } from "../url";

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
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`${backendUrl}/projects`);
      let result = await res.json();
      if (res.status == 200) setData(result);
      console.log(res);
    };
    getData();
  }, []);
  return (
    <div className="h-screen bg-slate-900" id="projects">
      <div className={styles.header}>PROJECTS</div>
      {data && (
        <div className="px-7">
          <Carousel responsive={responsive} infinite={true}>
            {data?.map((project, key) => {
              console.log(key);
              return (
                <div className={styles.imgStyle} key={key}>
                  <img
                    src={project.mainImage}
                    className="w-[100%] h-auto rounded-3xl m-auto h-"
                  />
                  <div className={styles.cardContainer}>
                    <Link to={`/project/${project.id}`}>{project.name}</Link>
                    <ImArrowUpRight2 style={{ paddingBottom: "2px" }} />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
}
