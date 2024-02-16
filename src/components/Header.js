import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showProfileNav, setShowProfileNav] = useState(false);

  const handleProfileClick = () => {
    setShowProfileNav(!showProfileNav);
  };

  return (
    <header className="header fixed-top">
      <div className="header-left" onClick={handleProfileClick}>
        {/* Insert your profile picture component here */}
        <img src="path/to/your/profile_picture.jpg" alt="Profile Picture" />
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
