import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITable, TableState } from "../../interface/@types.table";

const initialState: TableState = {
  schedule: [
    {
      date: '',
      user: '',
      client: '',
      value: '',
      status: '',
    }
  ]
};

export const TableSlice = createSlice({
  name: "AsideSlice",
  initialState,
  reducers: {
    insertDataInSchedule: (state, action: PayloadAction<ITable>) => {
      state.schedule = [...state.schedule, action.payload];
    },
    removeDataFromSchedule: (state, action: PayloadAction<number>) => {
      let getFirstSplice = state.schedule.splice(0, action.payload);
      let getSecondSplice = state.schedule.splice(action.payload);
      state.schedule = [...getFirstSplice, ...getSecondSplice];
    },
  },
});

export const { insertDataInSchedule, removeDataFromSchedule } = TableSlice.actions;
export default TableSlice.reducer;
