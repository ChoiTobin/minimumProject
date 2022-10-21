import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/login.js";
import content from "../modules/content.js";

const store = configureStore({
    reducer: {
        login,
        content,
    },
    //배포 모드일때 리덕스 데브툴 사용 안함
    devTools: process.env.REACT_APP_MOD !== 'production'
});

export default store;
