import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const navbarTransition = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition);
        return () => window.removeEventListener('scroll', navbarTransition);
    }, []);

    return (
        <div className={`navbar ${show && "navbar__color"}`}>
            <div className="navbar__container">
            <img onClick={() => history.push('/')} className="navbar__logo" src="https://i.ibb.co/h9QYCqh/imageedit-19-3129439397.png" alt="" />

            <img onClick={() => history.push('./profile')} className="navbar__avatar" src="https://i.pinimg.com/originals/a7/50/d6/a750d6fe9faf923f57feaa2cfa5cfc88.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar;
