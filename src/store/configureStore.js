import { createStore, combineReducers } from 'redux'
import notesReducer from '../reducers/notesReducer'


export default () => {
    const store = createStore(
        combineReducers({
                notes: notesReducer
            })
    )
    return store
}



