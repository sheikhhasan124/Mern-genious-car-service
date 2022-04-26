import { useEffect, useState } from "react";

const useServiceDetail=(serviceId)=>{
    const [service, setService]=useState({})
    useEffect(()=>{
        const url = `https://safe-mountain-58659.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    })
    return [service]
}
export default useServiceDetail;