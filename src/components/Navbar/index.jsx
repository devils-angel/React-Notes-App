import React from 'react';
import logo from '../../logo.svg';

export const Navbar = () => {
  return (
    <header className="flex p-4 items-center justify-left bg-gray-800">
    <div className="w-16 h-16">
      <img src={logo} className="w-full h-full" alt="logo" />
    </div>
      <h1 className="text-white text-4xl">YUKTA'S NOTES</h1>
    </header>
  );
};
export default Navbar;
