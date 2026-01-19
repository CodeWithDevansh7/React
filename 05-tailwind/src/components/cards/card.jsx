import React from 'react'
import {ArrowRight} from 'lucide-react'

const card = (props) => {
  return (
    <div className='h-140 w-[320px] rounded-3xl shadow-lg overflow-hidden'>
      <div className='relative h-full bg-black text-white'>
        <img src={props.obj.img} alt="nature"
        className='h-full w-full object-cover' />

        <div class="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent"></div> 


        <div className='absolute bottom-1'>
          <h1 className='flex rounded-full h-10 w-10 bg-white justify-center items-center text-xl text-black mx-10'>{props.obj.number}</h1>

          <p className='mx-10 mt-70'>{props.obj.description}</p>
          <div className='flex mx-10 items-center my-10'>
            <div className={`pl-3 pr-20 py-2 rounded-full ${props.obj.color}`}>{props.obj.status}</div>
            <div className={`${props.obj.color} w-10 h-4 -ml-4`}></div>
            <div className={`${props.obj.color} rounded-full p-2 -ml-4`}><ArrowRight /></div>
          </div>
        </div>
        
      </div>  
      
    </div>
  )
}

export default card
