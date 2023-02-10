import axios from "axios";
import {
    CREATE_CLIENT_REQUEST,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAILURE,
  } from "../types/createClientType"


export const createClientAction = (name) => async (dispatch) => {
  try {
    dispatch(createClientRequest());
    const Url='http://localhost:8000/api/client';
    const res = await axios.post(Url,{
        name: name,
        
   },{
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
 },

   });
   console.log("response:",res)
      if(res.data.statusCode===200){
       await dispatch(createClientSuccess(res.data));
      }
      else if(res.data.statusCode!==200){
        await dispatch(createClientFailure(res.data.message)); 
      }
      else{
        await dispatch(createClientFailure("Failed, Please try again later."));
       }
  } catch (err) {
    if (err.response) {
       let errorMessage = 'Something went wrong, Please try again.'
        dispatch(createClientFailure(errorMessage)); 
    } else {
      dispatch(createClientFailure("The service is currently not available"));
    }
  }
};

export const createClientRequest = () => {
  return {
    type: CREATE_CLIENT_REQUEST,
  };
};

export const createClientSuccess = (details) => {
  return {
    type: CREATE_CLIENT_SUCCESS,
    payload: details,
  };
};
export const createClientFailure = (error) => {
  return {
    type:CREATE_CLIENT_FAILURE,
    payload: error,
  };
};