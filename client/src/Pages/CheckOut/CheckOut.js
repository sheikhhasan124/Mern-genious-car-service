import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = () => {
    const {serviceId}=useParams()
    const [service]=useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    // const [user, setUser]=useState({
    //     name:'akbar',
    //     email:'akbar@gmail.com',
    //     address:'agarbad',
    //     phone:'032423543456'
    // })
    // const handleChange=event=>{
    //     // console.log(event.target.value)
    //     const {address, ...rest}=user;
    //     const newAddress=event.target.value;
    //     const newUser = {address:newAddress, ...rest}
    //     // console.log(newUser)
    //     setUser(newUser)
    // }
    const handlePlaceOrder=event=>{
        event.preventDefault();
        const order = {
            email:user.email,
            service:service.name,
            serviceId:serviceId,
            address: event.target.address.value,
            phone:event.target.phone.value
        }
       axios.post('https://safe-mountain-58659.herokuapp.com/order',order)
       .then(response=>{
           const {data}=response;
           if(data.insertedId){
           toast('your data is sent!!! see you again')
           event.target.reset()
        }
       })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>plese pay for{service.name} booking </h2>
            <p>id{serviceId}</p>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name='name' placeholder='name' readOnly disabled/>
                <input className='w-100 mb-2' type="email" value={user.email} name='emai' placeholder='emai'/>
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service'/>
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address'  autoComplete='off' />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone'/>
                <input className='w-100 mb-2' type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default CheckOut;