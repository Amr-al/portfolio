import React from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { styles } from "./contactStyle";

export default function () {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftSideContainer}>
        <h1 className={styles.header}>Get in touch</h1>
        <h1 className={styles.secondHeader}>Get in touch with me on:</h1>
        <Link
          target="_wp"
          to="https://wa.me/+201024792084"
          className={styles.link}
        >
          <FaWhatsapp className={styles.text} style={{ color: "white" }} />
          <h1 className={styles.description}> +201024792084</h1>
        </Link>

        <Link
          onClick={() => {
            window.location =
              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=amrmohamed09@gmail.com";
          }}
          className={styles.link}
        >
          <BiLogoGmail className={styles.text} style={{ color: "white" }} />
          <h1 className={styles.description}> amrmohamed09@gmail.com</h1>
        </Link>
        <Link
          onClick={() => {
            window.location =
              "https://www.linkedin.com/in/amr-mohamed-356414211/";
          }}
          className={styles.link}
        >
          <FaLinkedin className={styles.text} style={{ color: "white" }} />
          <h1 className={styles.description}> Amr Mohamed</h1>
        </Link>
      </div>
      <div className={styles.rightSideContainer}>
        <input
          type="text"
          name="price"
          class={styles.input}
          maxLength={30}
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          class={styles.input}
          maxLength={30}
          placeholder="Email"
        />
        <textarea rows={5} class={styles.textArea} placeholder="Email" />
        <button type="button" class={styles.btn}>
          Send
        </button>
      </div>
    </div>
  );
}
