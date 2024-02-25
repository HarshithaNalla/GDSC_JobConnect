import React, { useState } from 'react';
import './Header.css';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
const Header = () => {
  const [showProfileNav, setShowProfileNav] = useState(false);

  const handleProfileClick = () => {
    setShowProfileNav(!showProfileNav);
  };
  const history = useNavigate();
  const logout = (e) => {
    
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        history("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <header className="header fixed-top">
      <div className="header-left" onClick={handleProfileClick}>
        {/* Insert your profile picture component here */}
        <img src="https://th.bing.com/th/id/OIG2.rD7hkJl0PUhUb71Iv_YM?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Profile Picture" />
      </div>
      <div className="header-center">
        <h1>JobConnect</h1>
      </div>
      <div className="header-right">
        <ul className="header-right-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/feedback">Feedback</a>
          </li>
          <li>
            <a href="/feedback" onClick={logout}>logout</a>
          </li>
        </ul>
      </div>
      <div className={showProfileNav ? 'profile-nav active' : 'profile-nav'}>
        <ul>
          <li>
            <a href="/profile">Name</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
