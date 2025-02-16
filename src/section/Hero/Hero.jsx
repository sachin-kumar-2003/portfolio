import styles from "./Hero.module.css";
import heroImg from "../../assets/myimage.jpg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import resume from "../../assets/myresume.pdf";
import { FaArrowDown, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="hero" className={styles.container}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            color: {
              value: "#facc15",
            },
            links: {
              color: "#facc15",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={heroImg}
          alt="profile-picture"
          className={styles.heroImg}
          whileHover={{ scale: 1.1 }}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Sachin Kumar</h1>
          <h2 className={styles.role}>
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "React Enthusiast",
                  "UI/UX Lover",
                  "JavaScript Expert",
                  "Passionate Coder"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className={styles.description}>
            Crafting immersive web experiences with cutting-edge technologies. Passionate about creating dynamic, responsive, and user-friendly applications.
          </p>
          <p className={styles.tagline}>
            Let's build something amazing together!
          </p>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/sachin-kumar215/" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={linkedinIcon}
                alt="LinkedIn"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a href="https://github.com/sachin-kumar-2003" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={githubIcon}
                alt="GitHub"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a href="https://leetcode.com/sachin-kumar-2003/" target="_blank" rel="noopener noreferrer">
              <motion.div className={styles.leetcodeLink} whileHover={{ scale: 1.2 }}>
                <SiLeetcode className={styles.leetcodeIcon} />
              </motion.div>
            </a>
          </div>
          <div className={styles.buttonGroup}>
            <a href={resume} download>
              <motion.button
                className={styles.resumeBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get My Resume
                <FaArrowDown className={styles.downloadIcon} />
              </motion.button>
            </a>
            <motion.button
              className={styles.contactBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <FaEnvelope className={styles.contactIcon} />
            </motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
