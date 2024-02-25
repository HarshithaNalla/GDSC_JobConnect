import React from 'react';
import "./Menu.css"
const Menu = () => {
  return (
    <div className="main">
      <label className="menu-button-wrapper">
        <input type="checkbox" className="menu-button" />
        <div className="icon-wrapper">
          <label className="hamburger">
            <input className="hamburger-input" type="checkbox" />
            <span className="hamburger-line first"></span>
            <span className="hamburger-line second"></span>
            <span className="hamburger-line third"></span>
          </label>
        </div>
        <div className="item-list">
          <div>Home</div>
          <div>About</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
      </label>

      {/* signature */}
      <div className="signature-wrapper">
        <div className="signature-title">
          Hey there, I'm Nitish, a frontend developer.
        </div>

        <a
          className="signature-link"
          target="_blank"
          href="https://nikkk.me/"
        >
          Portfolio
        </a>
      </div>
      {/* signature */}
    </div>
  );
};

export default Menu;
