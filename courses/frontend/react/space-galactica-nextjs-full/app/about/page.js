
"use client";
import styles from "./AboutUsPage.module.css";
import { OurValues } from "./OurValues";
import { OurCrew } from "./OurCrew";
import { OurPartners } from "./OurPartners";


export default  function AboutUsPage ()  {
  return (
    <div className={styles.fullBGpicture}>
      <main className={styles.mainContent}>
        <h1>About us</h1>
        <section className={styles.card}>
          <OurValues />
        </section>

        <section className={styles.card}>
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className={styles.card}>
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};


