import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `https://safe-mountain-58659.herokuapp.com/service`;
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
    })
  };
  
    return (
       <div className='w-50 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' className='mb-2' type="text" {...register("name")} />
      <input placeholder='description' className='mb-2' type="text" {...register("description")} />
      <input placeholder='price' className='mb-2' type="number" {...register("price")} />
      <input placeholder='Photo url' className='mb-2' type="text" {...register("img")} />
      <input type="submit" value="add service" />
    </form>
       </div>
    );
};

export default AddService;