import ProjectCard from './card/ProjectCard'
import viberr from '../../assets/mitlogo.png'
import styles from './Project.module.css'
import moviescreenshot from '../../assets/moviescreenshot.png'
function Project() {
  return (
<section className={styles.container}>
  <h1 className={styles.projecttitle}>Project</h1>
  <div className={styles.projectContainer}>
   <ProjectCard viberr={viberr} h3="Paper Website" p="full-stack project ( currently working...)" link="http://mitpaperdown.rf.gd/MIT/login.php/"></ProjectCard>
  </div>
</section>
  )
}

export default Project