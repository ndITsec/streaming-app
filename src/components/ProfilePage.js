import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Navbar from './Navbar'
import './ProfilePage.css';
import PlansPage from './PlansPage';

function ProfilePage() {
    const user = useSelector(selectUser);

    return (
        <div className="profilePage">
        <Navbar />
        <div className="profilePage__body">
            <h1>Edit Your Profile</h1>
            <div className="profilePage__info">
                <img src="https://i.pinimg.com/originals/a7/50/d6/a750d6fe9faf923f57feaa2cfa5cfc88.png" alt="" />
                <div className="profilePage__details">
                    <h2>{user.email}</h2>
                    <div className="profilePage__plans">
                        <h3>Plans</h3>
                        <PlansPage />
                        <button onClick={() => auth.signOut()} className="profilePage__signOutButton">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfilePage;
