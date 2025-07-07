import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Save to localStorage
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Registered successfully!');
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
