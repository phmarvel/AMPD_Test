import axios from "axios";

export const GetProducts = async () => {
  var result = await axios.get("https://dummyjson.com/products");

  return result.data.products;
};
