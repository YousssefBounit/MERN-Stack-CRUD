import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateStudent() {
    const [inputs,setInputs]=useState({name:'',email:''});
    const navigate = useNavigate();
    
    function handleChnage(event){
        const {name,value} = event.target
        setInputs({...inputs,[name]:value})
    }
     
    function handleSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:8081/students/create",inputs)
        .then(res=>{
            console.log(res)
            navigate('/students')
        }).catch(err=>console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-light rounded p-3'>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className='d-flex justify-content-between'>
                        <span className='h3'><b>Add Student</b></span>
                        <Link to={'/students'} className='btn btn-dark text-light'><b>Go Back</b></Link>
                    </div>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Enter Name' className='form-control' onChange={(event)=>handleChnage(event)}/>
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Enter Email' className='form-control' onChange={(event)=>handleChnage(event)}/>
                    </div>
                    <button className="btn btn-success"><b>Add +</b></button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent
