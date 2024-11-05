import axios from '../../utils/axios';
import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';  
 
const TopNav = () => {
  const [query, setQuery] = useState("");
 
  const GetSearch = async ()=>{
   try {
      const d = await axios.get(`/search/multi?query=${query}`);
      console.log(d);
      
   } catch (error) {
    console.log("Error: ", error);
    
   }
  };

  useEffect(()=>{
    GetSearch();
  },[query])
  
  return (
    <div className='w-full h-[10vh] relative flex justify-start ml-[15%] items-center'>
      <i class=" text-zinc-400 text-3xl ri-search-line"></i>
      <input  onChange={(e)=>setQuery(e.target.value)}
      value={query}  // updated quary value in the input field
      className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200 ' type="text" placeholder='Search anything '/>

      {query.length> 0 && (  <i onClick={()=>setQuery("")} class="text-zinc-400 text-3xl ri-close-fill"></i>)} 
    
  
      <div  className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded'>
      { /* <Link className=' hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex justify-start items-center border-b-2 border-zinc-100 w-[100%] p-10'>
        <img src="" alt="" />
        <span> heyyy </span>
        </Link> */ }
      
      
      </div>    
    </div>
  )
}

export default TopNav