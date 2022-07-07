import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useRequest } from "../../hooks/useRequest"
import { Link } from "react-router-dom";

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

    sendRequest(process.env.REACT_APP_API_URL + "users/signin" , {} ,{ 

            email,
            password
        }, { type: 'json' }, 'POST')
            .then((response) => {
                if (response.success) {
                    appCtx.SignIn(response)
                    navigate('/home')
                } else {
                    window.alert(response?.messages?.join(' '))
                }
            })
    }

    return (
        <>
            
                <div className="custombox clearfix">
                    <h4 style={{ background: "#000000", color: "white" }} className="small-title">Login Page</h4>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="form-wrapper w-75">
                                <h4>Login</h4>

                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                />
                                <input
                                    ref={passRef}
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                />
                                <button onClick={signin} type="submit" className="btn btn-primary">
                                    Login
                                </button>
                                <Link to={"/sign-up"}>
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        style={{ background: "#7FFFD4", color: "black" }}
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default SignIn

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import { useRequest } from "../../hooks/useRequest"
// // import { useContext , useRef } from "react"
// // import { AuthContext } from "../../contexts/AuthContext"
// import {AuthContext} from '../../contexts/AuthContext'
// import { useContext } from "react";


// const theme = createTheme();

//   const Signin =() => {
//   const navigate = useNavigate();
//   const sendRequest = useRequest()
//   // const userNameOrEmailRef = useRef()
//   // const passwordRef = useRef()
//   const auth = useContext(AuthContext)
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const password = passwordRef.current.value
//     // const userNameOrEmail = userNameOrEmailRef.current.value
//     sendRequest(process.env.REACT_APP_API_URL + "/users/signin" , {} ,{ 
//           userNameOrEmail : event.target.querySelector('input[name=userNameOrEmail]').value,
//           password : event.target.querySelector('input[name=password]').value 
//       } , { type: 'json' }, 'POST')
//       .then((response) => {
//         if (response.success) {
//           auth.login(response)
//           // console.log(auth.login)  
//           navigate('/allposts')
//           } else {
//               window.alert(response.messages)
//           }
//       });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: "url(https://source.unsplash.com/random)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: t =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center"
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center"
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               signin
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 // ref={userNameOrEmailRef}
//                 id="userNameOrEmail"
//                 label="Username or Email"
//                 name="userNameOrEmail"
//                 autoComplete="current-userNameOrEmail"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 // ref={passwordRef}
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 signin
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                 </Grid>
//                 <Grid item>
//                   <Link
//                     to="/signup"
//                     className="btn btn-outline-dark"
//                     style={{ color: "black" }}
//                   >
//                     {" "}Sign Up
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

// export default Signin;