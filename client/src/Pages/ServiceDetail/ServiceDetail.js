import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h1>welcome to service detail page{serviceId}</h1>
               <div className='text-center'>
                   <Link to="/checkout">
                       <button className='btn btn-primary'>proceed checkout</button>
                   </Link>
               </div>
        </div>
    );
};

export default ServiceDetail;