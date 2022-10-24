import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//아이디 중복확인 api
//"/member/idck"
//{ "userid" :"fad"}
export const __userIdCheck = createAsyncThunk(
    "members/userIdCheck",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/member/idck`,
                {
                    userid: payload
                }
            );
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __insertMember = createAsyncThunk(
    "members/signup",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/member/signup`,
                {
                    userid: payload.id,
                    pw: payload.pw,
                    name: payload.name
                });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

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
        //-__userIdCheck-
        [__userIdCheck.fulfilled]: (state, action) => {
            state.isIdCheck = action.payload;
        },
        [__userIdCheck.rejected]: (state, action) => {
            state.error = action.payload;
        },
        //-__insertMember-
        [__insertMember.fulfilled]: (state, action) => {
            state.isInsert = action.payload;
            state.isIdCheck = undefined;
        },
        [__insertMember.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const { } = membersSlice.actions;
export default membersSlice.reducer;