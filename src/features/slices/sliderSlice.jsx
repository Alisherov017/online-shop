import { sliderData } from "../../assets/data/dummyData";
import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 1,
    length: sliderData.length,
  },
  reducers: {
    nextSlide(state, action) {
      console.log(action.payload, "action");
      console.log(state, "state");
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    precSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide() {},
  },
});

export const { nextSlide, precSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
