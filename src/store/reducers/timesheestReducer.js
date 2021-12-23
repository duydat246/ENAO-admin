import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTimesheets = createAsyncThunk(
    "timesheets/timesheetsFetched",
    async () => {
        const response = await axios.get("http://localhost:5000/timesheet");
        return response.data;
    }
);

const timesheetsSlice = createSlice({
    name: "timesheets",
    initialState: {
        allTimesheets: [],
    },
    extraReducers: {
        [getTimesheets.fulfilled]: (state, action) => {
            state.allTimesheets = action.payload;
        },
    },
});

const timesheetsReducer = timesheetsSlice.reducer;

export const timesheetsSelector = (state) =>
    state.timesheetsReducer.allTimesheets;

export default timesheetsReducer;
