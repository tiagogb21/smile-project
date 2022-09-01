import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ButtonCloseType } from "../../interface/closeButton.interface";

const initialState: ButtonCloseType = {
  buttonClose: true,
};

export const ButtonCloseSlice = createSlice({
  name: "ButtonCloseSlice",
  initialState,
  reducers: {
    toggleButton: (state, action: PayloadAction<boolean>) => {
      state.buttonClose = action.payload;
    },
  },
});

export const { toggleButton } = ButtonCloseSlice.actions;
export default ButtonCloseSlice.reducer;
