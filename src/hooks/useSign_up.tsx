import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../lib/apiSlice/auth/authSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const useSign_up = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const submitRegister = async () => {
    try {

      const registerData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      await register(registerData).unwrap();
      toast.success('Registration Successful! Redirecting to login...');
      setTimeout(() => {
        navigate ('/sign_in');
    }, 3000);
      
    } catch (error) {
        toast.error('Registration failed. Please try again.');
      console.error('Registration failed:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRegister();
  };


  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
  };
};

export default useSign_up;