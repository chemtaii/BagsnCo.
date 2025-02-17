import React from 'react'
import { Link } from 'react-router-dom';
import useSign_in from '../hooks/useSign_in';

const Sign_in = () => {
    const {
        formData,
        handleChange,
        handleSubmit,
        isLoading,
    } =useSign_in()

  return (
    <>
    <div className="bg-white dark:bg-black mt-20 h-screen">
    <div className="bg-white h-[400px] w-[500px] text-center shadow-2xl m-auto rounded-2xl p-6 items-center justify-center">
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
              className="bg-[#fce1e6] text-black rounded-xl p-2 w-1/2 font-bold" disabled={isLoading}>
              {isLoading ? `Loading... ` : 'LOGIN'}
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
  </>
  )
}

export default Sign_in
