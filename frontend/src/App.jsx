import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
