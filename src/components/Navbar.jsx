import { NavLink } from "react-router-dom";
import React from 'react';

export default function NavBar() {
  const linkClasses = "px-3 py-2 rounded-md font-medium text-gray-300 hover:text-yellow-400 transition-colors";
  const activeLink = "text-yellow-400 border-b-2 border-yellow-400";

  return (
    <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 bg-[#141414] p-4 rounded-t-2xl md:rounded-tr-3xl shadow-md">
      {["/", "/projects", "/contact"].map((path, i) => (
        <NavLink
          key={i}
          to={path}
          end={path === "/"}
          className={({ isActive }) => isActive ? `${linkClasses} ${activeLink}` : linkClasses}
        >
          {path === "/" ? "About" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        </NavLink>
      ))}
    </nav>
  );
}

