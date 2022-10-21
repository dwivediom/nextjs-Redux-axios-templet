import { combineReducers } from "redux";

// Import all reducers
import userReducer from "../reducers/userReducers";

export const rootReducers = combineReducers({
    userReducer: userReducer
})
