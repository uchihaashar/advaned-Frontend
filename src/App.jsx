import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1f1e24] flex'>

        <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/trending' element={<Trending />}/>
            <Route path='/popular' element={<Popular />}/>
            <Route path='/popular' element={<Popular />}/>
            <Route path='/movie' element={<Movie />}/>
            <Route path='/tv' element={<TvShows />}/>

        </Routes>
 
    </div>
  )
}

export default App