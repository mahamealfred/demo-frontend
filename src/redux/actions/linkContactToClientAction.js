import axios from "axios";
import {
    LINK_CONTACT_TO_CLIENT_REQUEST,
    LINK_CONTACT_TO_CLIENT_SUCCESS,
    LINK_CONTACT_TO_CLIENT_FAILURE,
  } from "../types/linkContactToClientType";


export const linkContactToClientAction = (details) => async (dispatch) => {
    const {clientCode,email}=details
  try {
    dispatch(linkContactToClientRequest());
    const Url='http://localhost:8000/api/client/link-contact-toclient';
    const res = await axios.post(Url,{
        clientCode: clientCode,
        email:email
   },{
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
 },

   });
   console.log("response:",res)
      if(res.data.statusCode===200){
       await dispatch(linkContactToClientSuccess(res.data));
      }
      else if(res.data.statusCode !== 200){
        await dispatch(linkContactToClientFailure(res.data.message)); 
      }
      else{
        await dispatch(linkContactToClientFailure("Failed, Please try again later."));
       }
  } catch (err) {
    if (err.response) {
        console.log("error::",err.response) 
       let errorMessage = 'Something went wrong, Please try again.'
        dispatch(linkContactToClientFailure(errorMessage)); 
    } else {
      dispatch(linkContactToClientFailure("The service is currently not available"));
    }
  }
};

export const linkContactToClientRequest = () => {
  return {
    type: LINK_CONTACT_TO_CLIENT_REQUEST,
  };
};

export const linkContactToClientSuccess = (details) => {
  return {
    type: LINK_CONTACT_TO_CLIENT_SUCCESS,
    payload: details,
  };
};
export const linkContactToClientFailure = (error) => {
  return {
    type: LINK_CONTACT_TO_CLIENT_FAILURE,
    payload: error,
  };
};