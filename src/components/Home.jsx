import React from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';

const Home = () => {

  document.title= "AMP || homepage";
  return (
    <>
    <SideNav />
    <div className='w-[80%] h-full'>
      <TopNav />
    </div>
    
    </>
  )
}

export default Home