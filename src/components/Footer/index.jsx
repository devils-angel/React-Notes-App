import React from 'react';

export const Footer = () => {
  return (
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-800 border-t border-gray-700 shadow-sm md:flex md:items-center md:justify-between md:p-6">
  <span className="text-sm text-white sm:text-center">
    © 2025 <a href="https://github.com/devils-angel" className="hover:underline">Yukta Shah</a>. All Rights Reserved.
  </span>
  <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
    <li>
      <a href="https://github.com/devils-angel" className="hover:underline me-4 md:me-6">Github</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yukta-shah" className="hover:underline me-4 md:me-6">LinkedIn</a>
    </li>
  </ul>
</footer>


    
  );
};
export default Footer;




