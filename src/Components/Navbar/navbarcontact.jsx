import React from 'react';
import logo from "../assets/companylogo.png";
const Navbar = ({ showBackButton, onBackButtonClick }) => {
  return (
    <nav>
      <img src="companylogo.png" alt="Logo" />
      {showBackButton && (
        <button onClick={onBackButtonClick}>Back to Previous Page</button>
      )}
    </nav>
  );
};

export default Navbar;