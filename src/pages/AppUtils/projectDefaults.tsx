import styles from '../AppStyles/index';

export const frontendDefault = (
  <div className={styles.frontendContent}>
    <h2>Frontend projects</h2>
    <p>
      A collection of the frontend projects I made!
      <br />
      <br />
      I usually use react and TypeScript for my projects, sometimes NextJS but I
      prefer to do everything on my own, to know how it works -w-
      <br />
      <br />
      I am learning backend with NestJS so most of my projects are
      frontend, check it out for yourself!
    </p>
  </div>
);

export const backendDefault = (
  <div className={styles.backendContent}>
    <h2>Backend projects</h2>
    <p>
      Some of the backend projects I am working on.
      <br />
      <br />
      I am still learning backend, it's not my specialty but I am
      trying my best to master it, very hard though.
      <br />
      <br />
      I used express to make APIs in the beginning but it was so
      junky, now I moved to NestJS and looks very promising
      <br />
      My favourite combo is Prisma and Docker to build databases.
    </p>

    <div className={styles.backendFrame} />
    <div className={styles.backendBottom}>Backend Projects 001 ///</div>
  </div>
);

export class BackendBuilder { 
  public constructor(private title: string, private description: string) {}
  
  card() {
    return (
      <div className={styles.backendContent}>
      <h2>{this.title}</h2>
      <p>{this.description}</p>
  
      <div className={styles.backendFrame} />
      <div className={styles.backendBottom}>Backend Projects 001 ///</div>
    </div>
    )
  }
} 
