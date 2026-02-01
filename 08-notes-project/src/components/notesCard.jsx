import React from 'react'
import { useState } from 'react'

const notesCard = ({obj , deleteNote , editNote}) => {
  return (
    <div className='p-5 h-65 w-50 rounded-3xl overflow-hidden shrink-0'>
      <div className='relative h-full bg-black text-black'>
        <img src="https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png" alt="nature"
        className='h-full w-full object-cover' />

        <div className='absolute inset-x-5 top-5 z-10'>
          <h1 className="text-md font-bold wrap-break-word leading-tight text-black underline decoration-3 decoration-amber-500">{obj.title} </h1>
          <p className='mt-3 font-semibold text-sm wrap-break-word leading-tight text-black'>{obj.details}</p>
        </div>
        <button className='bg-red-400 px-3 py-1 rounded-xl absolute top-43 left-3 font-medium text-md text-white cursor-pointer'
        onClick={() => deleteNote(obj.id)}>Delete</button>
        <button className='bg-blue-400 px-3 py-1 rounded-xl absolute top-43 right-3 font-medium text-md text-white cursor-pointer'
        onClick={() => editNote(obj)}
        >Edit</button>
      </div>  
      
    </div>
  )
}

export default notesCard
