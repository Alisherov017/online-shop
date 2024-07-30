import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
import { useDispatch } from "react-redux";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(localStorage.getItem("filteredData")) || storeData,
    singleProduct: JSON.parse(localStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter((item) => item.type === action.payload);
        state.filteredProducts = filter;
        console.log(filter, "filter");

        const saveState = JSON.stringify(filter);
        localStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        localStorage.setItem("oneProduct", saveState);
        console.log(oneProduct, "oneProduct");
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
