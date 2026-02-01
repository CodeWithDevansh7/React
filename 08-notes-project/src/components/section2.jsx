import React from 'react'
import { useState } from 'react'
import { CircleChevronLeft} from 'lucide-react'
import { CircleChevronRight} from 'lucide-react'
import NotesCard from './notesCard.jsx'

const section2 = ({notesData ,deleteNote , editNote}) => {

    const [currentPage, setCurrentPage] = useState(0);

    const notesPerPage = 6;
    const totalPages = Math.ceil(notesData.length / notesPerPage);

    const startIndex = currentPage * notesPerPage;
    const endIndex = startIndex + notesPerPage;
    const visibleNotes = notesData.slice(startIndex, endIndex);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
        setCurrentPage(prev => prev - 1);
        }
    };

    
  return (
    <div className='my-10 mr-10 h-180 w-1/2 flex flex-col flex-wrap  border-2 border-white'>
        <div className='w-full h-20 flex justify-center items-center p-5 text-3xl font-bold text-white'>Notes Display Section</div>
        <div className='w-full h-159 flex items-center'>
            <button className='px-3' onClick={handlePrev} disabled={currentPage === 0}><CircleChevronLeft size={35} /></button>
            <div className='w-full h-full flex flex-wrap content-start'>
                {visibleNotes.map((noteObj , index) => (
                    <NotesCard key={index} obj={noteObj} deleteNote={deleteNote} editNote={editNote}/>
                ))}
            </div>
            <button className='px-3' onClick={handleNext} disabled={currentPage === totalPages - 1}><CircleChevronRight size={35} /></button>
        </div>
    </div>
  )
}

export default section2
