import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { notesState } from '../recoil/states'
import { nanoid } from '@reduxjs/toolkit'


const Notes = () => {
    const [notes, setNotes] = useRecoilState(notesState)
    let noteListPreview

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    })

    const handleClickOutside = (e) => {
        console.log("clicked outside", document.activeElement.id)
        console.log(`.${document.activeElement.id}`)
        const element = document.getElementsByClassName("menu-box")
        if(element){
            for(let i = 0; i < element.length; i++){
                element[i].classList.add("hidden")
            }
            

        }
    }

    const handleNoteMenuClick = (e) => {
        if(e.defaultPrevented) return
        e.preventDefault()
        e.stopPropagation()
        console.log(`".${e.target.id}"`)
        const element = document.querySelector(`.${e.target.id}`)
        if(element.classList.contains("hidden")){
            const otherElements = document.getElementsByClassName("menu-box")
            for(let i = 0; i < otherElements.length; i++){
                otherElements[i].classList.add("hidden")
            }
            element.classList.remove("hidden")

        }
        else{
            element.classList.add("hidden")

        }
    }

    const deleteNote = (e) => {
        e.preventDefault()
        const firstHalfNotes = notes.slice(0, (e.target.id - 1))
        const lastHalfNotes = notes.slice(e.target.id, notes.length)
        setNotes(() => [
            ...firstHalfNotes,
            ...lastHalfNotes
        ])
    }

    const copyNote = (e) => {
        e.preventDefault();
        const firstHalfNotes = notes.slice(0, (e.target.id))
        const lastHalfNotes = notes.slice(e.target.id, notes.length)
        console.log(notes[e.target.id -1 ])
        setNotes(() => [
            ...firstHalfNotes,{
                ...notes[e.target.id -1],
                noteId: nanoid(),
                noteLastEditedDate: new Date(),
                noteEditCount: 0,
            },
            ...lastHalfNotes
        ])
    }

    
        noteListPreview = notes.map((note, index) => (
            <div className={`note-list-card note-${index+1}`}>
                <Link className={`note-info note-${index+1}`} to={`/note/${note.noteId}`}>Note {index + 1} - {note.noteTitle} </Link>
                <button id={note.noteId} className="note-menu-button" onClick={handleNoteMenuClick}>•••</button>
                <div className={`menu-box ${note.noteId} hidden`}>
                    <button id={`${index+1}`} onClick={deleteNote}>Delete</button>
                    <button id={`${index+1}`} onClick={copyNote}>Copy</button>
                    </div>
            </div>
        ))
    
    


    return (
        <div className="note-list row">
            <h1>Smart Notes</h1>
            <h3>Recent Notes</h3>
            <div className="col-8 clear-bottom-padding">
                {noteListPreview}
            </div>
        </div>
    )
}

export default Notes