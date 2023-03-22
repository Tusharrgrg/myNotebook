import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

    const host = "http://localhost:5000"
    const notesInitial = [
       
    ]

    //initialize state for notes
    const[notes,setNotes]=useState(notesInitial)

    // Get All Notes
    const getNotes=async()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method :'GET',
            headers:{
                'Content-Type':"",
                'auth-token':""
            }
        });
        const json = response.json();
        setNotes(json);
    }

    //Add a Note
    const addNote=(title,description,tag)=>{
        const note = {
            "_id":"rt16cdc5d25v1",
            "title":title,
            "description":description,
            "tag":tag
        };
        setNotes(notes.concat(note))

    }

    //Delete a Note
    const deleteNote=(id)=>{
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes(newNote)
    }

    let newNotes= JSON.parse(JSON.stringify(notes));
    //Edit a Note
    const editNote=(id,title,description,tag)=>{
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value ={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState