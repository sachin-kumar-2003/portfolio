import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/myimage.jpg";
import { SiLeetcode } from "react-icons/si";
import { FaArrowDown, FaEnvelope, FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import resume from "../../assets/myresume.pdf";

function Hero() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.dark);
      document.body.classList.remove(styles.light);
    } else {
      document.body.classList.add(styles.light);
      document.body.classList.remove(styles.dark);
    }
  }, [darkMode]);

  return (
    <section id="hero" className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <motion.div className={styles.heroContent} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        
        {/* Theme Toggle Button */}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {darkMode ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
        </button>

        {/* Spider-Man Vibe Profile Section */}
        <div className={styles.imageWrapper}>
          <div className={styles.spidermanFrame}>
            <img src={heroImg} alt="Profile" className={styles.heroImg} />
          </div>
        </div>

        <h1 className={styles.name}>Sachin Kumar</h1>
        <h2 className={styles.role}>
          <Typewriter
            options={{
              strings: ["Web Developer", "React Enthusiast", "UI/UX Lover"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className={styles.description}>Crafting immersive web experiences with modern technologies.</p>

        {/* Social Links with Comic-Book Style */}
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/sachin-kumar215/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`${styles.socialIcon} ${styles.linkedin}`} />
          </a>
          <a href="https://github.com/sachin-kumar-2003" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`${styles.socialIcon} ${styles.github}`} />
          </a>
          <a href="https://leetcode.com/sachin-kumar-2003/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className={`${styles.socialIcon} ${styles.leetcode}`} />
          </a>
        </div>

        <div className={styles.buttonGroup}>
          <a href={resume} download>
            <motion.button className={styles.resumeBtn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get My Resume <FaArrowDown />
            </motion.button>
          </a>
          <motion.button className={styles.contactBtn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Contact Me <FaEnvelope />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
