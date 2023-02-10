import {
    CLIENT_LIST_REQUEST,
    CLIENT_LIST_SUCCESS,
    CLIENT_LIST_FAILURE,
  } from "../types/clientListType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CLIENT_LIST_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case CLIENT_LIST_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case CLIENT_LIST_FAILURE:
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