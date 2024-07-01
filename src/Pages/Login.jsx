import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      // refresh na ho form islia prevent default use kia
        e.preventDefault();    
        localStorage.setItem("user",username)
        localStorage.setItem("password",password) 
        alert("You're Successfully Login");
        // Redirect to Cart page
        navigate('/cart');
    };

    return (
        <>
        <div>   
        <div class="w-80 flex-shrink-0 m-auto text-center">
      <a class="flex title-font font-medium items-center justify-center text-black">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxa7Qj9Ly5k4hktbOCG6uUCIePS5FLQRQDcWAdM0inw&s" alt=""  className="w-10 h-10 text-white rounded-full my-4"/>
        <span class="text-4xl">Global Goods</span>
      </a>
    </div>
        </div>
        <div className="my-10 bg-white flex flex-col justify-center items-center">
            <div className="w-full max-w-md p-8 bg-black shadow-md rounded-md text-white">
                <h1 className="text-3xl font-bold text-center mb-4">Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-indigo-500"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-indigo-500"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-amber-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};
