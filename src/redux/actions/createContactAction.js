import axios from "axios";
import {
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAILURE,
  } from "../types/createContactType";

export const createContactAction = (details) => async (dispatch) => {
    const {name,sureName,email}=details
  try {
    dispatch(createContactRequest());
    const Url='http://localhost:8000/api/contact';
    const res = await axios.post(Url,{
        name: name,
        surename:sureName,
        email:email
   },{
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
 },
   });
   console.log("response:",res)
      if(res.data.statusCode===200){
       await dispatch(createContactSuccess(res.data));
      }
      else if(res.data.statusCode!==200){
        await dispatch(createContactFailure(res.data.message)); 
      }
      else{
        await dispatch(createContactFailure("Failed, Please try again later."));
       }
  } catch (err) {
    if (err.response) {
       let errorMessage = 'Something went wrong, Please try again.'
        dispatch(createContactFailure(errorMessage)); 
    } else {
      dispatch(createContactFailure("The service is currently not available"));
    }
  }
};

export const createContactRequest = () => {
  return {
    type: CREATE_CONTACT_REQUEST,
  };
};

export const createContactSuccess = (details) => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    payload: details,
  };
};
export const createContactFailure = (error) => {
  return {
    type:CREATE_CONTACT_FAILURE,
    payload: error,
  };
};