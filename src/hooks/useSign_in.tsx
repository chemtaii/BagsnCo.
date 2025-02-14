import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../lib/apiSlice/auth/authSlice';

const useSign_in = () => {
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
      navigate ('/home');
      
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


  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    loadingProgress,
  };
};

export default useSign_in;