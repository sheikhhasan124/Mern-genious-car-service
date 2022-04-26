
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom'
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Api/AxiosPrivate';

const Orders = () => {
    const [user]= useAuthState(auth)
    const [orders, setOrders]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const getOrder=async()=>{
            const email = user?.email;
            const url = `https://safe-mountain-58659.herokuapp.com/order?email=${email}`;
           try{
            const {data} = await axiosPrivate.get(url)
            setOrders(data)
           }catch(error){
              console.log(error.message)
               if(error.response.status===401 || error.response.status=== 403){
                   signOut(auth)
                   navigate('/login')
               }
           }
        }
        getOrder()
    },[user])
    return (
        <div>
            <h3>orders{orders.length}</h3>
            {orders.map(order=><div key={order._id}>
                  <h3>{order.email}</h3>
                  <p>{order.service}</p>
            </div>)}
        </div>
    );
};

export default Orders;