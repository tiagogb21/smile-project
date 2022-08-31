import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Calculator from '../components/Calculator';
import ClientInfo from '../templates/ClientInfo';

import Login from '../templates/Login';
import MainPage from '../templates/MainPage';
import Register from '../templates/Register';
import RegisterPatient from '../templates/RegisterPatient';

const PathRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/register-patient" element={<RegisterPatient />}/>
        <Route path="/client-info" element={<ClientInfo />}/>
      </Routes>
    </Router>
  );
}

export default PathRouter;
