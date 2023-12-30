import React from "react";
import { styles } from "./NavStyles";
export default function Nav() {
  return (
    <ul className={styles.container}>
      <li className={styles.links}>Home</li>
      <li className={styles.links}>About</li>
      <li className={styles.links}>Projects</li>
      <li>
        <button type="button"  className={styles.contact}>
          Contact
        </button>
      </li>
    </ul>
  );
}
