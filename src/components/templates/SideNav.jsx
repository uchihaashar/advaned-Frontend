import React from 'react'
import { Link } from 'react-router-dom';



const SideNav = () => {
 
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 p-10 overflow-auto'>
 <h1 className='font-bold text-2xltext-white'>
 <i class="text-[#6556CD] ri-tv-fill text-2xl"></i>
  <span className='text-2xl'>AMP</span> 
 </h1>
 
<nav className='flex flex-col gap-3 text-xl text-zinc-400'>
<h1 className='mt-10 mb-5 text-xl font-semibold text-white '> New feed</h1>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class=" mr-2 ri-fire-fill"></i>
Trending</Link>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class="mr-2 mt-2 ri-magic-fill"></i>
Popular</Link>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class="mr-2 mt-2 ri-movie-2-fill"></i>
Movies</Link>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class="mr-2 mt-2 ri-tv-2-fill"></i>
TV Shows</Link>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class="mr-2 mt-2 ri-team-fill"></i>
People</Link>
</nav> 
<hr  className='border-none h-[1px] bg-zinc-400'/>

<nav className='flex flex-col gap-3 text-xl text-zinc-400'>
<h1 className='mt-10 mb-5 text-xl font-semibold text-white '> Web Information</h1>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class=" mr-2 ri-information-fill"></i>
About</Link>
<Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
<i class="mr-2 mt-2 ri-phone-fill"></i>
Contact Us</Link>

</nav> 
    </div>
  )
}

export default SideNav