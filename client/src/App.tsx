import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './auth/UserHome';
import Login from './public/LoginPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
