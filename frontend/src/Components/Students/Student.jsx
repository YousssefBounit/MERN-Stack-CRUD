import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Student() {
    const [students,setStudents] = useState([]);
    const [toggle,setToggle] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:8081/students")
        .then(res=>setStudents(res.data))
        .catch(err=>console.log(err));
    },[toggle])

    const handleDelete = async (id) =>{
        try{
            await axios.delete("http://localhost:8081/students/delete/"+id)
            setToggle(!toggle);
        }catch(err){
            console.log()
        }

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-light rounded p-3'>
                <Link to={'/students/create'} className='btn btn-success'><b>Add Student</b></Link>
                <div className='table-responsiv'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((elem,index)=>{
                                    return <tr key={index}>
                                        <td>{elem.id}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>
                                            <Link to={'/students/update/'+elem.id} type="button" className="btn btn-primary mx-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={(e)=>handleDelete(elem.id)}>Delete</button>
                                            <Link to={'/students/show/'+elem.id} type="button" className="btn btn-info mx-2">View</Link>
                                        </td>
                                    </tr>
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Student
