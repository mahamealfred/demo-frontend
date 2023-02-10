import axios from "axios";
import {
    CLIENT_LIST_REQUEST,
    CLIENT_LIST_SUCCESS,
    CLIENT_LIST_FAILURE,
  } from "../types/clientListType";
  


export const clientListAction = () => async (dispatch) => {
  try {
    dispatch(clientListRequest());
    const Url='http://localhost:8000/api/client';
    const res = await axios.get(Url,{},{
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
 },

   });
   console.log("list of client :",res)
      if(res.data.statusCode===200){
       await dispatch(clientListSuccess(res.data));
      }
      else if(res.data.statusCode!==200){
        await dispatch(clientListFailure(res.data.message)); 
      }
      else{
        await dispatch(clientListFailure("Failed, Please try again later."));
       }
  } catch (err) {
    if (err.response) {
       let errorMessage = 'Something went wrong, Please try again.'
        dispatch(clientListFailure(errorMessage)); 
    } else {
      dispatch(clientListFailure("The service is currently not available"));
    }
  }
};

export const clientListRequest = () => {
  return {
    type: CLIENT_LIST_REQUEST,
  };
};

export const clientListSuccess = (details) => {
  return {
    type: CLIENT_LIST_SUCCESS,
    payload: details,
  };
};
export const clientListFailure = (error) => {
  return {
    type:CLIENT_LIST_FAILURE,
    payload: error,
  };
};