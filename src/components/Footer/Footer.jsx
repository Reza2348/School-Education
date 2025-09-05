import React from "react";
import styles from "./Footer.module.css";
import Img from "../../assets/img/shape-14.png";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <img src={Img} alt="logo" className={styles.logoImg} />
            <span className={styles.logoText}>
              Little<span className={styles.highlight}> Learners</span>
            </span>
          </div>
          <p className={styles.subtitle}>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MdEmail className={styles.icon} />
              <span>hello@littlelearners.com</span>
            </div>
            <div className={styles.contactItem}>
              <BsFillTelephoneFill className={styles.icon} />
              <span>+91 91813 23 2309</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Home</h3>
          <ul>
            <li>Features</li>
            <li>Our Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>About Us</h3>
          <ul>
            <li>Our Mission</li>
            <li>Our Vision</li>
            <li>Awards and Recognitions</li>
            <li>History</li>
            <li>Teachers</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Academics</h3>
          <ul>
            <li>Special Features</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Contact Us</h3>
          <ul>
            <li>Information</li>
            <li>Map & Direction</li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <div className={styles.policies}>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className={styles.socialIcons}>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
