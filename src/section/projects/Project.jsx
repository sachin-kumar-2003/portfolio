import ProjectCard from './card/ProjectCard'
import viberr from '../../assets/mitlogo.png'
import styles from './Project.module.css'
import bubbleSortImage from '../../assets/bubbleSort.png'
import numberPuzzleImage from '../../assets/numPuzzle.png'
import imdb from '../../assets/imdb.png'
function Project() {
  return (
<section className={styles.container}>
  <h1 className={styles.projecttitle}>Project</h1>
  <div className={styles.projectContainer}>
   <ProjectCard viberr={viberr} h3="Paper Website" p="(Currently working)" link="http://mitpaperdown.rf.gd/MIT/login.php/"></ProjectCard>
   <ProjectCard viberr={bubbleSortImage} h3="Bubble Sort " p="Visualization" link="https://sachin-kumar-2003.github.io/BubbleSort_Visualization/"></ProjectCard>
   <ProjectCard viberr={numberPuzzleImage} h3="Number Puzzle" p="Game" link="https://sachin-kumar-2003.github.io/NumberPuzzle/"></ProjectCard>
   <ProjectCard viberr={imdb} h3="IMDB Clone" p="Website" link="https://imdb-clone-one-rho.vercel.app/"></ProjectCard>
  </div>
</section>
  )
}

export default Project