import React from 'react'

function ProjectCard({viberr,h3,p,link}) {
  return (
    <a href={link}>
    <img className="hover" src={viberr} alt="" />
    <h3>{h3}</h3>
    <p>{p}</p>
  </a>
  )
}

export default ProjectCard