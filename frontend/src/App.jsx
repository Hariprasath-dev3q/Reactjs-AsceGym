// src/App.jsx
import React, { Profiler } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Schedule from './pages/Schedule.jsx';
import Trainers from './pages/Trainer.jsx';
import Pricing from './pages/Pricing.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Membership from './pages/Membership.jsx';
import Profile from './pages/Profile.jsx';
import Logout from './pages/Logout.jsx';



function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 w-100">
        <Header/>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<Logout/>} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




