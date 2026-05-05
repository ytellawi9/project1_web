import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder — no backend yet
    alert('Login is not yet functional. This is a placeholder UI.');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="auth-card__label">Welcome back</p>
        <h2>Sign In</h2>
        <p className="auth-card__sub">Access your CineVault account</p>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-input"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="form-btn" onClick={handleSubmit}>
          Sign In
        </button>

        <div className="auth-card__notice">
          ⚠ This form is a UI placeholder. Authentication will be implemented in a future project phase.
        </div>

        <div className="auth-card__footer">
          Don't have an account? <Link to="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
