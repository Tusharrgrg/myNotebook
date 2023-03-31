import React, { } from 'react'
import { Link } from "react-router-dom";
import Notes from './Notes'
import noteImg from '../Assest/images/Notebook.svg'
const Home = (props) => {
  const { showAlert } = props;




  return (
    <>
      <div className="row my-5">
        <div className="col-md-7 d-flex flex-column align-items-center">
          <img className="img-fluid" style={{ width: "75%" ,height:"100%"}} src={noteImg} alt="myNotebook" />
        </div>
        <div className="col-md-5">
          <h1 className="display-1 pt-5 ps-auto respo"><span style={{ color: "#9C27B0" }}>my</span>Notebook</h1>
          <p className="ps-auto respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
          <p className="ps-auto mt-3 respo" style={{ fontSize: "1rem" }}>An online web platform where you can create, edit, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our <Link to="/about">About Page</Link>  </p>
          <div className='mx-4'>
            <Link className="btn mx-4" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", background: "#9C27B0" }} to = {localStorage.getItem('token') ? "/addnote" : "/login"}  role="button">Create a New Note</Link>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {localStorage.getItem('token') ? <Notes showAlert={showAlert} /> : ""}
      </div>

    </>
  )
}

export default Home
