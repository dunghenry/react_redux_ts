import { Reducer, AnyAction } from "@reduxjs/toolkit";
import { TodoState } from "./slices/todoSlice";
import type { CombinedState } from "@reduxjs/toolkit"
const logger = (reducer: Reducer<CombinedState<{todoState: TodoState}>, AnyAction>) => {
    return (prevState: CombinedState<any>, action: AnyAction) => {
        console.group(action.type)
        console.log("Action type: ", action.type);
        console.log("PrevState: ", prevState);
        const newState = reducer(prevState, action);
        console.log("NewState: ", newState);
        console.groupEnd();
        return newState;
    }
}
export default logger;