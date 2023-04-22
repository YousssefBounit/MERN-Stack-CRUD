import React from 'react'
import { studentIcon } from '../assets/icons'
import { Link } from 'react-router-dom'

function ProjectCard({data}) {
    return (
            <Link to={data.link} className="col-md-3 my-3 mx-5 project-card-link p-0">
                <div className="card radius-10 border-start border-0 border-3 border-info">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className='w-100'>
                                <span className='d-flex justify-content-between'>
                                    <span>
                                        <p className="mb-0 text-secondary">Project Number : {data.id}</p>
                                        <h4 className="my-1 text-info"><b>{data.title}</b></h4>
                                    </span> 
                                    <div className={`widgets-icons-2 rounded-circle ${data.iconStyle} text-white ms-auto`}>
                                        {studentIcon}
                                    </div>
                                </span>                                                     
                                <h6 className="mb-0 font-13"><b>Description :</b></h6>
                                <p className="mb-0 ms-2 font-13">{data.desc}</p>
                                <h6 className="mb-0 font-13"><b>Actions :</b></h6>
                                <ul>
                                    {data.actions.map((elem,index)=>{
                                        return <li key={index}>{elem.name} .</li>
                                    })}
                                </ul>
                                <h6 className="mb-0 font-13"><b>{data.infosTitle} :</b></h6>
                                <p className="mb-0 ms-2 font-13">{data.infos}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default ProjectCard
