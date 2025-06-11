import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

    const [modal, setModal] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '', mobile: '' })

    const handleClose = () => {
        setModal(false);
        setUserData({ name: '', email: '', mobile: '' })
    }
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user); // for testing purpose
    if (!user) return <h3>Please login first.</h3>;

    const handleEdit = (user) => {
        setModal(true);
        setUserData(user);
    };

    const editSave = async () => {
        try {
            const res = await axios.patch(`http://localhost:5000/register/${user.id}`, userData)
            localStorage.setItem('user', JSON.stringify({ ...user, ...userData, member_name:userData.name}))
            // console.log(sub);
            setUserData(res.data)
            setModal(false);
            handleLogout();
        }
        catch (err) {

            console.log(err);
        }

    }

    return (
        <div className='container p-4 mt-5 mb-5'>
            <div className='mt-5 mb-5 '>
                <h4>User Profile Details</h4>   
                <table className='mb-5'>
                    <tbody >
                        <tr>
                            <td><strong className='me-3'>Name:</strong>{user.member_name}</td>
                        </tr>
                        <tr>
                            <td><strong className='me-3'>Email:</strong>{user.email}</td>
                        </tr>
                        <tr>
                            <td><strong className='me-3'>Mobile:</strong>{user.mobile}</td>
                        </tr>
                        <tr>
                            <td><strong className='me-3'>Membership Plan:</strong>{user.plan}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='d-flex'>
                    <button className='btn btn-outline-primary mt-3' onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={handleLogout} className="btn btn-danger ms-3 mt-3">Logout</button>
                </div>
                {modal && (
                    <div className='container bg-body-secondary mt-3 w-75'>
                        <div className='p-3  mw-100'>
                            <span className='btn-close float-end' onClick={handleClose} ></span>
                            <div className='d-flex flex-column'>
                                <label htmlFor="uname" className='mt-3 ' >Name:</label>
                                <input type="text" id='uname' className='mt-3' value={userData.member_name} onChange={(e) => setUserData({ ...userData, member_name: e.target.value })} />
                                <label htmlFor="uemail" className='mt-3'>Email:</label>
                                <input type="email" id='uemail' className='mt-3' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                <label htmlFor="umobile" className='mt-3'>Mobile:</label>
                                <input type="text" id='umobile' className='mt-3' value={userData.mobile} onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} />
                            </div>
                            <button className='btn btn-success pe-3 ps-3 pt-1 pb-1 mt-3' onClick={editSave}>Save</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile