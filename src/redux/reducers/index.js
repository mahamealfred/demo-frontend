import { combineReducers } from "redux";
import loginReducer from "./loginReducer"; 
import getDocDetailsReducer from "./getDocDetailsReducer";
import rraPaymentReducer from "./rraPaymentReducer";

const allReducers = combineReducers({

     getDocDetails: getDocDetailsReducer,
     rraPayment: rraPaymentReducer,
     login:loginReducer,

     
});

export default allReducers;