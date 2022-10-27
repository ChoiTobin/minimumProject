import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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



//logout onclick해서 => put한다음 localstorage에 값 삭제 해주고 => window로 보내기.

export const __userLogin = createAsyncThunk(
    "members/Login",
    async (payload, thunkAPI) => {

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/member/login`,
                {
                    userid: payload.userid,
                    pw: payload.pw
                }
            ).then((response) => {
                if (response.data.success === true) {
                    return (
                        localStorage.setItem("token", response.headers.access_token),
                        localStorage.setItem("userid", response.data.data.userid),
                        localStorage.setItem("refreshToken", response.headers.refresh_token),
                        window.location.replace("List")
                        //localStorage.setItem("accesstokenexpiretime", response.headers.accesstokenexpiretime),
                    );
                } else if (response.data.success === false) {
                    alert(response.data.data.message);
                }
                return thunkAPI.fulfillWithValue(response.data);
            }
            );

            //리턴을 제대로해줘야한다. 그래야 reducer로 들어가는데 값이 안들어감.
            //post라 그런가?
        } catch (error) {

            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const membersSlice = createSlice({
    name: "members",
    initialState: {
        member: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: {

        [__userLogin.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__userLogin.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.member.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__userLogin.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
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

