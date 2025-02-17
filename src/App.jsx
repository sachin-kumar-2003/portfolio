import './App.css'
import Hero from "./section/Hero/Hero";
import Navbar from './section/navbar/Navbar';
import Project from './section/projects/Project'; 
import Skills from './section/skill/Skills';
function App(){
  console.log('test')
  return(
    <>
    <Navbar/>
<Hero></Hero>
<Project></Project>
<Skills></Skills>
    </>
  )
}
export default App;