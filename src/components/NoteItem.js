import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
const NoteItem = (props) => {

    const context = useContext(NoteContext);
    const { deleteNote } = context
    const { note } = props
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i class="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                        <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
