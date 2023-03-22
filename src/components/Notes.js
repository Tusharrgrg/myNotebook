import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote'

const Notes = () => {

    const context = useContext(NoteContext);
    const { notes, getNotes } = context;

    const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)
    const refClose = useRef(null)
    const updateNote = (currNote) => {
        ref.current.click();
        setNote({id:currNote._id,etitle:currNote.title, edescription:currNote.description, etag:currNote.tag})
    }

    //when click on submit note button
    const onHandleClick = (e) => {
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getNotes()
    },);

    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value ={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref = {refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={onHandleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container">
                <div className="row my-3 ">
                    <h2>Your Notes</h2>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote}note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
