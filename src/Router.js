import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavMain from './NavMain';
import Answer1 from './components/Page1';
import Answer2 from './components/Page2';
import Answer3 from './components/Page3';
import Answer4 from './components/Page4';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavMain />} />
                    <Route path="/Answer1" element={<Answer1 />} />
                    <Route path="/Answer2" element={<Answer2 />} />
                    <Route path="/Answer3" element={<Answer3 />} />
                    <Route path="/Answer4" element={<Answer4 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;