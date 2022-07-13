import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useRequest } from "../../hooks/useRequest"
import { Link } from "react-router-dom";
import PageTitle from "../shared/PageTitle";

const SignIn = () => {

    const appCtx = useContext(AuthContext)

    const emailRef = useRef()
    const passRef = useRef()

    const navigate = useNavigate()
    const sendRequest = useRequest()

    const signin = () => {
        const email = emailRef.current.value
        const password = passRef.current.value
        // sendRequest(`${process.env.REACT_APP_API_URL}users/signin`, {}, {

        sendRequest(process.env.REACT_APP_API_URL + "users/signin", {}, {

            email,
            password
        }, { type: 'json' }, 'POST')
            .then((response) => {
                if (response.success) {
                    appCtx.SignIn(response)

                    navigate('/')


                }
                //  else {
                //     window.alert(response?.messages?.join(' '))
                // }
                console.log(response, "hi")
            })
    }

    return (
        <>
            <PageTitle title='Sign In' content='' />
            <div className="custombox clearfix">
                <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2 mt-5 mb-5 d-flex justify-content-center">
                        <div className="form-wrapper w-75">
                            <h4>Enter your email and password</h4>

                            <label className="mb-1">Email</label>
                            <input
                                ref={emailRef}
                                type="email"
                                className="form-control"
                                placeholder="Your email"
                            />
                            <label className="mt-3 mb-1">Password</label>
                            <input
                                ref={passRef}
                                type="password"
                                className="form-control"
                                placeholder="Your Password"
                            />
                            <div className=" mt-3">
                                <button onClick={signin} type="submit" className="btn btn-primary me-2">
                                    Login
                                </button>
                                <Link to={"/signup"}>
                                    <button
                                        type="submit"
                                        className="btn btn-info"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn

