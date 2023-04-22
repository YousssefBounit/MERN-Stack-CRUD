import React, { useEffect, useState } from 'react'
import { projectData } from '../assets/data'
import ProjectCard from '../Partials/ProjectCard'
import axios from 'axios';
import { useAuthContext } from '../Context/AuthContext';

function Projects() {
  const {setAuth,auth} = useAuthContext();
  const [message,setMessage] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get("http://localhost:8081")
    .then(res => {
        if(res.data.Status === "Success"){
          setAuth(true);
        }else{
          setAuth(false);
          setMessage(res.data.Error);
        }
    })
    .then(err => console.log(err))
  },[])

  return (
    <div className="container-fluid vh-100 projects-container">
        <div className="row cards-row">
          {
            auth ?
            <>
              {projectData.map((elem,index)=>{
                  return <ProjectCard key={index} data={elem}/>
              })}
              </>         
            :
            <div>
              <p>{message}</p>
              <h3>Plz login</h3>
            </div>
          }
            
        </div>
    </div>
  )
}

export default Projects
