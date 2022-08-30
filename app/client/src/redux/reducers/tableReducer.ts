import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITable, TableState } from "../../interface/@types.table";

const initialState: TableState = {
  schedule: [
    {
      id: 1,
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
      state.schedule = state.schedule.filter((data) => data.id !== action.payload);
    },
  },
});

export const { insertDataInSchedule, removeDataFromSchedule } = TableSlice.actions;
export default TableSlice.reducer;
