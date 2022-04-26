import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../imges/social-icon/google.png'
import facebook from '../../../imges/social-icon/facebook.png'
import github from '../../../imges/social-icon/git hub.png'
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hook/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token]=useToken(user || user1)
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()

  let errorElement;
  if(error || error1){
    errorElement = <p className="text-danger">Error:{error?.message} {error1.message}</p>
  }
  if(token){
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex justifi-contents-center align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <p>{errorElement}</p>
      <div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-primary  w-50 d-block mx-auto mb-2">
            <img src={google} alt="" />
             <span> Google sign in</span>
        </button>
        <button className="btn btn-primary  w-50 d-block mx-auto mb-2">
            <img src={facebook} alt="" />
             <span> Facebook sign in</span>
        </button>
        <button onClick={()=>signInWithGithub()} className="btn btn-primary  w-50 d-block mx-auto">
            <img src={github} alt="" />
             <span> GitHub sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
