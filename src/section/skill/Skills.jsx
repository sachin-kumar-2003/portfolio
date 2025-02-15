import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import styles from "./Skills.module.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className={styles.htmlIcon} /> },
  { name: "CSS", icon: <FaCss3Alt className={styles.cssIcon} /> },
  { name: "JavaScript", icon: <FaJs className={styles.jsIcon} /> },
  { name: "PHP", icon: <FaPhp className={styles.phpIcon} /> },
  { name: "React.js", icon: <FaReact className={styles.reactIcon} /> },
  { name: "Bootstrap", icon: <FaBootstrap className={styles.bootstrapIcon} /> },
  { name: "Git", icon: <FaGitAlt className={styles.gitIcon} /> },
];

function Skills() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
