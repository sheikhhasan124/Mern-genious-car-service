import { useEffect, useState } from "react"

const UseServices=()=>{
    const [services, setServices]=useState([])

    useEffect(()=>{
       fetch('https://safe-mountain-58659.herokuapp.com/service')
       .then(res=>res.json())
       .then(data=>setServices(data))
    },[])
    return [services, setServices]
}
export default UseServices;