// src/pages/Register.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Register() {

  const [formdata, setFormData] = useState({ name: '', email: '', password: '', mobile: "", plan: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('')

    try {
      await axios.post('http://localhost:5000/register', formdata);
      setStatus("Registerd Successfully")
      setFormData({ name: '', email: '', password: '', mobile: "", plan: '' })
    }
    catch (err) {
      setStatus("Invalid details", err);
    }

  }
  useEffect(() => {
    axios.get('http://localhost:5000/register')
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <div className='position-relative'>
        <img src="/black-white-photo-muscular-build-man-using-sports-chalk-while-before-lifting-barbell-weight-training-gym.jpg" alt="" className='img-fluid' style={{ height: "95vh", width: "100vw" }} />
        <div className="container mt-2 p-3 position-absolute top-50 start-50 translate-middle bg-secondary bg-opacity-25" style={{ maxWidth: '500px' }}>
          <h2 className="mb-4 text-center text-light">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className='text-light'>Full Name</label>
              <input type="text" name='name' className="form-control" placeholder="Enter full name" value={formdata.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className='text-light'>Email address</label>
              <input type="email" name='email' className="form-control" placeholder="Enter email" value={formdata.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className='text-light'>Password</label>
              <input type="password" name='password' className="form-control" placeholder="Create password" value={formdata.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className='text-light'>Mobile Number</label>
              <input type="text" name='mobile' className="form-control" placeholder="Enter mobile number" value={formdata.mobile} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="memplan" className='text-light mb-2'>Choose Membership Plan</label>
              <select id='memplan' name='plan' className='ms-2' value={formdata.plan} onChange={handleChange} required>
                <option value="Basic">--Select--</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100 mb-2 mt-2">Register</button>
            <label className='text-white'>you already have an account?</label><Link to='/login' className='ms-2'>Sign in</Link>
          </form>
        </div>
        {status && <p className="text-success">{status}</p>}
      </div>
    </div>
  );
}

export default Register;
