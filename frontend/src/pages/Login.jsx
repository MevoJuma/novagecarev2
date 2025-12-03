// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { login as loginApi } from '../services/auth';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await loginApi(form);
      const { access, refresh, user } = res.data;

      // Store tokens and user data
      loginUser({ access, refresh, user });

      //Role based navigation
      if (user.role === 'admin') {
        navigate('/admin/AdminDashboard');
      } else if (user.role === 'caregiver') {
        navigate('/caregiver/CaregiverDashboard');
      } else if (user.role === 'elder') {
        navigate('/elder/ElderDashboard');
      } else {
        // Default fallback
        navigate('/dashboard');
      }
    
    } catch (err) {
      setError(err?.response?.data || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
            name="username" 
            value={form.username} 
            onChange={handleChange} 
            placeholder="Username" 
            required
        />
        <input 
            name="password" 
            type="password" 
            value={form.password} 
            onChange={handleChange} 
            placeholder="Password" 
            required
        />
        <button type="submit">Login</button>
      </form>
      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error)}</pre>}
    </div>
  );
}
