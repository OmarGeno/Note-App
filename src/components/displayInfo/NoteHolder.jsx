export const NoteHolder = (props) => {
    const deleteThought = () => {
        props.onDelete(props.obj.id)
    }
  return (
    <>
       <div className="border border-dark w-75 rounded p-3 mb-2 bg-light font" onDoubleClick={deleteThought}>
            {props.obj.note}
        </div>
    </>
  )
}
