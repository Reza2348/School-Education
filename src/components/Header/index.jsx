import React, { useState } from "react";
import styles from "./index.module.css";
import { HiMenu, HiX } from "react-icons/hi";
import Img from "./../../assets/img/shape-14.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about Us", label: "About Us" },
    { href: "#academics", label: "Academics" },
    { href: "#admissions", label: "Admissions" },
    { href: "#student Life", label: "Student Life" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Img} alt="logo" className={styles.logoImg} />
          <span className={styles.logoText}>
            Little<span className={styles.highlight}>Learners</span>
          </span>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`${styles.navLink} ${
                activeLink === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuToggle}
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={`${styles.mobileLink} ${
                activeLink === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
