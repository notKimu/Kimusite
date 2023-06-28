import { cloneElement, useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "./AppStyles/index";
/**IMAGES */
import projects from "../files/json/projects.json";
import { frontendDefault, backendDefault, BackendBuilder } from "./AppUtils/projectDefaults";
import { backendScrollPosition } from "./AppUtils/backendScroll";
import { FrontendDto } from "../files/json/dto";
import hatkid from "../files/img/hatkid.png";

function App() {
  const [frontendProjectContent, setFrontendProjectContent] = useState(frontendDefault);
  const [backendProjectContent, setBackendProjectContent] = useState(backendDefault);

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

  const handleBackendSelection = (index: number) => {
    const backendDiv = document.getElementById("backendScroller");
    if (!backendDiv) return;

    let translation = backendScrollPosition[index];

    backendDiv.style.transform = `translateY(${translation})`;
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

      {/**Frontend */}
      <div className={`${styles.fullSection} ${styles.frontend}`}>
        <h1 id="navTitles">Frontend</h1>
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

      {/**Backend */}
      <div className={`${styles.fullSection} ${styles.backend}`}>
        <h1 id="navTitles">Backend</h1>
        <div className={styles.backendSelector}>
          <div className={styles.backendSelectorOpacity} />
          <div id="backendScroller" className={styles.backendOptions}>
            {projects.backend.map((item, index) => {
              return (
                <p onClick={() => {
                  handleBackendSelection(index);
                  setBackendProjectContent(cloneElement(new BackendBuilder(item.name, item.description).card(), { key: Date.now() }))}}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>

        {backendProjectContent}
      </div>
    </>
  );
}

export default App;
