import axios from "axios";

import {
    GET_DOC_DETAILS_REQUEST,
    GET_DOC_DETAILS_SUCCESS,
    GET_DOC_DETAILS_FAILURE,
  } from "../types/getDocDetailsType";
  
export const getDocDetailsAction = (details) => async (dispatch) => {
  try {
    dispatch(getDocDetailsRequest());
    const docId=details.docId;
    const Url=`https://api.0360.money/api/goverment-service/rra-service/doc-id-validation/${docId}`;
    const res = await axios.get(Url,{
  //params:{ rra_doc_id_ref:docId },
   }, {
    withCredentials: true,
    headers:{
      "Accept":"application/json",
    "Content-Type": "application/json",
  },
   });
    
    if(res.data.statusCode===200){
     await dispatch(getDocDetailsSuccess(res.data));
    }
    else{
      await dispatch(getDocDetailsFailure(res.data.message));
     }
  } catch (err) {
      if( err.response.data.statusCode===404 ) {
        dispatch(getDocDetailsFailure(err.response.data.message)); 
    } 
    else {
      dispatch(getDocDetailsFailure("The service is currently not available"));
    }
  }
};

export const getDocDetailsRequest = () => {
  return {
    type:  GET_DOC_DETAILS_REQUEST,
  };
};

export const getDocDetailsSuccess = (details) => {
  return {
    type:  GET_DOC_DETAILS_SUCCESS,
    payload: details,
  };
};
export const getDocDetailsFailure = (error) => {
  return {
    type:  GET_DOC_DETAILS_FAILURE,
    payload: error,
  };
};