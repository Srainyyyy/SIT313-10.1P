import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage'; 
import PlansPage from './components/PlansPage';
import PaymentPage from './components/PaymentPage';
import PostPage from './components/PostPage';
import PremiumTrialPage from './components/PremiumTrialPage'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/premium-trial" element={<PremiumTrialPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
