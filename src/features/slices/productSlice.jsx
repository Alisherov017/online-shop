import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(localStorage.getItem("filteredData")) || storeData,
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
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
