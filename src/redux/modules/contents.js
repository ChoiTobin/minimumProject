import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __insertContent = createAsyncThunk(
    "contents/insert",
    async (payload, thunkAPI) => {
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/gamepost`,
                payload,
                {
                    headers: {
                        'enctype': 'multipart/form-data',
                        'Access_Token': `${localStorage.getItem("token")}`,
                        'Cache-Control': 'no-cache'
                    },
                }
            ).then((response) => {
                console.log("response", response.data);
            });
        } catch (error) {
            console.log("error", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const contentsSlice = createSlice({
    name: "contents",
    initialState: {
        contents: [],
    },
    reducers: {
    },
    extraReducers: {
        [__insertContent.fulfilled]: (state, action) => {
            state.member = action.payload;
        },
        [__insertContent.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const { } = contentsSlice.actions;
export default contentsSlice.reducer;