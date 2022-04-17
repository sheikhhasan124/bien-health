import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, desc}=service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{desc}</p>
            <button className='service-btn'>BOOKING</button>
        </div>
    );
};

export default Service;