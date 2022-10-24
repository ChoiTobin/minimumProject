import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contentsSlice = createSlice({
    name: "contents",
    initialState: {
        contents: [],
    },
    reducers: {
    },
    extraReducers: {
    }
});

export const { } = contentsSlice.actions;
export default contentsSlice.reducer;