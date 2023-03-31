import React, { } from 'react'
import logo from '../Assest/images/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = (props) => {
    let navigate = useNavigate();

    // useLocation hook returns the location object used by the react-router. This object represents the current URL and is immutable. Whenever the URL changes, the useLocation hook returns a newly updated location object.
    let location = useLocation();
    const handleLogout = (evt) => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg  sticky-top navbar-light" style={{ backgroundColor: "#fff" }} >
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" class="d-inline-block align-text-top" style={{ height: "40px", width: "130px" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                aria-current="page" to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about"
                                style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact"
                                style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Contact Us</Link>
                        </li>
                    </ul>

                    {/* if token is not authenticate then got to log in signup  */}
                    {!localStorage.getItem("token") ? (
                        <div className="d-flex ms-auto">
                            <Link className="btn btn-primary mx-1 btn-light btn-outline" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }} to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1 btn-light btn-outline" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }} to="/signup" role="button">Sign Up</Link>
                        </div>
                    ) : (
                        <div className="d-flex ms-auto">
                            <button onClick={handleLogout} className="btn btn-primary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Log Out</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
