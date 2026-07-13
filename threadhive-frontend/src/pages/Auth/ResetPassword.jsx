import React, { useState } from 'react';
import "./Auth.css";

function ResetPassword({ onResetPassword }) {
  const [form, setForm] = useState({ email: '', oldPassword: '', newPassword: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setError('New password and confirm password do not match.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    onResetPassword(form);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Password</h2>
        {success ? (
          <p className="auth-success">Password reset successful!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <label htmlFor="oldPassword">Old Password</label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              value={form.oldPassword}
              onChange={handleChange}
              placeholder="Old Password"
              required
            />
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit">Reset Password</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
