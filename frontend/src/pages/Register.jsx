import React, { useState, useContext } from "react";
import { register as registerApi, login as loginApi } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '', phone: '', role:'elder' });
    const [error, setError] = useState(null);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await registerApi(form);
            // Auto-login after successful registration
            const loginRes = await loginApi({ username: form.username, password: form.password });
            loginUser({ access: loginRes.data.access, refresh: loginRes.data.refresh }, loginRes.data.user);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data || 'Registration failed');
        }   

    };

    return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required/>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email"/>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required/>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone"/>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="elder">Elder</option>
          <option value="caregiver">Caregiver</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {error && <pre style={{ color: 'red' }}>{JSON.stringify(error)}</pre>}
    </div>
  );
}