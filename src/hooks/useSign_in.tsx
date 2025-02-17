import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../lib/apiSlice/auth/authSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const useSign_in = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

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

      const response = await login(loginData).unwrap();
    console.log('Login Response:', response); // Debugging log

    const userData = {
      email : response.email,
      username : response.username,
      token : response.token,
    }
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Login Successful!');
      setTimeout(() => {
        navigate ('/home');
    }, 3000);
      
    } catch (error) {
      toast.error('Invalid credentials! Please try again');
      console.error('Login failed:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };


  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
  };
};

export default useSign_in;