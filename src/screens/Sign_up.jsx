import React from 'react'

const Sign_up = () => {
  return (
    <div className="bg-white dark:bg-black pt-14 h-screen">
        
        <div className="bg-white h-[600px] w-[500px] shadow-lg m-auto rounded-2xl p-6">
      <h1 className="font-bold text-3xl text-[] text-center pb-8">Register Now</h1>
      <form>
        <div className="grid grid-rows-6 gap-8">
        <div>
        <label for="username" className="inline-block ml-2 mb-2">Username</label>
        <input type="text" placeholder="Enter your preferred username" className="border-2 border-[#4A4A4A] rounded-lg p-2 w-2/3 ml-2"/>
        </div>

        <div>
        <label for="email" className="inline-block mb-2 ml-2">Email</label>
        <input type="email" placeholder="Enter your email address" className="border-2 border-[#4A4A4A] rounded-lg p-2 w-2/3 ml-10"/>
        </div>

        <div>
        <label for="password" className="inline-block mb-2 ml-2">Password</label>
        <input type="password" placeholder="Enter your password" className="border-2 border-[#4A4A4A] rounded-lg p-2 w-2/3 ml-2"/>
        </div>

        <div class="flex items-center justify-center mt-3">
        <button className="bg-[#eed6c2] rounded-xl p-2 w-1/2 text-white font-extrabold">
                  SUBMIT
                </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Sign_up