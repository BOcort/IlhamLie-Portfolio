// import React from 'react'
import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Home, About, Project, Contact } from "../pages";


export default function RootRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project /> } />
                <Route path="/contact" element={<Contact /> } />
            </Route>
        </Routes>
    )
}
