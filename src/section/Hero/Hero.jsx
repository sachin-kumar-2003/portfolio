import styles from "./Hero.module.css";
import heroImg from "../../assets/myimage.jpg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import resume from '../../assets/myresume.pdf'
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="profile-picture" className={styles.hero} />
      </div>
      <div className={styles.info}>
        <h1>Sachin Kumar</h1>
        <h2>Front-end Developer</h2>
        <span>
          {/* <a href="http://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twiiter" />
          </a> */}
          <a href="https://www.linkedin.com/in/sachin-kumar215/" target="_blank">
            <img src={linkedinIcon} alt="Linkdin" />
          </a>
          <a href="https://github.com/goputen" target="_blank">
            <img src={githubIcon} alt="Git-hub" />
          </a>
        </span>
        <p className={styles.discription}>
          with a passion developing modern React web app for comercial buisness.
        </p>
        <a href={resume} download>
          <button className={styles.hover}>Get My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
