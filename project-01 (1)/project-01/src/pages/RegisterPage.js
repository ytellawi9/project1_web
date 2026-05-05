import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Registration is not yet functional. This is a placeholder UI.');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="auth-card__label">Join CineVault</p>
        <h2>Register</h2>
        <p className="auth-card__sub">Create your account to start tracking films</p>

        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="form-input"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

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
            placeholder="Min. 8 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            className="form-input"
            placeholder="Repeat your password"
            value={formData.confirm}
            onChange={handleChange}
          />
        </div>

        <button className="form-btn" onClick={handleSubmit}>
          Create Account
        </button>

        <div className="auth-card__notice">
          ⚠ This form is a UI placeholder. Registration will be implemented in a future project phase.
        </div>

        <div className="auth-card__footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
