import React, { useState } from 'react';
import "./Auth.css";
import loginImage from '../../assets/login-side.jpg';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    window.alert('Login successful!');
  };

  return (
    <div className="auth-container">
      <div className="auth-split">
        <div className="auth-split-form">
          <h2>Login</h2>
          <p className="auth-subtitle">Sign in to your ThreadHive account</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              required
            />
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="auth-split-image">
          <img src={loginImage} alt="ThreadHive workspace" />
        </div>
      </div>
    </div>
  );
}

export default Login;