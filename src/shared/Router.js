import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginJoin from "../pages/LoginJoin";
import Detail from "../pages/Detail";
import List from "../pages/List";
import MyList from "../pages/MyList";
import Write from "../pages/Write";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginJoin />} />
                <Route path="/Detail/:id" element={<Detail />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/List" element={<List />} />
                <Route path="/MyList" element={<MyList />} />
                <Route path="/Write" element={<Write />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;


