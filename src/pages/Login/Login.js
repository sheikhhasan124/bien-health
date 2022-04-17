import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imges/Google.svg'
import { FaGithub } from "react-icons/fa";
import './Login.css'

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
               <div className="form-horizontal">
                  <div className='hr'> </div>
                  <p>or</p>
                  <div className='hr'> </div>
               </div>
                <div>
                    <button className="google-btn"> 
                      <img className='mb-2 pe-2' src={Logo} alt="" />
                     <p>Continue with Google</p></button>
                </div>
                <div>
                    <button className="google-btn"> <span className='mb-3 pe-2'><FaGithub/></span> <p>Continue with Github</p></button>
                </div>
           </div>
        </div>
        </div>
    );
};

export default Login;