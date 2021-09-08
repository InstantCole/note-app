import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TagsList from '../components/TagsList'
import { notesState } from '../recoil/states'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { nanoid } from '@reduxjs/toolkit'




const Note = (props) => {
    const isNewNote = (props.location.pathname === "/add-note") ? true : false
    const [notes, setNotes] = useRecoilState(notesState)
    const [editable, setEditable] = useState(false)
    const { noteId } = useParams()
    const noteIndex = notes.findIndex(note => note.noteId === props.match.params.noteId)
    const thisNote = notes[noteIndex]
    const [noteTitle, setNoteTitle] = useState(thisNote.noteTitle)
    const [noteText, setNoteText] = useState(thisNote.noteText)
    const [noteTags, setNoteTags] = useState(thisNote.noteTags)
    const noteEditCount = thisNote.noteEditCount || 0
    const textRef = useRef(null)



    useEffect(() => {
        const focusedElement = textRef.current 
        if ( focusedElement && focusedElement.nodeName === "TEXTAREA" && document.activeElement != focusedElement) {
            focusedElement.focus()
            focusedElement.select()
        }

    })

    //Only for existing notes
    const handleEditNote = (e) => {
        e.preventDefault()
        setEditable(true)
        const focusedElement = textRef.current
        console.log(focusedElement)
        focusedElement.focus()
        if (focusedElement.nodeName === "TEXTAREA") {
            focusedElement.select()
        }
    }


    //Only for existing notes
    const handleSaveNote = (e) => {
        e.preventDefault()
        const firstHalfNotes = notes.slice(0, noteIndex)
        const lastHalfNotes = notes.slice(noteIndex + 1, notes.length)
        setNotes(() => [
            ...firstHalfNotes,
            {
                ...thisNote,
                noteId: noteId,
                noteText: noteText,
                noteTags: noteTags,
                noteLastEditedDate: new Date(),
                noteEditCount: noteEditCount + 1,
            },
            ...lastHalfNotes
        ])
        setEditable(false)

    }

    //Only for new notes
    const handleAddNote = (e) => {
        e.preventDefault()
        if (noteText === "") {
            alert("The note was not saved because it was empty.")
            return
        }
        if (titleText === "") {
            alert("The note needs a title.")
            return
        }
        const sortedTagsList = noteTags.map((tag) => tag).sort()
        setNotes((oldNotes) => [
            ...oldNotes,
            {
                noteId: nanoid(),
                noteTitle: titleText,
                noteText: noteText,
                noteTags: sortedTagsList
            }
        ])
        setNoteTitle('')
        setNoteText('')
        setNoteTags([])
    }

    //Only for existing notes
    const handleCancelEdit = (e) => {
        e.preventDefault()
        setEditable(false)
        setNoteText(thisNote.noteText)
        setNoteTags(thisNote.noteTags)


    }

    //Stays the same
    const handleNoteTextChange = ({ target: { value } }) => {
        setNoteText(value)
        const patternA = /\s+/
        setNoteTags(value.split(patternA).filter(word => word.charAt(0) == "#" && word.length > 1))
        setNoteTags(prevTags => prevTags.map(tag => tag.substr(1, tag.length)))


    }

    const handleTitleChange = ({ target: { value } }) => {
        setNoteTitle(value)
    }


    return (

        <div className="add-note-container row">
            <div className="col-8">
            {!editable && <h2>{noteTitle}</h2>}
            {editable && <h2>Editing {noteTitle}</h2>}

                <form id="noteform" className="add-note-form fit-screen-vertical">
                    {!editable && <p className="add-note-text note-pre-wrap">{noteText}</p>}
                    {editable && <input className="add-note-title" type="text" onChange={handleTitleChange} placeholder="Note Title" value={noteTitle} />}
                    {editable && <textarea ref={textRef} className="add-note-text note-pre-wrap" value={noteText} onChange={handleNoteTextChange}></textarea>}
                </form>
            </div>

            <div className="col-4">
                <h2>Tags</h2>
                <div className="tags-container fit-screen-vertical">
                    <TagsList noteTags={noteTags} />
                </div>
            </div>
            <div className="row">
                {!editable && <button className="button button--edit" onClick={handleEditNote} >Edit</button>}
                {editable && <button className="button button--cancel" onClick={handleCancelEdit} >Cancel</button>}
                {editable && <button className="button button--save" type="submit" form="noteform" onClick={handleSaveNote} >Save</button>}

            </div>
        </div>




        // <div className="note-content">
        //     <h1>Note</h1>
        //     <p className="note-pre-wrap">{thisNote.noteContent}</p>
        //     <h3>Tags</h3>
        //     {thisNote.noteTags && (thisNote.noteTags.map(noteTag => <p>{noteTag}</p>))}
        // </div>
    )
}

export default Note