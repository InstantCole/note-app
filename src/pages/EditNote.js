import React from 'react'
import { notesState } from '../recoil/states'
import { useRecoilValue } from 'recoil'


const Note = (props) => {
    const notes = useRecoilValue(notesState)
    const { noteId } = props.match.params
    const thisNote = notes.find(note => note.noteId === props.match.params.noteId)

    return (
        <div className="note-content">
            <h1>Note</h1>
            <p className="note-pre-wrap">{thisNote.noteContent}</p>
            <h3>Tags</h3>
            {thisNote.noteTags && (thisNote.noteTags.map(noteTag => <p>{noteTag}</p>))}
        </div>
    )
}

export default Note