import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCard from './StatsCard';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="mr-32">
          <img src="/SideImg.png" className='w-[1000px] h-[700px]' />
        </div>
        <div className="w-full md:w-1/2 flex justify-center mr-20">
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;