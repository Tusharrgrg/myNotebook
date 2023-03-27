import React, { useState, } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/login.css'
import login from '../Assest/images/LogIn.svg'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showAlert("Login Successfull", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="container mt-5">
                <div class="body d-md-flex align-items-center justify-content-between">
                    <div class="box-1">
                        <img className="img-fluid" style={{ width: "100%" }} src={login} alt="iNotebook" />
                    </div>
                    <div class=" box-2 d-flex flex-column h-100">
                        <div class="mt-4">
                            <p class="mb-4 h-1 ms-2">Login to use myNotebook</p>
                            <div class="d-flex flex-column ">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                                    </div>
                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={credentials.password} id="password" onChange={onChange} />
                                    </div>
                                    <button type="submit" className="btn ms-2" style={{ background: "#9C27B0" }} >LogIn</button>
                                </form>

                                <div className="row mt-3">
                                    <p className='ms-2'>Don't have an account? <Link to="/signup" style={{ color: "#9C27B0" }}>SignUp Here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
