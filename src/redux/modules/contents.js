import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __insertContent = createAsyncThunk(
    "contents/insert",
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/gamepost`,//url

                {
                    ...payload
                }
                ,//data
                {
                    header: {
                        //"Content-Type": "multipart/form-data",
                        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZWg1MTY0IiwiZXhwIjoxNjY2Njc4MjA3LCJpYXQiOjE2NjY2NzY0MDd9.qLltziot-E-dVDPoOTq3ElHhegDTTL38JiV70myVPz0"
                    }
                }//config
            ).then((response) => {
                console.log(response)
                return thunkAPI.fulfillWithValue(response.data)
            })
        } catch (error) {
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