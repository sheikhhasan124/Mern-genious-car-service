import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
      const {id,name, price, img,descreption}= service;

      const navigate = useNavigate()
    const navigateServiceDetail = (id) =>{
           navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
              <h2>Name:{name}</h2>
               <p>{descreption}</p>
               <h4>Price:{price}</h4>
               <img src={img} alt="" />
               <button onClick={() => navigateServiceDetail(id)}>Hire:{name}</button>
        </div>
    );
};

export default Service;