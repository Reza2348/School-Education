import React from "react";
import styles from "./OurBenefits.module.css";
import Icon1 from "./../../assets/icon/Icon Container.png";
import Icon2 from "./../../assets/icon/Icon Container (4).png";
import Icon3 from "./../../assets/icon/Icon Container (1).png";
import Icon4 from "./../../assets/icon/Icon Container (2).png";
import Icon5 from "./../../assets/icon/Icon Container (3).png";
import Icon6 from "./../../assets/icon/Icon Container (5).png";

const OurBenefits = () => {
  const benefits = [
    {
      icon: Icon1,
      title: "Holistic Learning Approach",
      desc: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      icon: Icon2,
      title: "Experienced Educators",
      desc: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      icon: Icon3,
      title: "Nurturing Environment",
      desc: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      icon: Icon4,
      title: "Play-Based Learning",
      desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      icon: Icon5,
      title: "Individualized Attention",
      desc: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      icon: Icon6,
      title: "Parent Involvement",
      desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];

  return (
    <section className={styles.section}>
      <button className={styles.btn}>Children Deserve Bright Future</button>
      <h2 className={styles.title}>Our Benefits</h2>
      <p className={styles.subtitle}>
        With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.
      </p>

      <div className={styles.grid}>
        {benefits.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;
