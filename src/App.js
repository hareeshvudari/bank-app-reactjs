import { React, useCallback, useState } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Onboarding from './components/user/onboarding';
import AdminLogin from './components/admin/login';
import AdminRegister from './components/admin/register';
import AdminOnboarding from './components/admin/onboarding';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboards from './components/dashboards';
import Statements from './components/statement';
import Fundtransfer from './components/fundtransfer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() { 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isclickedNavbarLogo, setIsclickedNavbarLogo] = useState(false);
  const isUserAuthCallback = useCallback((userDetails) => {
    if ((userDetails && userDetails.username === 'admin' && userDetails.password === 'admin') || (userDetails && userDetails.username === 'user' && userDetails.password === 'user')) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      alert('incorrect details!!! please use "admin/user" as username and password')
    }
  }, []);

  const userClickedOnLogoCallback = useCallback((evt) => {
    if (evt) {   
      setIsclickedNavbarLogo(evt);
      console.log('test')
    }
  }, []);  

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} userClickedOnLogoParent={userClickedOnLogoCallback} />
      {isclickedNavbarLogo && <Sidebar />}
      <div>
        <Router>
          <Routes>
            <Route exact path="/login" caseSensitive={false} element={<Login parentisUserAuthCallback={isUserAuthCallback} />} />
            <Route path="/" caseSensitive={false} element={<Login parentisUserAuthCallback={isUserAuthCallback} />} />
            <Route path="/register" caseSensitive={false} element={<Register />} />
            <Route path="/onboarding" caseSensitive={false} element={<Onboarding userClickedOnLogoParent={userClickedOnLogoCallback} />} />
            <Route path="/admin/onboarding" caseSensitive={false} element={<AdminOnboarding userClickedOnLogoParent={userClickedOnLogoCallback} />} />
            <Route path="/admin/login" caseSensitive={false} element={<AdminLogin parentisUserAuthCallback={isUserAuthCallback} />} />
            <Route path="/admin/register" caseSensitive={false} element={<AdminRegister />} />
            <Route path="/dashboards" caseSensitive={false} element={<div ><Dashboards /></div>} />
            <Route path="/statements" caseSensitive={false} element={<div ><Statements /></div>} />
            <Route path="/fundtransfer" caseSensitive={false} element={<div ><Fundtransfer /></div>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
