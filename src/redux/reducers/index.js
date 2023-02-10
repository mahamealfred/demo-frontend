import { combineReducers } from "redux";
   import createClientReducer from "./createClientReducer";
   import clientListReducer from "./clientListReducer";
   import createContactReducer from "./createContactReducer";
   import contactListReducer from "./contactListReducer";
   import linkContactToClientReducer from "./linkContactToClientReducer";

const allReducers = combineReducers({
     createClient:createClientReducer,
     clientList:clientListReducer,
     createContact:createContactReducer,
     contactList:contactListReducer,
     linkContactToClient:linkContactToClientReducer,
 
});

export default allReducers;