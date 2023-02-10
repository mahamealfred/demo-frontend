import {
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAILURE,
  } from "../types/contactListType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CONTACT_LIST_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case CONTACT_LIST_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case CONTACT_LIST_FAILURE:
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