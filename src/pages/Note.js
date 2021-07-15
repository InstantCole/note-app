import React from 'react'
import { notesState } from '../reducers/states'
import { useRecoilValue } from 'recoil'


const Note = (props) => {
    const notes = useRecoilValue(notesState)
    const { noteId } = props.match.params
    const thisNote = notes.find(note => note.noteId === props.match.params.noteId)

    return (
        <div>
        <p className="note-pre-wrap">{thisNote.noteContent}</p>
        {thisNote.noteTags && (thisNote.noteTags.map(noteTag => <p>{noteTag}</p>))}
        </div>
    )
}

export default Note