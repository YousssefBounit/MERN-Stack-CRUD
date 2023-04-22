import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import ContextProvider from './Context/AuthContext';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </div>
  )
}

export default App
