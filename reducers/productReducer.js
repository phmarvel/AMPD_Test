import { LOAD_PRODUCTS_LIST } from "../actions/types";
const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
