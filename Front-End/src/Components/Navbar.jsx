import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userProfile from "../userProfile.png";

import noteContext from "../context/notes/NoteContext";
const Navbar = (props) => {
    const context = useContext(noteContext)
    //geting the getUserdata function from notestate context api
    const { getUserdata, userName } = context;
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }
    useEffect(() => {
        getUserdata();
    })


    //for mobile device function
    const [toggle, setToggle] = useState('false')
    const toggleMenu = () => {
        if (toggle === 'true') {
            setToggle('false');
        }
        else {
            setToggle('true')
        }
    }
    return (
        <>


            {/* navbar for large display */}
            <nav className="invisible  md:visible fixed top-0 w-screen bg-white shadow dark:bg-gray-800 z-10 flex justify-between items-center">

                {/* home and other  */}
                <div className="container w-2/6 flex items-center justify-center py-6 mx-auto text-gray-600 capitalize dark:text-gray-300 ">
                    <Link to="/home" className={`p-1 text-gray-800 dark:text-gray-200 border-b-2 ${location.pathname === "/home" ? "border-blue-500" : "border-transparent"}  hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6`}
                    >Home</Link>

                    <Link to="/features" className={`p-1 text-gray-800 dark:text-gray-200 border-b-2 ${location.pathname === "/features" ? "border-blue-500" : "border-transparent"}  hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6`}>features</Link>

                    <Link to="/about" className={`p-1 text-gray-800 dark:text-gray-200 border-b-2 ${location.pathname === "/about" ? "border-blue-500" : "border-transparent"}  hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6`}>About</Link>

                    {/* idea when user click on login or singup then hide the navbar */}
                </div>

                {/* login signup and userinfo */}

                {/* if the user is login then we show logout button else we show login and signup button */}
                {!localStorage.getItem('token') ?
                    <div className="  min-w-[12%] w-auto flex ">
                        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                            Login
                        </Link>
                        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            SignUp
                        </Link>
                    </div> :
                    <div className="  flex justify-evenly w-1/6">
                        <div className=" flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 items-center">
                            <img className="w-8 h-8 rounded-full" src={userProfile} alt="user icon" />
                            <span className="text-white mx-2">{userName}</span>
                        </div>
                        <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>}

            </nav>


            {/* navbar for mobile  */}

            <nav className="md:hidden bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <div className="flex md:order-2  w-full justify-between">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 dark:hover:bg-gray-700 ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleMenu}>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {/* login signup and userinfo */}

                        {/* if the user is login then we show logout button else we show login and signup button */}
                        {!localStorage.getItem('token') ?
                            <div className=" min-w-4/5 w-auto flex ">

                            </div> :
                            <div className="  flex justify-end w-full items-center">
                                <div className=" flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 items-center">
                                    <img className="w-8 h-8 rounded-full" src={userProfile} alt="user icon" />
                                    <span className="text-white mx-2">{userName}</span>
                                </div>
                                <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 h-8 rounded">
                                    Logout
                                </button>
                            </div>}
                    </div>

                    {/* popup menu  */}
                    <div className={` ${toggle === 'true' ? 'visible' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li onClick={toggleMenu}>
                                <Link to="/home" className={`block py-2 pl-3 pr-4  ${location.pathname === "/home" ? "text-white" : "text-slate-400"} brounded`} aria-current="page">Home</Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link to="/features" className={`block py-2 pl-3 pr-4  ${location.pathname === "/features" ? "text-white" : "text-slate-400"} rounded `}>features</Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link to="/about" className={`block py-2 pl-3 pr-4  ${location.pathname === "/about" ? "text-white" : "text-slate-400"} rounded `}>About</Link>
                            </li>
                            {!localStorage.getItem('token') ?
                                <>
                                    <li onClick={toggleMenu}>
                                        <Link to="/login" className={`block py-2 pl-3 pr-4 ${location.pathname === "/login" ? "text-white" : "text-slate-400"} rounded `}>
                                            Login
                                        </Link>
                                    </li>
                                    <li onClick={toggleMenu}>
                                        <Link to="/signup" className={`block py-2 pl-3 pr-4 ${location.pathname === "/signup" ? "text-white" : "text-slate-400"} rounded `}>
                                            SignUp
                                        </Link>
                                    </li>
                                </> :
                                <>

                                </>}

                        </ul>
                    </div>

                </div>
            </nav>

        </>
    );
}
export default Navbar;