import React from 'react';
import UseServices from '../../Hook/UseServices';

const ManageService = () => {
    const [services, setServices]=UseServices()

    const deleteItem=(id)=>{
        const proceed = window.confirm('are u sure to delete ');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(result=>{
                 const remainig = services.filter(d=>d._id !==id)
                 setServices(remainig)
            })
        }
    }
    return (
        <div>
            <h3>manage service</h3>
            {services.map(service=> 
            <div key={service._id}><h5>{service.name}<button onClick={()=>deleteItem(service._id)}>x</button></h5></div>
            )}
        </div>
    );
};

export default ManageService;