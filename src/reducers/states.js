import { atom } from "recoil"



export const notesState = atom({
    key: 'notesState',
    default: []
    // effects_UNSTABLE: [({ setSelf, onSet }) => {
    //     JSON.parse(localStorage.getItem("notes")) && setSelf(JSON.parse(localStorage.getItem("notes")))
    //     onSet(value => localStorage.setItem("notes", JSON.stringify(value)))
    // }]
})




export const darkModeState = atom({
    key: 'darkModeState',
    default: true
})










