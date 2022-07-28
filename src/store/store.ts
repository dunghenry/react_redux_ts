import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "./logger";
const store = configureStore({
    reducer: logger(rootReducer),
})
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;