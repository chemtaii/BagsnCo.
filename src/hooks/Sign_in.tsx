// import React, { useState } from 'react';
// import { useLoginMutation } from '../lib/apiSlice/auth/authSlice';

// const Sign_in = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [login, { isLoading }] = useLoginMutation();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const submitLogin = async () => {
//     try {
//       const loginData = {
//         email: formData.email,
//         password: formData.password,
//       };
//       await login(loginData).unwrap();
//       console.log('Login Successful!');
//       // Optionally, you can redirect the user or update the UI
//       // For example, using React Router:
//       // navigate('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitLogin();
//   };

//   return (
//     <div className="bg-white dark:bg-black mt-20 h-screen">
//       <div className="bg-white h-[400px] w-[500px] shadow-lg m-auto rounded-2xl p-6">
//         <h1 className="font-bold text-3xl text-center pb-8">Welcome back!</h1>
//         <p>Enter your credentials to continue shopping with us</p>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-rows-3 gap-8">
//             <div>
//               <label htmlFor="email" className="inline-block ml-2 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="border-2 border-[#4A4A4A] p-2 w-2/3 ml-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="inline-block mb-2 ml-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="border-2 border-[#4A4A4A] p-2 w-2/3 ml-2"
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-center mt-3">
//               <button
//                 type="submit"
//                 className="bg-[#eed6c2] rounded-xl p-2 w-1/2 text-white font-extrabold" disabled={isLoading}>
//                 {isLoading ? 'Logging in...' : 'LOGIN'}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Sign_in;