import React, { useEffect, useState } from "react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import styles from "./Nav.module.css";
import logo from "../files/img/kimu-logo.png";

export default function Nav() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      console.log(currentPosition);
      if (currentPosition >= window.innerHeight) {
        setDisplayText("Frontend");
      } else {
        setDisplayText("");
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

      {displayText.length > 0 && <div className={styles.popup}>
        <h1>{displayText}</h1>
      </div>}
    </div>
  );
}