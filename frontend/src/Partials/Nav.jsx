import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    return (
    <>
        <nav className="navbar position-absolute navbar-expand-lg bg-body-tertiary nav-bar-backgroud">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/6XMj7s2/js-logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
                    <span className='mx-2 h4 position-relative' style={{top:'9.5px'}}>Murn Stack</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/students'}>Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/auth/register'}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/auth/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <Outlet/>
    </>
    )
}

export default Nav

