import React, { useRef } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../imges/Google.svg'
import { FaGithub } from "react-icons/fa";
import './Login.css'
import SocialAuth from '../SocialAuth/SocialAuth';
import auth from '../../firebase_init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef= useRef('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation()
      let from = location.state?.from?.pathname || "/";
       const navigate= useNavigate()
       let errorElement;
       if(error){
            errorElement = <p className="text-danger">Error:{error?.message}</p>
          }
      if(user){
          navigate(from, { replace: true })
      }
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-section'>
             <div className='form-container'>
           <div>
           <h2 className='form-title'>login</h2>
              <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                       
                        <input ref={emailRef} type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <div className="input-group">
                        
                        <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required/>
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                    
              </form>
              <p>{errorElement}</p>
              <p>New to Bien-Health? <Link className='form-link' to="/registration">create an account</Link></p>
              <p>Forget password? <span className="text-danger">Reset Password</span></p>
               <div className="form-horizontal">
                  <div className='hr'> </div>
                  <p>or</p>
                  <div className='hr'> </div>
               </div>
               <SocialAuth/>
           </div>
        </div>
        </div>
    );
};

export default Login;