import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/PageTitle/PageTitle";

const Login = () => {
     const emailRef= useRef('')
     const passwordRef= useRef('')
      const location = useLocation()
     let from = location.state?.from?.pathname || "/";
     const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    if(error){
      errorElement = <p className="text-danger">Error:{error?.message}</p>
    }
     const handleSubmit=(event)=>{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
        //  console.log(email, password)
         signInWithEmailAndPassword(email, password)
 
        }
       
        const navigate= useNavigate()
        if(user){
          navigate(from, { replace: true });
        }
        const navigateRegister =()=>{
            navigate(`/register`)
        }
        const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
        const resetPassword =async()=>{
          const email = emailRef.current.value;
          if(email){
            await sendPasswordResetEmail(email)
            toast('sent email')
          }else{
            toast('please enter email adderess')
          }
        }
     
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="login"/>
      <h2 className="text-center m-3">LogIn</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>{errorElement}</p>
      {/* <p>Haven't you register? <Link to="/register"><span className="text-danger">Please register</span></Link></p> */}
      <p>Haven't you register? <span onClick={navigateRegister} className="text-danger">Please register</span></p>
      <p>Forget password? <span onClick={resetPassword} className="text-danger">Reset Password</span></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
