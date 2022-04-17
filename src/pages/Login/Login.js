import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imges/Google.svg'
import { FaGithub } from "react-icons/fa";
import './Login.css'
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {
    return (
        <div className='form-section'>
             <div className='form-container'>
           <div>
           <h2 className='form-title'>login</h2>
              <form>
                    <div className="input-group">
                       
                        <input type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <div className="input-group">
                        
                        <input type="password" name="password" id="" placeholder='Password' required/>
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                    
              </form>
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