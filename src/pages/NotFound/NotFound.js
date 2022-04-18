import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='not-found'>
            <p>404</p>
            <p>Page Not Found.Go to home</p>
            
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    );
};

export default NotFound;