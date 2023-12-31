import React, { useEffect } from "react";
import { styles } from "./aboutStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 0,
    });
  }, []);
  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.imageContainer} data-aos="fade-right">
        <img
          src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703945042/4_6_cyf3ad.jpg"
          className={styles.image}
        />
        <div
          className={styles.border}
          style={{ borderWidth: "1rem", overflow: "hidden" }}
        ></div>
      </div>
      <div className={styles.textContainer} data-aos="fade-left">
        <h1 className={styles.aboutHeader}>ABOUT ME</h1>
        <h1 className={styles.aboutBody}>
          I am a highly skilled full stack developer with a demonstrated history
          of successfully delivering scalable and high-performance web
          applications. I am deeply passionate about continuously updating my
          knowledge and expertise in the latest technologies and best practices
          within the field. In addition to my experience as a freelancer, I have
          also worked as a software engineer, further enhancing my proficiency
          in this domain.
        </h1>
        <div className={styles.btnsContainer}>
          <Link to="contact" smooth={true} offset={10} duration={1000}>
            <button type="button" className={styles.hireBtn}>
              Hire me
            </button>
          </Link>
          <button
            type="button"
            class={styles.resumeBtn}
            onClick={() => {
              window.location =
                "https://drive.google.com/file/d/1kLa83saZ2qJ21DcbDCWFr50TjfKiIQQp/view?usp=sharing";
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
