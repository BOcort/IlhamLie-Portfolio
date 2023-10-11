// import React from 'react'
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
export default function header() {
    return (
        <div id="header" className=" h-12 font-mono text-white">
            <div id="container" className="h-full w-5/6 mx-auto bg-black max-md:w-11/12">
                <div id="header-icon" className=" w-1/5 h-full float-left max-md:w-2/5 max-sm:w-3/5">
                    <NavLink to={"/"} className=" h-full flex items-center justify-center text-center hover:bg-white hover:text-black rounded-sm active:ml-4 active:w-11/12 duration-50">
                        <h1 className=" text-2xl max-md:text-lg">My Portfolio</h1>
                    </NavLink>
                </div>
                <div id="header-bars" className="h-full w-1/5 float-right md:hidden">
                    <button className=" m-auto relative h-full flex items-center justify-center w-3/5 hover:bg-white hover:text-black rounded-sm active:w-1/2 active:h-3/4 active:duration-300 ease-out"><FaBars/></button>
                </div>
                <div id="header-list" className="h-full float-right flex max-md:hidden">
                    <NavLink to={"/about"} className="h-full w-24 flex items-center justify-center hover:bg-white hover:text-black rounded-sm active:w-1/2 active:h-3/4 active:duration-300 ease-out">
                        <h1 className=" text-lg">About Me</h1>
                    </NavLink>
                    <NavLink to={"/project"} className="h-full w-36 flex items-center justify-center hover:bg-white hover:text-black rounded-sm active:w-1/2 active:h-3/4 active:duration-300 ease-out">
                        <h1 className=" text-lg">The Project</h1>
                    </NavLink>
                    <NavLink to={"/contact"} className="h-full w-24 flex items-center justify-center hover:bg-white hover:text-black rounded-sm active:w-20 active:h-3/4 active:duration-300 ease-out">
                        <h1 className=" text-lg">Contact</h1>
                    </NavLink>
                </div>
                
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
