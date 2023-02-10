import {
    LINK_CONTACT_TO_CLIENT_REQUEST,
    LINK_CONTACT_TO_CLIENT_SUCCESS,
    LINK_CONTACT_TO_CLIENT_FAILURE,
  } from "../types/linkContactToClientType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LINK_CONTACT_TO_CLIENT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case LINK_CONTACT_TO_CLIENT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case LINK_CONTACT_TO_CLIENT_FAILURE:
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