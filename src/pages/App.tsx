import { useEffect } from "react";
import Nav from "../components/Nav";
import styles from "./App.module.css";
/**IMAGES */
import hatkid from "../files/img/hatkid.png";

function App() {
  useEffect(() => {
    const parallaxItems = document.querySelectorAll(
      `.${styles.parallax}`
    ) as NodeListOf<HTMLElement>;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      parallaxItems.forEach((item) => {
        if (item) {
          item.style.transform = `translateY(${scrollPosition * -0.3}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav />

      <div className={`${styles.fullSection} ${styles.minecraftBg}`}>
        <div className={styles.presentationCharacter}>
          <img className={styles.parallax} src={hatkid} alt="Character" />
        </div>

        <div className={styles.presentationAbout}>
          <h1>Kimu</h1>
          <h3>La dev pendeja</h3>
        </div>
      </div>

      {/**Second div */}
      <div className={`${styles.fullSection} ${styles.frontend}`}>
        <h1>Frontend</h1>
      </div>
    </>
  );
}

export default App;
