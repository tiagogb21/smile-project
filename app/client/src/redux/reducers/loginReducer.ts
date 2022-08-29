import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoginType } from "../../interface/@types.login";

const initialState: LoginType = {
  email: '',
  password: '',
  isSubmitting: false,
  errorMessage: false,
};

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    addEmailToLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPasswordToLogin: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { addEmailToLogin, addPasswordToLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
