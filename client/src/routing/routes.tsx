import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHome from '../auth/UserHome';
import LoginPage from '../pages/public/log-in/login-page';
import SignUpPage from '../pages/public/sign-up/signup-page';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/user' element={<UserHome />} />
      </Routes>
  )
}

export default Routing;