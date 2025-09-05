import React from "react";
import styles from "./HeroSection.module.css";
import Img from "./../../assets/img/Image (1).png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <div className={styles.mainImage}>
          <img src={Img} alt="Kids" />
        </div>
      </div>

      <div className={styles.textContent}>
        <p className={styles.subtitle}>Welcome to Little Learners Academy</p>
        <h1 className={styles.title}>
          Where Young Minds Blossom and
          <span className={styles.highlight}> Dreams Take Flight.</span>
        </h1>
        <p className={styles.description}>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>+7000</p>
            <p className={styles.statLabel}>Students Passed Out</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>+37</p>
            <p className={styles.statLabel}>Awards & Recognitions</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>+15</p>
            <p className={styles.statLabel}>Experience Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
