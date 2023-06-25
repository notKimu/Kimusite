import { cloneElement, useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "./App.module.css";
/**IMAGES */
import projects from "../files/json/projects.json";
import { FrontendDto } from "../files/json/dto";
import hatkid from "../files/img/hatkid.png";

function App() {
  const [frontendProjectContent, setFrontendProjectContent] = useState(
    <div className={styles.frontendContent}>
      <h2>Frontend projects</h2>
      <p>
        A collection of the frontend projects I made!<br /><br />
        I usually use react and TypeScript for my projects, 
        sometimes NextJS but I prefer to do everything on my own, 
        to know how it works -w-<br /><br />
        I am learning backend with NestJS so most of my projects are frontend, 
        check it out for yourself!
      </p>
    </div>
  );

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

  const handleFrontendContent = (content: JSX.Element) => {
    setFrontendProjectContent(cloneElement(content, { key: Date.now() }));
  };

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
        <h1 id="titles">Frontend</h1>
        <div className={styles.frontendViewer}>
          {frontendProjectContent}
          <div className={styles.frontendProjects}>
            {projects.frontend.map((item: FrontendDto) => {
              return (
                <img
                  src={item.imageUrl}
                  onClick={() =>
                    handleFrontendContent(
                      <div className={styles.frontendContent}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
