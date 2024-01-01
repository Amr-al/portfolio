import React from "react";
import { styles } from "./NavStyles";
import { Link } from "react-scroll";
export default function Nav() {
  return (
    <div >
    <ul className={styles.container}>
    <li className="md:min-w-11"></li>

      <li className={styles.links}>
        <Link to="about" smooth={true} offset={10} duration={1000}>
          About
        </Link>
      </li>
      <li className={styles.links}>
        {" "}
        <Link to="projects" smooth={true} offset={10} duration={1000}>
          Projects
        </Link>
      </li>
      <li className={styles.links}>
        <Link to="skills" smooth={true} offset={10} duration={1000}>
          Skills
        </Link>
      </li>
      <li>
        <button
          type="button"
          class={styles.contact}
          onClick={() => {
            window.location =
              "https://drive.google.com/file/d/1kLa83saZ2qJ21DcbDCWFr50TjfKiIQQp/view?usp=sharing";
          }}
        >
          Resume
        </button>
      </li>
      <li className="md:min-w-11"></li>
    </ul>
    </div>
  );
}
