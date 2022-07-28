import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
const rootReducer = combineReducers({
    todoState: todoReducer
})
export default rootReducer;