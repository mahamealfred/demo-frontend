import {
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAILURE,
  } from "../types/createContactType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case CREATE_CONTACT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case CREATE_CONTACT_FAILURE:
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