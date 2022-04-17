import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase_init';
import Loading from '../../Loadign/Loading';

const RequirAuth = ({children}) => {
  let location = useLocation()
  const [user,loading] = useAuthState(auth);
  if(loading){
      return <Loading/>
  }
  if (!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    return children;
};

export default RequirAuth;