import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';
import signup from '../Assest/images/SignUp.svg'

const Signup = (props) => {

    const style = {color :"#F94A29"};
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword } = credentials
        if (password === cpassword) {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            console.log(json)
            if (json.success) {
                //Save the authtoken and redirect
                localStorage.setItem('token', json.authtoken)
                navigate('/')
                props.showAlert("Account created successfully", "success")
            }
            else {
                props.showAlert("Invalid credentials", "danger")
            }
        }
        else {
            props.showAlert("Passord and Confirm password Doesn't match", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div class="container">
                <div className="body2 d-md-flex align-items-center justify-content-between">
                    <div className="box-1">
                        <img className="img-fluid"  src={signup} alt="myNotebook" />
                    </div>
                    <div class="box-2 d-flex flex-column ">
                        <div class="mt-2">
                            <p class="mb-4 h-2 ms-2">Create an account to use myotebook</p>
                            <div class="d-flex flex-column ">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
                                    </div>
                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" required />
                                    </div>

                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5} />
                                    </div>
                                    <div className="mb-3 ms-2" style={{ width: "90%" }}>
                                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5} />
                                    </div>
                                    <button type="submit" className="btn ms-2" style={style}>SignUp</button>
                                </form>

                                <div className="row mt-3">
                                    <p className='ms-2 ms-2'>Already have an account? <Link to="/login" style={style}>Login Here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Signup
