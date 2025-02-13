import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../lib/apiSlice/auth/authSlice';

const Sign_in = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);  // Track loading progress

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitLogin = async () => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      // Simulate loading progress
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 10;  // Increment progress by 10%
        });
      }, 300);  // Update progress every 300ms

      await login(loginData).unwrap();
      console.log('Login Successful!');
      
    } catch (error) {
      console.error('Login failed:', error);
    }finally {
        setLoadingProgress(0);  // Reset progress
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };


  return (
    <div className="bg-white dark:bg-black mt-20 h-screen">
      <div className="bg-white h-[400px] w-[500px] text-center shadow-lg m-auto rounded-2xl p-6">
        <h1 className="font-bold text-3xl text-center pb-4">Welcome back!</h1>
        <p className='pb-4'>Enter your credentials to continue shopping with us</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-rows-3 gap-8 mt-2">
            <div>
              <label htmlFor="email" className="inline-block ml-2 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-2 border-gray-200 shadow-lg rounded-xl p-2 w-2/3 ml-2"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="inline-block mb-2 ml-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border-2 border-gray-200 shadow-lg rounded-xl p-2 w-2/3 ml-2"
                required
              />
            </div>

            <div className="flex items-center justify-center mt-1">
              <button
                type="submit"
                className="bg-[#eed6c2] rounded-xl p-2 w-1/2 font-bold" disabled={isLoading}>
                {isLoading ? `Loading... ${loadingProgress}%` : 'LOGIN'}
              </button>
            </div>
            <div className="text-center mb-3">
          <p>
            Don't have an account?{' '}
            <Link to="/sign_up" className="text-blue-500">
              Register Now
            </Link>
          </p>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;