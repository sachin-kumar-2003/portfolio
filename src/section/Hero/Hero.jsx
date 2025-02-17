import React from "react";
import styles from "./Hero.module.css";
import resume from "../../assets/myresume.pdf";
import heroImg from "../../assets/myimage.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            I'm <span className={styles.name}>Sachin Kumar</span>
          </h1>
          <h2>A MERN Stack Developer</h2>
          <p>
            Crafting immersive and high-performance web experiences with MongoDB, 
            Express, React, and Node.js. Swinging through the digital universe 
            one web app at a time!
          </p>
          <div className={styles.buttons}>
            <a href={resume} download className={styles.btn}>
              Download Resume
            </a>
            <a href="#projects" className={styles.btnOutline}>
              View Projects
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={heroImg} 
            alt="Sachin Kumar" 
            className={styles.heroImg} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
