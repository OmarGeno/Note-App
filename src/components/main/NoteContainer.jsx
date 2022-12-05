import React, { useState } from 'react'
import { NoteDisplay } from '../displayInfo/NoteDisplay'
import { Note } from './Note'

export const NoteContainer = () => {
  const [displayNote, setDisplayNote] = useState([]);

  const getNotes = (notes) => {
    setDisplayNote((prevNotes) => {
      return [notes, ...prevNotes]
    })
  }

  const deleteItemHandler = (noteId) => {
    setDisplayNote((prevNotes) => {
      const updateNotes = prevNotes.filter((n) => n.id !== noteId)
      return updateNotes
    })
  }

  let content = <p className="m-5" style={{fontSize: '20px'}}>No thoughts were found.Maybe add one?</p>

  if (displayNote.length > 0) {
    content = (
      <NoteDisplay note={displayNote} onDeleteItem={deleteItemHandler} />
    )
  }

  return (
    <div className="container d-flex justify-content-center m-auto mt-5 mb-5">
      <div className="container d-flex justify-content-center border-dark align-items-center border rounded w-50 new-bg flex-column">
        <h1 className="mt-3">Save your thoughts!</h1>
        <Note getNote={getNotes} />
        {content}
      </div>
    </div>
  )
}
