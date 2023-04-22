import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ShowStudent() {
    const {id} = useParams();
    const [inputs,setInputs]=useState({name:'',email:''});

    useEffect(()=>{
        axios.get("http://localhost:8081/students/read/"+id)
        .then(res=>{
            console.log(res)
            setInputs({...inputs,name:res.data[0].name,email:res.data[0].email});
        }).catch(err=>console.log(err))
    },[])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-light rounded p-3'>
                <div className="card">
                    <div className='card-head d-flex justify-content-between p-3' >
                        <span className='h3'>Show Student</span>
                        <Link to={'/students'} className='btn btn-dark text-light'><b>Go Back</b></Link>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <h4 className="card-title">Name : {inputs.name}</h4>
                        <p className="card-text">Email : {inputs.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowStudent
