import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user]= useAuthState(auth)
    const [orders, setOrders]=useState([])
    useEffect(()=>{
        const getOrder=async()=>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
           
            setOrders(data)
        }
        getOrder()
    },[user])
    return (
        <div>
            <h3>orders{orders.length}</h3>
        </div>
    );
};

export default Orders;