import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    members: [

    ],
};

export const membersSlice = createSlice({

    name: "members",
    initialState,
    reducers: {

    },

    extraReducers: {

    }
});

export const { } = membersSlice.actions;
export default membersSlice.reducer;