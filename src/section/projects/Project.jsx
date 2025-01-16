import ProjectCard from './card/ProjectCard'
import viberr from '../../assets/mitlogo.png'
import styles from './Project.module.css'
import bubbleSortImage from '../../assets/bubbleSort.png'
function Project() {
  return (
<section className={styles.container}>
  <h1 className={styles.projecttitle}>Project</h1>
  <div className={styles.projectContainer}>
   <ProjectCard viberr={viberr} h3="Paper Website" p="full-stack project ( currently working...)" link="http://mitpaperdown.rf.gd/MIT/login.php/"></ProjectCard>
   <ProjectCard viberr={bubbleSortImage} h3="Bubble Sort " p="Visualization" link="https://sachin-kumar-2003.github.io/BubbleSort_Visualization/"></ProjectCard>
  </div>
</section>
  )
}

export default Project