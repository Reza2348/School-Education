import React from "react";
import styles from "./OurTestimonials.module.css";
import Img from "../../assets/img/Profile Container (1).png";
import Img1 from "../../assets/img/Profile Container.png";
import Img2 from "../../assets/img/Profile Container (2).png";

const testimonials = [
  {
    name: "Jennifer B",
    image: Img,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: false,
  },
  {
    name: "David K",
    image: Img1,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: false,
  },
  {
    name: "Emily L",
    image: Img2,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    active: false,
  },
];

const OurTestimonials = () => {
  return (
    <section className={styles.section}>
      <button className={styles.btn}>Their Happy Words 🤗</button>
      <h2 className={styles.titlee}>Our Testimonials</h2>
      <p className={styles.subtitle}>
        Our testimonials are heartfelt reflections of the nurturing environment
        we provide, where children flourish both academically and emotionally.
      </p>
      <div className={styles.grid}>
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} ${item.active ? styles.active : ""}`}
          >
            <div className={styles.content}>
              <img
                src={item.image}
                alt={item.name}
                className={`${styles.image} ${
                  item.active ? styles.activeImage : ""
                }`}
              />
              <h4 className={styles.name}>{item.name}</h4>
              <span className={styles.spa}>★ ★ ★ ★ ★</span>

              <p className={styles.title}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTestimonials;
