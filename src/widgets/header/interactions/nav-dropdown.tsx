import { useState } from 'react';

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
        Menu
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Item 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
