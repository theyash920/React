import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
