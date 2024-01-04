import React, { useEffect, useState } from "react";
import { styles } from "./skillsStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import { backendUrl } from "../url";
export default function Skills() {
  const [data, setData] = useState();
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 0,
    });
    const getData = async () => {
      let res = await fetch(`${backendUrl}/skills`);
      res = await res.json();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div className={styles.container} id="skills">
      <h1 className={styles.header}> SKILLS & EXPERIENCE</h1>
      <h1 className={styles.description}>
        As a full stack developer, I specialize in building dynamic and scalable
        websites using the latest technologies like React.js, Node.js, Express,
        MongoDB, and ORM tools. With a strong foundation in both front end and
        back end development
      </h1>
      <div className={styles.imgsContainer} data-aos="fade-left">
        {data?.map((skill, key) => {
          return <div className={styles.cardContainer} key={key}>
            <img src={skill.image} className={styles.singleImage} />
            <h1 className={styles.name}>{skill.name}</h1>
          </div>;
        })}
      </div>
    </div>
  );
}
