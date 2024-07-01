import React from 'react'
import {Link, NavLink, useNavigate } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({cartlength}) => {
  const navigate = useNavigate("");
  const user= localStorage.getItem("user")
  const password = localStorage.getItem("password")

  const logout=()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("password")
    alert("You're Logout Successfully");
    navigate("/");
  }

  return (
    <div>
      <header className="text-white body-font nav">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxa7Qj9Ly5k4hktbOCG6uUCIePS5FLQRQDcWAdM0inw&s" alt=""  className="w-10 h-10 text-white rounded-full"/>
      <span className="ml-3 text-xl">Global Goods</span>
    </Link >
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to='/' className="mr-5 hover:text-white">Home</NavLink>
      <NavLink to='/blogs' className="mr-5 hover:text-white">Categories</NavLink>
      <NavLink to='/about' className="mr-5 hover:text-white">About</NavLink>
      {/* <NavLink to='/contact' className="mr-5 hover:text-white">Contact</NavLink> */}
      <NavLink to='/login' className="mr-5 hover:text-white">Login</NavLink>
    {user? <button onClick={logout} to='/login' className="mr-5 hover:text-white">Logout</button>:""}  
    </nav>
    <Link to ={"/cart"} ><button className="relative inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><FaCartPlus style={{fontSize:"25px"}} />
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 absolute -top-4 -right-2">{cartlength}</span>
    </button>
    </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar
