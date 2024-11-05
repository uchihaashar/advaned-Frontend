import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1f1e24] flex'>

        <Routes> 
            <Route path='/' element={<Home />}/>

        </Routes>
 
    </div>
  )
}

export default App