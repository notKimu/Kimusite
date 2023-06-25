import React, { useEffect, useState } from "react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import styles from "./Nav.module.css";
import logo from "../files/img/kimu-logo.png";

export default function Nav() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition >= window.innerHeight - 30) {
        setDisplayText("Frontend");
        document.getElementById("titles")?.classList.add("hide");
      } else {
        setDisplayText("");
        document.getElementById("titles")?.classList.remove("hide");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.navItems}>
        <img className={styles.logo} src={logo} />

        <div className={styles.icons}>
          <BsDiscord className={styles.icon} />
          <BsGithub className={styles.icon} />
          <BsTwitter className={styles.icon} />
        </div>
      </div>

      {displayText && <div className={styles.popup}>
        <h1>{displayText}</h1>
      </div>}
    </div>
  );
}
