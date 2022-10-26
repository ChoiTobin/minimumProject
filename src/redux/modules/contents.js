import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMyPost = createAsyncThunk(
    "contents/myPost",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/myPost`,
                {
                    headers: {
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            )

            if (response.data.success) {
                return thunkAPI.fulfillWithValue(response.data.data);
            } else {
                return thunkAPI.rejectWithValue(response.data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __insertContent = createAsyncThunk(
    "contents/insert",
    async (payload, thunkAPI) => {
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/gamepost`,
                payload,
                {
                    headers: {
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            ).then((response) => {
                if (response.data.success) {
                    alert("글 작성 성공");
                    window.location.replace("/MyList");
                } else {

                    alert("글 작성 실패\n관리자에게 문의하세요.");
                }
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __deleteContent = createAsyncThunk(
    "contents/delete",
    async (payload, thunkAPI) => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/gamepost/${payload}`,
                {
                    headers: {
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            ).then((response) => {
                if (response.data.success) {
                    //삭제 성공
                    return thunkAPI.fulfillWithValue(payload);
                }
            })
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



//---------------------------------contentsSlice-----------------------------------------------------------------------------------
export const contentsSlice = createSlice({
    name: "contents",
    initialState: {
        contents: [],
        myGamePostList: [],
        myRecruitList: [],
        isLoading: true,
    },
    reducers: {
        //나중에 테스트 해볼 일
        async getMyPost(state, action) {
            await axios.get(
                `${process.env.REACT_APP_API_URL}/api/myPost`,
                {
                    headers: {
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            ).then((response) => {
                state.myPost = response.data.data.myGamePostList;
                state.myRecruit = response.data.data.myRecruitList;
            });
        }
    },
    extraReducers: {
        //__getMyPost
        [__getMyPost.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getMyPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.myPost = action.payload.myGamePostList;
            state.myRecruit = action.payload.myRecruitList;
        },
        [__getMyPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //__deleteContent
        [__deleteContent.fulfilled]: (state, action) => {
            state.myPost.splice(action.payload, 1);
        },
        [__deleteContent.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const { getMyPost } = contentsSlice.actions;
export default contentsSlice.reducer;