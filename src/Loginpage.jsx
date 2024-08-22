import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage1.css';
import loginBanner from './Images/login_banner.jpg'; 
import partnerlogo from './Images/partners_logo.png';
import msafelogo from './Images/Smartmsafe.png';
import contractologo from './Images/Contracto-logo.png' 


const LoginPage = () => {
  // State hooks for managing form input data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log('Data:', data);

      if (!data.success) {
        navigate('/Dashboard');//Replace this afterwards
        
      } else {
        alert(data.message);
      }
    } catch (error) {
      // console.error('Login Failed:', error);
      // alert('Login failed. Please try again later.');
    }
  };
  
  return (
    <div className="login-container">
      <div className="left-section" style={{ backgroundImage: `url(${loginBanner})` }}>
        <img src= {contractologo} alt="Msafe-logo" className="login-logo"/>
      </div>
      <div className="right-section">
        <div className="form-container">
          <form className = "form" onSubmit={handleLogin}>
            <label htmlFor="Login" className="form-label login">Login</label>
            <div className= "form-group">
             <label htmlFor="email" className="form-data">EMAIL ID</label>
              <input 
                type="email" 
                id="email" 
                className= "form-input" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-data">PASSWORD</label>
              <input 
                type="password" 
                id="password" 
                className="form-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className = "checkbox-container">
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                />
                <span className='checkmark'></span>
                Remember Password
              </label>
            </div>
            
            <div className="button-container">
              <button type="submit" className="login-btn">LOGIN</button>
              <button 
                type="button" 
                className="forgot-password"
                onClick={() => {/* Forgot Password Logic */}}
              >
                FORGOT PASSWORD
              </button>
            </div>
          </form>
        </div>
        {/* <div className="footer">    
            <img src= {contractologo} alt="Partner Logo"/>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
