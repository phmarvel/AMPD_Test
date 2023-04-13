import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [thunkMiddleware],
});
