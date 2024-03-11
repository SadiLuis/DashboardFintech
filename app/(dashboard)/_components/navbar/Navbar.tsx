import React from 'react';
import { ModeToggle } from './toogle';
import Welcome from './Welcome';
import Link from 'next/link';
import PerfilAvatar from './Avatar';
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full bg-white dark:bg-[#202023] rounded-lg p-4 flex lg:justify-between items-center ">
      <div className="hidden sm:flex lg:flex items-center">
        <Welcome />
      </div>

      <nav className="flex items-center space-x-4">
        <Link
          href="#"
          className="py-1 px-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#0A0A0B] transition-colors duration-300"
        >
          Home
        </Link>
        <div className="py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#0A0A0B] transition-colors duration-300">
          <Bell />
        </div>
        <div className="py-1 px-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#0A0A0B] transition-colors duration-300">
          <PerfilAvatar />
        </div>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
