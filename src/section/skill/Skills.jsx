import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillComponent from './SkillComponent'
function Skills() {
  return (
<section className={styles.container}>
  <h1>Skills</h1>
  <br />
<div className={styles.skillList}>
 <SkillComponent src={checkMarkIcon} p="HTML"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="CSS"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="JavaScript"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="PHP"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="React js"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="Bootstrap"></SkillComponent >
 <SkillComponent src={checkMarkIcon} p="Git"></SkillComponent >
</div>
</section>
  )
}

export default Skills