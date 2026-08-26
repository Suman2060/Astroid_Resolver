import { memo } from "react";
import { NavLink } from "react-router-dom";

const Navbar = memo(function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <NavLink
          to="/library"
          className="text-lg font-bold text-gray-900 dark:text-white"
        >
          Asteroid Resolver
        </NavLink>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="/library"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }
          >
            Library
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }
          >
            Collections
          </NavLink>

          <NavLink
            to="/submit"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }
          >
            Submit
          </NavLink>
        </nav>
        
      </div>
    </header>
  );
});

export default Navbar;