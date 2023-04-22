import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdateStudent() {
    const {id} = useParams();
    const [inputs,setInputs]=useState({name:'',email:''});
    const navigate = useNavigate();

    function handleChnage(event){
        const {name,value} = event.target
        setInputs({...inputs,[name]:value})
    }
    
    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:8081/students/update/"+id,inputs)
        .then(res=>{
            console.log(res)
            navigate('/')
        }).catch(err=>console.log(err))
    }
    
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
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className='d-flex justify-content-between'>
                        <span className='h3'><b>Edit Student</b></span>
                        <Link to={'/students'} className='btn btn-dark text-light'><b>Go Back</b></Link>
                    </div>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Enter Name' className='form-control' value={inputs.name} onChange={(event)=>handleChnage(event)}/>
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Enter Email' className='form-control' value={inputs.email} onChange={(event)=>handleChnage(event)}/>
                    </div>
                    <button className="btn btn-success"><b>Edit</b></button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
