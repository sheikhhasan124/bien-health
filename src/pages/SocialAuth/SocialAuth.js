import React from 'react';
import Logo from '../../imges/Google.svg'
import { FaGithub } from "react-icons/fa";
import auth from '../../firebase_init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
       if(error){
            errorElement = <p className="text-danger">Error:{error?.message}</p>
          }
    return (
        <div>
            <p>{errorElement}</p>
             <div>
                    <button onClick={()=>{signInWithGoogle()}} className="google-btn"> 
                      <img className='mb-2 pe-2' src={Logo} alt="" />
                     <p>Continue with Google</p></button>
                </div>
                <div>
                    <button className="google-btn"> <span className='mb-3 pe-2'><FaGithub/></span> <p>Continue with Github</p></button>
                </div>
        </div>
    );
};

export default SocialAuth;