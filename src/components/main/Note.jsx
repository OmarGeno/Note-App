import { useState } from 'react'
import './Note.css'

export const Note = (props) => {
  const [enteredNote, setEnteredNote] = useState("");
  const [isValid, setIsValid] = useState(true);  

  // if(enteredNote === "") {
  //   setEnteredNote("Missed your thought")
  // }

  const contentChangeHandler = (e) => {
    setEnteredNote(e.target.value)
    setIsValid(true)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(enteredNote.trim().length === 0){
      setIsValid(false)
      return;
    }

    const data = {
      note: enteredNote,
      id: Math.floor(Math.random() * 10000).toString()
    }

    props.getNote(data);
    setEnteredNote('');
  }


  return (
    <div className=" w-75 mt-4">
      <form onSubmit={onSubmitHandler} className="d-flex justify-content-between w-100 flex-column">
        <div className='p-2'>
          <label style={{color: !isValid ? "red" : 'black'}}>Type in your thougth</label>
        </div>
        <div className='d-flex justify-content-between'>
          <input
            style={{borderColor: !isValid ? 'red' : 'rgb(109,118,126)'}}
            type="text"
            name="get_text"
            className="form-control m-1"
            placeholder="Add a new note"
            onChange={contentChangeHandler}
          />
          <button type="submit" className="btn btn-dark m-1">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
