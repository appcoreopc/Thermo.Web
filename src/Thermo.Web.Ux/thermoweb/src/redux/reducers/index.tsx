import { combineReducers } from "redux";
import { smtpReducer } from "./stmpreducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({ 
     stmpConfig : smtpReducer, 
     userSetup : userReducer });

export type Rootstate = ReturnType<typeof rootReducer>
