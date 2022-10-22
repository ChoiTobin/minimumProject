import { configureStore } from "@reduxjs/toolkit";
import members from "../modules/members.js";
import contents from "../modules/contents.js";

const store = configureStore({
    reducer: {
        members,
        contents,
    },
    //배포 모드일때 리덕스 데브툴 사용 안함
    devTools: process.env.REACT_APP_MOD !== 'production'
});

export default store;
