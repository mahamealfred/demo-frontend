import {
    CREATE_CLIENT_REQUEST,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAILURE,
  } from "../types/createClientType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CLIENT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case CREATE_CLIENT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case CREATE_CLIENT_FAILURE:
        return {
          loading: false,
          details: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;