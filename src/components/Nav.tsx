import { useEffect, useState } from "react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import styles from "./Nav.module.css";
import { ScrollingNav } from "../utils/ScrollingNav";
import logo from "../files/img/kimu-logo.png";

export default function Nav() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const allTitles = document.querySelectorAll('#navTitles');

      allTitles.forEach(t => t.classList.remove('hide'));
      if (currentPosition >= window.innerHeight - 30 && currentPosition <= (window.innerHeight * 2) - 30) {
        setDisplayText(ScrollingNav.firstOne.titleContent);
        allTitles[0].classList.add('hide');
      } else if (currentPosition >= (window.innerHeight * 2) - 30 && currentPosition <= (window.innerHeight * 3) - 30) {
        setDisplayText(ScrollingNav.secondOne.titleContent);
        document.getElementById("titles")?.classList.remove("hide");
        allTitles[1].classList.add('hide');
      } else if (currentPosition >= (window.innerHeight * 3) - 30) {
        setDisplayText(ScrollingNav.thirdOne.titleContent);
      }
      else {
        setDisplayText("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayText]);

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

      {displayText && <div key={displayText} className={styles.popup}>
        <h1>{displayText}</h1>
      </div>}
    </div>
  );
}
