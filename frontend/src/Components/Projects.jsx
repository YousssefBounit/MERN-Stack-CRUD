import React from 'react'
import { projectData } from '../assets/data'
import ProjectCard from '../Partials/ProjectCard'

function Projects() {
  return (
    <div className="container-fluid vh-100 projects-container">
        <div className="row cards-row">
            {projectData.map((elem,index)=>{
                return <ProjectCard key={index} data={elem}/>
            })}
        </div>
    </div>
  )
}

export default Projects
