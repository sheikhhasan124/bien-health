import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialAuth from '../SocialAuth/SocialAuth';
import auth from '../../firebase_init';



const Registration = () => {
     const [agree, setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
      const navigate = useNavigate()
      let errorElement;
       if(error){
            errorElement = <p className="text-danger">Error:{error?.message}</p>
          }
     if(user){
         console.log(user)
     }
   
    const handleFormSubmit= async(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
      
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({displayName:name})
        navigate('/')
        // console.log(name,email,password)
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
                    <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                    <label className={`${agree? '': 'text-danger'}`} htmlFor="terms">Accept all conditions</label>
                    </div>
                    <input disabled={!agree} className='submit-btn' type="submit" value="Register" />
              </form>
               <p>{errorElement}</p>
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