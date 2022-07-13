import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import PageTitle from "../shared/PageTitle"

export const SignUp = () => {
    const navigate = useNavigate()
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const signup = async () => {
        const first_name = firstnameRef.current.value
        const last_name = lastnameRef.current.value
        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/signup`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                email,
                password
            })
        })
        const userRegistered = await response.json()
        if (userRegistered.success) {
            // redirect to sign in
            navigate('/signin')
        } else {
            window.alert(userRegistered.messages)
        }
    }

    return (
        <>
            <PageTitle title='Create your Account' content='Hello & Welcome, To have a better experince please fill in the form and join cooking world' />
                <div className="custombox clearfix">
                    <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2 mt-5 mb-5 d-flex justify-content-center">
                            <div className="form-wrapper w-75">
                                <h4 >Sign Up</h4>
                                <label className="mb-1">First Name</label>
                                <input
                                    ref={firstnameRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Your FirstName"
                                />
                                <label className="mb-1">Last Name</label>
                                <input
                                    ref={lastnameRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Your LastName"
                                />
                                 <label className="mb-1">UserName</label>
                                <input
                                    ref={usernameRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="UserName"
                                />
                                <label className="mb-1">Email</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                />
                                <label className="mt-3 mb-1">Password</label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                />
                                 <div className=" mt-3">
                                <button onClick={signup} type="submit" className="btn btn-primary me-2">
                                submit
                                </button>
                                <Link to={"/signin"}>
                                    <button
                                        type="button"
                                        className="btn btn-info">
                                        Login
                                    </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};
