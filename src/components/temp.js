import React, { useState } from 'react';
import "./temp.css"
const Temp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <ProfilePicture />
        <SlideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="header-center">
        <h1>JobConnect</h1>
      </div>
      <div className="header-right">
        {/* Responsive menu button for smaller screens */}
        <button className="header-burger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        {/* Main menu items */}
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} items={['Home', 'About', 'Contact', 'Feedback', 'Logout']} />
      </div>
    </header>
  );
};

const ProfilePicture = () => {
  // Implement your custom profile picture logic here
  return (
    <div className="profile-picture">
      {/* Your profile picture image or component */}
    </div>
  );
};

const SlideMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`slide-menu ${isMenuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={toggleMenu}>Name</li>
        <li onClick={toggleMenu}>Settings</li>
        <li onClick={toggleMenu}>Location</li>
        <li onClick={toggleMenu}>Change Profile</li>
        <li onClick={toggleMenu}>Notifications</li>
      </ul>
    </div>
  );
};

const Menu = ({ isMenuOpen, toggleMenu, items }) => {
  return (
    <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
      <ul>
        {items.map((item) => (
          <li key={item} onClick={toggleMenu}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Temp;
