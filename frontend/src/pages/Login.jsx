// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  // eslint-disable-next-line no-unused-vars
  const [loginData, setLoginData] = useState([]);
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:5000/register')
      .then((res) => setLoginData(res.data))
      .catch((err) => console.error(err))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get('http://localhost:5000/register'); // fetch all users
      const users = res.data;

      const matchedUser = users.find(
        (user) => user.email === form.email && user.password === form.password
      );
      console.log

      if (matchedUser) {
        localStorage.setItem('user', JSON.stringify(matchedUser));
        navigate('/profile');
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Try again.");
    }
  };



  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" name='email' className="form-control" placeholder="Enter email" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name='password' className="form-control" placeholder="Enter password" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
        <label>don't have an account?</label><Link to='/register' className='ms-2'>Sign up</Link>
      </form>
    </div>
  );
}

export default Login;
