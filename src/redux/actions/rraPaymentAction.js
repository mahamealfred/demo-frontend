import axios from "axios";
import {
    RRA_PAYMENT_REQUEST,
    RRA_PAYMENT_SUCCESS,
    RRA_PAYMENT_FAILURE,
  } from "../types/rraPaymentType";
  
export const rraPayamentAction = (details,username,password) => async (dispatch) => {
  try {
    dispatch(rraPaymentRequest());
    const {bankName}=details
    const {rraRef}=details
    const {tin}=details
    const {taxPayerName}=details
    const {taxTypeDesc}=details
    const {taxCenterNo}=details
    const {taxTypeNo}=details
    const {assessNo}=details
    const {rraOrginNo}=details
    const {amountToPay}=details
    const {descId}=details
    const {payerPhoneNumber}=details
    const {brokering}=details
    // const {userGroup}=details
    //const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
    let basicAuth='Basic ' + btoa(username + ':' + password);
   // const Url='https://agentweb.mobicash.rw/api/agent/goverment-services/rra/rest/v.4.14.01/payment';
    const Url="http://localhost:8000/api/goverment-service/rra-service/rra-payment";
    const res = await axios.post(Url,{
        bankName:bankName,
        rraRef:rraRef,
        tin:tin,
        taxPayerName:taxPayerName,
        taxTypeDesc:taxTypeDesc,
        taxCenterNo:taxCenterNo,
        taxTypeNo:taxTypeNo,
        assessNo:assessNo,
        rraOriginNo:rraOrginNo,
        amountToPay:amountToPay,
        descId:descId,
        payerPhone:payerPhoneNumber,
      //  userGroup:userGroup,
        brokering:brokering
        
   },{
    withCredentials: true,
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
    'Authorization': + basicAuth,
 },
  auth: {
    username,
    password
  }
   });
   
      if(res.data.statusCode===200){
       await dispatch(rraPaymentSuccess(res.data));
      }
    else{
        await dispatch(rraPaymentFailure(res.data.message));
       }
   
  } catch (err) {
    if ( err.response ) {
      dispatch(rraPaymentFailure(err.response.data.message)); 
  } 
  else {
    dispatch(rraPaymentFailure("The service is currently not available"));
  }
  }
};

export const rraPaymentRequest = () => {
  return {
    type: RRA_PAYMENT_REQUEST,
  };
};

export const rraPaymentSuccess = (details) => {
  return {
    type: RRA_PAYMENT_SUCCESS,
    payload: details,
  };
};
export const rraPaymentFailure = (error) => {
  return {
    type: RRA_PAYMENT_FAILURE,
    payload: error,
  };
};