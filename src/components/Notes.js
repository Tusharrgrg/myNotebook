import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <div className="d-flex">
            <div className="row my-3 ">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
