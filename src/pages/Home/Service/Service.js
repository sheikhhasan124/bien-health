import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, desc}=service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{desc}</p>
            <Link to="/booking" className='service-btn'>BOOKING</Link>
        </div>
    );
};

export default Service;