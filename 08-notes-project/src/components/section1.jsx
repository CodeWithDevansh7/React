import React from 'react'
import { useState } from 'react'

const section1 = (props) => {
  const { title, details, setTitle, setDetails, submitHandler, activeNote } = props;
  return (
    <form className='p-10 flex flex-col gap-4 items-start w-1/2' onSubmit={submitHandler}>
        <h1 className='text-3xl text-white font-bold mb-5'>Add Notes</h1>
        <input 
        className='w-full px-5 py-2 rounded border-2 outline-none font-medium'
        type="text" 
        placeholder='Enter Notes Heading'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
        type="text"
        className='w-full px-5 py-2 h-32 font-medium outline-none border-2 border-white rounded' 
        placeholder='Add Details'
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        />
        <button className='w-full px-5 py-3 font-medium outline-none rounded bg-white text-black cursor-pointer'>
          {activeNote ? "Update Note" : "Add Note"}</button>
    </form>
  )
}

export default section1
