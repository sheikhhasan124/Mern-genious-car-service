import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loding/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
      return <Loading></Loading>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
      return <div>
        <h2 className='text-danger'>your email not verifyed</h2>
        <p>plese verify</p>
        <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
      <ToastContainer />
      </div>
    }
    return children;
};

export default RequireAuth;