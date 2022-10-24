import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useCookies } from 'react-cookie'; // useCookies import



const initialState = {
    member: [],
  isLoading: false,
  error: null,
  //members: {},
  // isCheck: false,
  };

  //logout onclick해서 => put한다음 localstorage에 값 삭제 해주고 => window로 보내기.

  export const __userLogin = createAsyncThunk(
    "members/Login",
    async (payload, thunkAPI) => {
      try {
        const data = await axios.post(
          "http://43.201.78.138:8080/api/member/login",payload
          ).then((response)=>{
          if( response.data.success === true){
          return (
            localStorage.setItem("token", response.headers.access_token),
            localStorage.setItem("userid", response.data.data.userid),
            localStorage.setItem("refreshToken", response.headers.refresh_token),
            window.location.replace("List")
             //localStorage.setItem("accesstokenexpiretime", response.headers.accesstokenexpiretime),
          );
        }else if(response.data.error.code == "MEMBER_NOT_FOUND"){
          alert("사용자를 찾을수 없습니다.")
        }else if(response.data.error.code=='WRONG_PASSWORD'){
          alert('비밀번호가 틀렸습니다.')
        }
      }
    );
        return thunkAPI.fulfillWithValue(data);
        //리턴을 제대로해줘야한다. 그래야 reducer로 들어가는데 값이 안들어감.
        //post라 그런가?
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    
  },
  extraReducers: {

    [__userLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogin.fulfilled]: (state, action) => {
      console.log("리듀서",state,action)
      //console.log('사용자는?',action)
      //console.log('state',state,'action',action)
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
      state.member.push(action.payload) ; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

}});



export const { } = membersSlice.actions;
export default membersSlice.reducer;






/*


//헤더로 토큰을보내는걸 저장하는거.=>  api명세서 헤더로 토큰 을받고. 저장해서 localstroage저장
// 요청마다 헤더로 다시 보내는것 => 
import { apis } from "../../shared/api";
export const loginMemberDB = createAsyncThunk(
  "member/login",
  async (payload, thunkAPI) => {
    try {
      await apis.loginMember(payload).then((response) => {
        if (response.data.success === false) {
        } else {
          return (
            thunkAPI.fulfillWithValue(false),
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            localStorage.setItem("refreshToken", response.headers.refreshtoken),
            localStorage.setItem(
              "accesstokenexpiretime",
              response.headers.accesstokenexpiretime
            ),
            localStorage.setItem("nickname", response.data.data.nickname),
           // localStorage.setItem("isKako", response.data.data.isKakao),
            window.location.replace("/wklytodo")
          );
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
      // if (error.response.status === 400 || error.response.status === 404) {
      // }
    }
  }
);

//test
export const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
      setCheck: (state, action) => {
        state.isCheck = action.payload;
      },
    },
    extraReducers: {
      [loginMemberDB.fulfilled]: (state, action) => {
        state.isCheck = action.payload;
      },
      [loginMemberDB.rejected]: (state, action) => {
        //console.log(state,action)
        state.isCheck = action.payload;
      },
      [loginMemberDB.pending]: () => {},
    },
  });

  */