import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { addNote } from '../actions/noteActions'
import configureStore from '../store/configureStore' 
 
const store = configureStore()

function AddNote (props) {
    const dispatch = useDispatch()
    const showState = () => {
        console.log(store.getState())
    }
    

    return(
        <div>
        <p>add a note here</p>
        <button onClick={() => store.dispatch(addNote({note: "dispatch world"}))}>click</button>
        <button onClick={showState}>state</button>

        </div>
    )
}

export default AddNote