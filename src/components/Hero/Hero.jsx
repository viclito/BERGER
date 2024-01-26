import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Berger Perkins</h1>
        <p className={styles.description}>
          I'm a Machine learning enginer with 2 years of experience using Python , SQL , AWS , Gen AI and so on. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:perkinsberger@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/berger.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
