import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../types/loginType";
//  import dotenv from "dotenv"
//  dotenv.config()
export const loginAction = (user,navigate) => async (dispatch) => {
 
  try {
    dispatch(loginRequest());
    const {username}=user
    const {password}=user 
   const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');
   //const Url=process.env.REACT_APP_BASE_URL+'/authentication/signin';
   const Url="http://localhost:8000/api/authentication/signin"
   const res = await axios.post(Url,{}, {
      withCredentials: true,
    Headers:{
    "Accept":"application/json",
    "Content-Type": "application/json"
  },
  auth: {
    username,
    password
  }
   });

    if(res.data.statusCode===200 ){
    //   history.push('/dashboard',{push:true})
      const fullName=res.data.data.fullName
      const email=res.data.data.email
      const role=res.data.data.role
      const username=res.data.data.username
      const token=res.data.data.token
      const resData=res.data
      dispatch(loginSuccess({resData,password:password,basicAuth:basicAuth}));
      sessionStorage.setItem('quantum-auth',token)
     navigate('/dashboard/services')
      return  sessionStorage.setItem('quantum-auth',token);
    }
   
  } catch (err) {
    if ( err.response.data.statusCode===400 ) {
        dispatch(loginFailure(err.response.data.message)); 
    } 
    else if(  err.response.data.statusCode===404){
        dispatch(loginFailure(err.response.data.message)); 
    }
    else {
      dispatch(loginFailure("The service is currently not available"));
    }
  }
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (details) => {
  return {
    type: LOGIN_SUCCESS,
    payload: details,
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};