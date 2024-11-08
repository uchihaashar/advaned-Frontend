import React, { useEffect } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import { useState  } from 'react';
import axios from '../utils/axios';
import Header from './templates/Header';

const Home = () => {

  document.title= "AMP || homepage";
  const [wallpaper, setWallPaper] = useState(null)

  const GetHeaderWallpaper = async ()=>{
    try {
       const {data} = await axios.get(`/trending/all/day`);
       let randomData  = data.results[(Math.random()*data.results.length).toFixed()]
       setWallPaper(randomData);
       
    } catch (error) {
     console.log("Error: ", error);
     
    }
   };   

   useEffect(()=>{
    !wallpaper && GetHeaderWallpaper();
   },[])

  return  wallpaper ? (
    <>
    <SideNav />
    <div className='w-[80%] h-full'>
      <TopNav />
      <Header data={wallpaper} />
    </div>
    
    </> 
  ):(
    <h1> Loading</h1>
  )
}

export default Home