
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout} className="btn btn-danger mt-3">
                Logout
            </button>
        </div>

    );
}

export default Logout;
