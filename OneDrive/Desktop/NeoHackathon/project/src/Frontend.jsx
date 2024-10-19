
import React, { useState } from 'react';
import { BrowserRouter as Routers, Route, Routes, useNavigate } from 'react-router-dom';
import './Frontend.css';
import App from './App';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate('/login');
    } else {
      setError('Invalid user. Please signup first.');
    }
  };


  return (
    <div className="form-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="form-button">Login</button>
      {error && <p className="error-message">{error}</p>}
      <p>Don't have an account? <a href="/signup">Signup here</a></p>
    </div>
  );
}


    

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSignup} className="form-button">Signup</button>
    </div>
  );
}



function Front() {
  return (
    <Routers>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<App />} />
        </Routes>
      </div>
    </Routers>
  );
}

export default Front;
