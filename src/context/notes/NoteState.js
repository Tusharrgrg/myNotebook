import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

    const notesInitial = [
        {
            "_id":"rt16cdc5d25v1",
            "title":"My Note",
            "description":"this is my first note",
            "tag":"personal"
        },
    ]

    //initialize state for notes
    const[notes,setNotes]=useState(notesInitial)

    //Add a Note
    const addNote=(title,description ,tag)=>{
        const note = {
            "_id":"rt16cdc5d25v1",
            "title":"My Note",
            "description":"this is my first note",
            "tag":"personal"
        };
        setNotes(notes.push(note))

    }

    //Delete a Note
    const deleteNote=(id)=>{
        
    }

    //Edit a Note
    const editNote=(id)=>{
        
    }

    return (
        <NoteContext.Provider value ={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState