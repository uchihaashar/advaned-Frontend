import React from 'react'
import loader from '/uf.gif'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-black'>
        <img className='w-[20%] ' src={loader} alt="" />
    </div>
  )
}

export default Loading