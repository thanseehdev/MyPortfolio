import { NavLink } from "react-router-dom";
import React from 'react'; // Import React

export default function NavBar() {
  const linkClasses =
    "px-3 py-2 rounded-md font-medium text-gray-300 hover:text-yellow-400 transition-colors";

  const activeLink = "text-yellow-400 border-b-2 border-yellow-400";

  return (
    <nav className="flex justify-end space-x-6 bg-[#141414] p-4 rounded-t-2xl md:rounded-tr-3xl shadow-md">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${linkClasses} ${activeLink}` : linkClasses
        }
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${linkClasses} ${activeLink}` : linkClasses
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${linkClasses} ${activeLink}` : linkClasses
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
