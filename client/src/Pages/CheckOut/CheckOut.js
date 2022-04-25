import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';

const CheckOut = () => {
    const {serviceId}=useParams()
    const [service]=useServiceDetail(serviceId)
    const [user, setUser]=useState({
        name:'akbar',
        email:'akbar@gmail.com',
        address:'agarbad',
        phone:'032423543456'
    })
    const handleChange=event=>{
        // console.log(event.target.value)
        const {address, ...rest}=user;
        const newAddress=event.target.value;
        const newUser = {address:newAddress, ...rest}
        // console.log(newUser)
        setUser(newUser)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>plese pay for{service.name} booking </h2>
            <p>id{serviceId}</p>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name='name' placeholder='name'/>
                <input className='w-100 mb-2' type="email" value={user.email} name='emai' placeholder='emai'/>
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service'/>
                <input className='w-100 mb-2' type="text" onChange={handleChange} value={user.address} name='address' placeholder='address'/>
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='phone'/>
                <input className='w-100 mb-2' type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default CheckOut;