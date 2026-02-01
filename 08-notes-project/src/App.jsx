import React, { useState } from 'react'
import Section2 from './components/section2.jsx'
import Section1 from './components/section1.jsx'

const App = () => {

  const [notesData, setNotesData] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title){
      alert("Give Title to the note");
      return;
    }

    if(activeNote){
      // Update existing note
      
      setNotesData((prevNotes) => {
        return prevNotes.map((note) => {
          if(note.id === activeNote.id){
            return { ...note, title, details };
          }
          return note;
        })
      });

      setActiveNote(null);
      setTitle('');
      setDetails('');
      return;
    }



    const newNote = {title,details,id};
    setNotesData(prev => ([...prev, newNote]));
    setTitle('');
    setDetails('');
    setId(prev => prev + 1);
  }

  const deleteNote = (noteId) => {
    setNotesData((prevNotes) => {
      return prevNotes.filter((note) => note.id !== noteId);
    });
  }

  const editNote = (noteObj) => {
    setActiveNote(noteObj);
    setTitle(noteObj.title);
    setDetails(noteObj.details);
  }

  return (
    <div className='h-screen bg-black text-white flex gap-10'>
      <Section1 title={title} details={details} setTitle={setTitle} setDetails={setDetails} submitHandler={submitHandler} activeNote={activeNote} />
      <Section2 notesData={notesData} deleteNote={deleteNote} editNote={editNote} />
    </div>
  )
}

export default App
