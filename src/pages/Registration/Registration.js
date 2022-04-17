import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialAuth from '../SocialAuth/SocialAuth';
import auth from '../../firebase_init';
import { async } from '@firebase/util';


const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

     const navigate = useNavigate()
    const handleFormSubmit= async(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.name.value;
        const password = event.target.name.value;
       await createUserWithEmailAndPassword(email, password)
        // Navigate('/')
        // console.log(name, email)
    }
    return (
        <div className='form-section'>
             <div className='form-container'>
           <div>
           <h2 className='form-title'>Register</h2>
              <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                       <input type="text" name="name" id="" placeholder='Name' required />
                    </div>
                    <div className="input-group">
                       <input type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" id="" placeholder='Password' required/>
                    </div>
                    <div className='mb-3'>
                    <input type="checkbox" name="terms" id="" />
                    <label htmlFor="terms">Accept all conditions</label>
                    </div>
                    <input className='submit-btn' type="submit" value="Register" />
              </form>
              <p>All ready have an account <Link className='form-link' to="/login">Please login</Link></p>
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

export default Registration;