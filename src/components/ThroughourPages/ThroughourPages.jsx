import React from "react";
import styles from "./ThroughourPages.module.css";
import Img from "./../../assets/img/Container.png";

const pages = [
  {
    title: "About Us",
    text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Extracurricular",
    text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces. ",
  },
];

const ThroughourPages = () => {
  return (
    <section className={styles.section}>
      <button className={styles.sectionBtn}>Explore More</button>
      <h2 className={styles.sectionTitle}>Navigate through our Pages</h2>
      <p className={styles.sectionSubtitle}>
        Your gateway to discovering a wealth of valuable information about our
        kindergarten school. Feel free to explore and learn more about the
        enriching experiences that await your child.
      </p>

      <div className={styles.cardsContainer}>
        {pages.map((page, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{page.title}</h3>
            <img src={Img} alt={page.title} className={styles.cardImage} />
            <p className={styles.cardText}>{page.text}</p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThroughourPages;
