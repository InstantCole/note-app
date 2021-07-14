import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Note = (props) => {
    console.log(props)

    const { noteId } = props.match.params
    console.log(noteId)
    const thisNote = useSelector(state =>
        state.notes.find(note => note.noteId === noteId ))
      

      console.log(thisNote)
    
    return(
        <p>{thisNote.noteContent}</p>
    )
}

export default Note