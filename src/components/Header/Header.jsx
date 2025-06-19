// Header.jsx
import React, { useState } from "react";

import styles from "./Header.module.css";
import { headerLinks } from "../../constants/constants";
import logo from "../../assets/logo.svg";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("/");

  return (
    <>
      {/* Desktop Header */}
      <div className={styles.headerDesktop}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="logo" />
        </div>

        <div className={styles.navLinks}>
          {headerLinks?.map((item) => (
            <div
              key={item.id}
              to={"#"}
              className={`${styles.link} ${
                selected === item.id ? styles.active : ""
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className={styles.rightIcons}>
          <span className={styles.iconPlaceholder}>I</span>
          <span className={styles.iconPlaceholder}>I</span>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.headerMobile}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="logo" />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileDropdown} ${toggle ? styles.open : ""}`}>
        <div className={styles.mobileLinks}>
          {headerLinks.map((item) => (
            <div
              key={item.id}
              to={item.link || "#"}
              className={`${styles.link} ${
                selected === item.id ? styles.active : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
