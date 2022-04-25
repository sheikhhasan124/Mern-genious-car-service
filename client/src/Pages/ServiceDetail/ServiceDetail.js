
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId}=useParams()
   const [service]=useServiceDetail(serviceId)
    return (
        <div>
            <h1>welcome to service detail page{serviceId}</h1>
            <h2>{service.name}</h2>
               <div className='text-center'>
                   <Link to={`/checkout/${serviceId}`}>
                       <button className='btn btn-primary'>proceed checkout</button>
                   </Link>
               </div>
        </div>
    );
};

export default ServiceDetail;