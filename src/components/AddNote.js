import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import addnoteimg from '../Assest/images/addnote.svg'
import noteContext from "../context/notes/noteContext"

//add note function in frontend side

const AddNote = () => {

    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    let navigate = useNavigate();


    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        navigate("/")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container h-4">
                <div className="row mt-4">
                    <p className='ms-2'><Link to="/" style={{ color: "#9C27B0" , textDecoration:"none"}}><i className="fa-solid fa-arrow-left me-2" style={{ color: "#9C27B0" , textDecoration:"none"}}></i>Home</Link></p>
                </div>
                <div className="body3 d-md-flex align-items-center justify-content-between">
                    <div className="box-1">
                        <img className="img-fluid" style={{ width: "90%" }} src={addnoteimg} alt="myNotebook" />
                    </div>
                    <div className="box-2 d-flex flex-column mb-2">
                        <div className="mt-2">
                            <h2 className=" mt-2 mb-1 h-2 ms-2">Create a new Note</h2>
                            <p className="mb-2 ms-2 h-3">Add  a new note with your info / notes</p>
                            <div className="d-flex flex-column ">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                                    </div>
                                    <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNote
