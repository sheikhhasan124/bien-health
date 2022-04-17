import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Servises = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
      fetch('clinicData.json')
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
    return (
        <div className='service-section'>
            <p className='service-header'>service</p>
           <div className='service-container'>
            {services.map(service=><Service key={service.id} service={service}></Service>)}
            
            </div>
        </div>
    );
};

export default Servises;