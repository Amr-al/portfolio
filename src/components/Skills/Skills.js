import React, { useEffect } from "react";
import { styles } from "./skillsStyle";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 0,
    });
  }, []);
  return (
    <div className={styles.container} id="skills">
      <h1 className={styles.header}> Skills & Experience</h1>
      <h1 className={styles.description}>
        As a full stack developer, I specialize in building dynamic and scalable
        websites using the latest technologies like React.js, Node.js, Express,
        MongoDB, and ORM tools. With a strong foundation in both front end and
        back end development
      </h1>
      <div className={styles.imgsContainer} data-aos="fade-left" >
        <div className={styles.cardContainer}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>React Js</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Node Js</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Express Js</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1704031809/mongodb_1_i5gffq.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}> MongoDB </h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>PostgreSQL</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Socket.io</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Bootstrap</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Typescript</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://community.pinterest.biz/t5/image/serverpage/image-id/414iC360BC91231556A1/image-size/large/is-moderation-mode/true?v=v2&px=999"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Tailwind</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>GitHub</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://e7.pngegg.com/pngimages/629/262/png-clipart-node-js-object-relational-mapping-javascript-microsoft-sql-server-postgresql-column-blue-angle-thumbnail.png"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>ORM</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src="https://p7.hiclipart.com/preview/827/1021/173/2017-acm-international-collegiate-programming-contest-competitive-programming-kateb-university-association-for-computing-machinery-acm-icpc-dhaka-site-others.jpg"
            className={styles.singleImage}
          />
          <h1 className={styles.name}>Problem Solving</h1>
        </div>
      </div>
    </div>
  );
}
