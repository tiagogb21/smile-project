import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RegisterType } from "../../interface/@types.register";

const initialState: RegisterType = {
  name: '',
  email: '',
  password: '',
  isSubmitting: false,
  errorMessage: false,
};

export const RegisterSlice = createSlice({
  name: "RegisterSlice",
  initialState,
  reducers: {
    addNameToRegister: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addEmailToRegister: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPasswordToRegister: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {
  addNameToRegister,
  addEmailToRegister,
  addPasswordToRegister
} = RegisterSlice.actions;
export default RegisterSlice.reducer;
