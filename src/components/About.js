import React, { } from 'react'
import { Link } from 'react-router-dom'
import about2 from '../Assest/images/about2.jpg'
import about3 from '../Assest/images/about3.svg'
import '../styles/about.css'

const About = () => {

  const style = { color: "#F94A29" };

  return (
    <div>
      <div className="text-white aboutImg text-center">
        <div className="note-img">
          <h1 className="display-4" style={{ color: "white" ,fontWeight:"bold"}}>Empowering  Students</h1>
          <p>An online web platform where you can create, edit, delete your notes privately and securely without any disturbancee</p>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={style}>Awesome</span> </h2>
            <p>Writing all the things in notebook is very hectic :(, So we mad myNotebook for you where you can create, edit, delete your notes privately and securely without any disturbancee.
              So dont forget to Create note because creating anything is always important
            </p>
            <div className="d-flex mt-2">
              <Link className="btn" to={localStorage.getItem('token') ? "/addnote" : "/login"} variant="contained" color="secondary" style={{ color: "#F94A29", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }} role='button'>Create New Note</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid awesome" src={about2} alt="about-awesome" />
          </div>
        </div>

        <div className="row login mt-5 mb-5 p-5">
          <div className="col-md-6">
            <img className="img-fluid" src={about3} style={{ width: "60%" }} alt="about-awesome" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={style}>internet’s visuals</span> </h2>
            <p>
              How we started? The concept was simple. Writing all the things in notebook is very hectic :( . So Experience hassle-free note-taking with myNotebook - create, edit, and access your notes securely, anytime, anywhere!
            </p>
            <div className="d-flex mt-3">
              <Link to={localStorage.getItem('token') ? "/addnote" : "/signup"} variant="contained" color="secondary" style={{ color: "#F94A29", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>{localStorage.getItem('token') ? "Make a new note" : "Join Us"}</Link>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name"><span style={style}>my</span>Notebook</span>
            </div>
            <div className="media-icons">
              <Link to="/"><i className="fab fa-twitter"></i></Link>
              <Link to="/"><i className="fab fa-instagram"></i></Link>
              <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addnote">New Notes</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/">Get started</Link></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><Link to="/">Your Notes</Link></li>
              <li><Link to="/addnote">New Note</Link></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><Link to={localStorage.getItem('token') ? "/" : "/login"}>Sign-in</Link></li>
              <li><Link to={localStorage.getItem('token') ? "/" : "/signup"}>Join Free</Link></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">About myNotebook</li>
              <li style={{ color: "#F7FFFF" }}>
                Hassle-free note-taking web plateform - create, edit, and access your notes securely, anytime, anywhere!
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2023 <Link to="/">myNotebook</Link>All rights reserved</span>
            <span className="policy_terms">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default About
