import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITable, TableState } from "../../interface/table.interface";
import { scheduleData } from '../../utils/data';

const initialState: TableState = {
  schedule: [scheduleData]
};

export const TableSlice = createSlice({
  name: "AsideSlice",
  initialState,
  reducers: {
    insertDataInSchedule: (state, action: PayloadAction<ITable>) => {
      state.schedule = [...state.schedule, action.payload];
    },
    removeDataFromSchedule: (state, action: PayloadAction<number>) => {
      const getFirstSplice = state.schedule.splice(0, action.payload);
      const getSecondSplice = state.schedule.splice(action.payload);
      state.schedule = [...getFirstSplice, ...getSecondSplice];
    },
    cleanSchedules: (state) => {
      state.schedule = [];
    }
  },
});

export const {
  insertDataInSchedule,
  removeDataFromSchedule,
  cleanSchedules
} = TableSlice.actions;
export default TableSlice.reducer;
