import axios from "axios";
import {
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAILURE,
  } from "../types/contactListType";
  


export const contactListAction = () => async (dispatch) => {
  try {
    dispatch(contactListRequest());
    const Url='http://localhost:8000/api/contact';
    const res = await axios.get(Url,{},{
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
 },

   });
   console.log("list of contact :",res)
      if(res.data.statusCode===200){
       await dispatch(contactListSuccess(res.data));
      }
      else if(res.data.statusCode!==200){
        await dispatch(contactListFailure(res.data.message)); 
      }
      else{
        await dispatch(contactListFailure("Failed, Please try again later."));
       }
  } catch (err) {
    if (err.response) {
       let errorMessage = 'Something went wrong, Please try again.'
        dispatch(contactListFailure(errorMessage)); 
    } else {
      dispatch(contactListFailure("The service is currently not available"));
    }
  }
};

export const contactListRequest = () => {
  return {
    type: CONTACT_LIST_REQUEST,
  };
};

export const contactListSuccess = (details) => {
  return {
    type: CONTACT_LIST_SUCCESS,
    payload: details,
  };
};
export const contactListFailure = (error) => {
  return {
    type:CONTACT_LIST_FAILURE,
    payload: error,
  };
};