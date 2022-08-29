import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import scheduleLogin from "../reducers/loginReducer";
import scheduleRegister from "../reducers/registerReducer";
import scheduleAside from "../reducers/asideReducer";

export const store = configureStore({
  reducer: {
    login: scheduleLogin,
    register: scheduleRegister,
    aside: scheduleAside,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
