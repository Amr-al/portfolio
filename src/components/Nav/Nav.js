import React from "react";
import { styles } from "./NavStyles";
import { Link } from "react-scroll";
export default function Nav() {
  return (
    <ul className={styles.container}>
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
        <Link to="contact" smooth={true} offset={10} duration={1000}>
          <button type="button" className={styles.contact}>
            Contact
          </button>
        </Link>
      </li>
    </ul>
  );
}
