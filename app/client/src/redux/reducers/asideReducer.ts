import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AsideType } from "../../interface/@types.aside";

const initialState: AsideType = {
  isAsideOpen: true
};

export const AsideSlice = createSlice({
  name: "AsideSlice",
  initialState,
  reducers: {
    toggleAside: (state, action: PayloadAction<boolean>) => {
      state.isAsideOpen = action.payload;
    },
  },
});

export const { toggleAside } = AsideSlice.actions;
export default AsideSlice.reducer;
