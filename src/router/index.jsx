// import React from 'react'
import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Home, About } from "../pages";


export default function RootRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}
