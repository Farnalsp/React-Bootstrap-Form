import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false); // State for remember me checkbox

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter, one number

    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters, include at least one letter and one number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { email, password });
      if (isRememberMeChecked) {
      } else {
      }
    }
  };

  const handleRememberMeChange = (e) => {
    setIsRememberMeChecked(e.target.checked);
  };

  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Masukkan Email Anda"
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Masukkan Password Anda"
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={isRememberMeChecked}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe">Ingat Password</label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={Object.keys(errors).length > 0}>
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/" type="submit" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;