import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [values,setValues] = useState({
        email:"",password:""
    });

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    
    function handleChange(event){
        const {name,value} = event.target;
        setValues({...values,[name]:value});
    }
    function hnadleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8081/auth/login",values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/');
            }else{
                alert(res.data.Error); 
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div style={{width:'360px'}} className='bg-light rounded p-3'>
                <h2><b>Login-in</b></h2>
                <form onSubmit={hnadleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input onChange={handleChange} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} type="password" className="form-control" name="password" placeholder="Password" />
                    </div>

                    <hr/>

                    <span className='d-flex justify-content-center'>
                        <button type="submit" className="btn w-100 btn-success rounded-1">
                            <b>Log-in</b>
                        </button>
                    </span>    
                    <p>You are agreeing to our terms and conditions.</p>
                    <span className='d-flex justify-content-center'>
                        <Link to={"/auth/register"} style={{borderWidth: "2px",borderColor: "#D2D2D2"}} type="submit" className="btn btn-light w-100 rounded-1">
                            Create Account
                        </Link>
                    </span>            
                </form>
            </div>
        </div>
    )
}

export default Login
