// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow m-0">
         <div className="container-fluid">
           <Link className="navbar-brand fw-bold" to="/">ASCE Gym</Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon"></span>
           </button>
   
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/schedule">Schedule</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/trainers">Trainers</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/pricing">Pricing</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/blog">Blog</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/contact">Contact</Link>
               </li>
             </ul>
   
             <div className="d-flex">
              <div className="d-flex">
                <Link to={'/profile'} className="d-flex align-items-center me-4 text-decoration-none text-light fw-medium">Profile</Link>
              </div>
               <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
               <Link to="/register" className="btn btn-primary">Register</Link>
             </div>
           </div>
         </div>
       </nav>
  );
}

export default Navbar;
