import { GetProducts } from "../api/products";
import { LOAD_PRODUCTS_LIST } from "./types";
export const LoadProducts = () => (dispatch) => {
  GetProducts().then((data) => {
    dispatch({
      type: LOAD_PRODUCTS_LIST,
      payload: data,
    });
  });
};
