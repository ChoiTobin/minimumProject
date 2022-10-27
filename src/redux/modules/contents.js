import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

//---------------------현홍 시작------------------------------------------------------------------------------


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
//----------------------현홍 끝-----------------------------------------------------------------------------


export const __getList = createAsyncThunk(
    "contents/__getList",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/showpost/recruittrue`
            );

            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.code);
        }
    }
);

export const __getListDone = createAsyncThunk(
    "contents/__getListDone",
    async (payload, thunkAPI) => {

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/showpost/recruitfalse`
            );
            //db.json으로 데이터값 넣어서 먼저해보고
            //`${process.env.REACT_APP_API_URL}/api/showpost/recruittrue`
            //db.json넣기
            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.code);
        }
    }
);


export const __getDetailOne = createAsyncThunk(
    "contents/__getDetailOne",
    async (payload, thunkAPI) => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/showpost/${payload}`);
            //db.json으로 데이터값 넣어서 먼저해보고
            //`${process.env.REACT_APP_API_URL}/api/showpost/recruittrue` 나중에넣기
            //db.json넣기

            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.code);
        }

    }
);


export const ___Join = createAsyncThunk(
    "contents/Join",
    async (payload, thunkAPI) => {
        try {
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/api/gamepost/recruit/${payload.postId}`,
                {
                    inGameNickname: payload.Nickname
                },
                {
                    headers: {
                        //'Content-Type': 'application/json',
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            ).then((response) => {
                console.log("리스폰스Join", response)
                return thunkAPI.fulfillWithValue(response)
            })
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)




export const __delete = createAsyncThunk(
    "contents/delete",
    async (payload, thunkAPI) => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/gamepost/recruit/${payload.postId}`
                , {
                    headers: {
                        'Access_Token': `${localStorage.getItem("token")}`,
                    },
                }
            ).then((response) => {
                return thunkAPI.fulfillWithValue(response)
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
//참가취소


export const __getSearch = createAsyncThunk(
    "contents/__getSearch",
    async (payload, thunkAPI) => {
        try {
            await axios.get(
                `${process.env.REACT_APP_API_URL}/api/showpost/search?gameName=${payload}`
            ).then((response) => {
                return thunkAPI.fulfillWithValue(response.data.data)
            })
        } catch (e) {
            return thunkAPI.rejectWithValue(e.code);
        }
    }
);
//아직 안함. 검색창








//---------------------------------contentsSlice-----------------------------------------------------------------------------------
export const contentsSlice = createSlice({
    name: "contents",
    initialState: {
        contents: [],
        myPost: [],
        myRecruit: [],
        contentsDone: [],
        contentSearch: [],
        getDetailOne: [],
        putJoin: [],
        deleteJoin: [],
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
        },
        async searchPost(state, action) {
            await axios.get(
                `${process.env.REACT_APP_API_URL}/api/showpost/search?gameName=${action.payload}`
            ).then((response) => {
                state.contents = response.data.data
            })
        }
    },
    extraReducers: {

        //---------------------현홍 시작------------------------------------------------------------------------------
        //__insertContent
        [__insertContent.fulfilled]: (state, action) => {
            state.member = action.payload;
        },
        [__insertContent.rejected]: (state, action) => {
            state.error = action.payload;
        },
        //__getMyPost
        [__getMyPost.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getMyPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.myPost = action.payload.myGamePostList.length < 1 ? [] : action.payload.myGamePostList;
            state.myRecruit = action.payload.myRecruitList.length < 1 ? [] : action.payload.myRecruitList;
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
        //---------------------현홍 끝------------------------------------------------------------------------------

        [__getList.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getList.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.contents = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getList.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },

        //
        [__getListDone.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getListDone.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.contentsDone = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.

        },
        [__getListDone.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        //

        [__getSearch.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log("action.payload", action.payload)
            state.contents = action.payload; //여기어때
        },
        [__getSearch.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        //

        [__getDetailOne.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getDetailOne.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.getDetailOne = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.

        },
        [__getDetailOne.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        [___Join.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [___Join.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.putJoin = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.

        },
        [___Join.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        [__delete.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__delete.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
            state.deleteJoin = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.

        },
        [__delete.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },

    }
});

export const { getMyPost, searchPost } = contentsSlice.actions;
export default contentsSlice.reducer;
