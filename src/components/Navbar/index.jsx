import React from 'react';
import logo from '../../logo.svg';

export const Navbar = () => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      {/* <img src={logo} alt="logo" /> */}
      <h1 className="text-blue-500">Yukta's notes</h1>
    </header>
  );
};
export default Navbar;
