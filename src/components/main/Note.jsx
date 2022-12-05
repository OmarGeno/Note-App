import { useState } from 'react'
import './Note.css'

export const Note = (props) => {
  const [enteredNote, setEnteredNote] = useState("")

  if(enteredNote === "") {
    setEnteredNote("Missed your thought")
  }

  const contentChangeHandler = (e) => {
    setEnteredNote(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      note: enteredNote,
      id: Math.floor(Math.random() * 10000).toString()
    }

    props.getNote(data);
    setEnteredNote('');
  }


  return (
    <div className="d-flex justify-content-between w-75 mt-4">
      <form onSubmit={onSubmitHandler} className="d-flex justify-content-between w-100">
        <input
          type="text"
          name="get_text"
          id=""
          className="form-control m-1"
          placeholder="Add a new note"
          onChange={contentChangeHandler}
        />
        <button type="submit" className="btn btn-dark m-1">
          Add
        </button>
      </form>
    </div>
  )
}
