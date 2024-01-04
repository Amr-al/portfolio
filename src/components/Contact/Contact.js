import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { styles } from "./contactStyle";
import Swal from "sweetalert2";

import Aos from "aos";
import "aos/dist/aos.css";
import { backendUrl } from "../url";
export default function () {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 0,
    });
  }, []);
  const handelSubmit = async () => {
    let res = await fetch(`${backendUrl}/message`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        email,
        message
      })
    });
    console.log(res.status);
    if(res.status == 200){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message sent",
        showConfirmButton: false,
        timer: 2000,
      });

    }else{
      res = await res.json()
      Swal.fire({
        position: "center",
        icon: "error",
        title: res,
        showConfirmButton: false,
        timer: 2000,
      });

    }
  };
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.leftSideContainer} data-aos="fade-right">
        <h1 className={styles.header}>GET IN TOUCH </h1>
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
          <h1 className={styles.description}> LinkedIn</h1>
        </Link>
        <Link
          onClick={() => {
            window.location = "https://github.com/Amr-al";
          }}
          className={styles.link}
        >
          <FaGithub className={styles.text} style={{ color: "white" }} />
          <h1 className={styles.description}> Github</h1>
        </Link>
      </div>
      <div className={styles.rightSideContainer} data-aos="fade-left">
        <input
          type="text"
          name="price"
          class={styles.input}
          maxLength={30}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          class={styles.input}
          maxLength={30}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          rows={5}
          class={styles.textArea}
          placeholder="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="button" class={styles.btn} onClick={handelSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}
