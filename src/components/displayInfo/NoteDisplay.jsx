import { NoteHolder } from './NoteHolder'

export const NoteDisplay = (props) => {
  return (
    <>
      <div className="mt-4 w-100 d-flex justify-content-center align-items-center w-50 flex-column text-center mb-4">
        {props.note.map((one) => {
          return (
            <NoteHolder
              obj={one}
              key={one.id}
              onDelete={props.onDeleteItem}
            />
          )
        })}
      </div>
    </>
  )
}
