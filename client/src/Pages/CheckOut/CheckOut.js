import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';

const CheckOut = () => {
    const {serviceId}=useParams()
    const [service]=useServiceDetail(serviceId)
    return (
        <div className='w-50 mx-auto'>
            <h2>plese pay for{service.name} booking </h2>
            <p>id{serviceId}</p>
            <form>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name'/>
                <input className='w-100 mb-2' type="email" name='emai' placeholder='emai'/>
                <input className='w-100 mb-2' type="text" name='service' placeholder='service'/>
                <input className='w-100 mb-2' type="text" name='address' placeholder='address'/>
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone'/>
                <input className='w-100 mb-2' type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default CheckOut;