import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold text-blue-600">
          EduVerse
        </NavLink>

        {/* Nav Links */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <NavLink
              to="/"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/courses"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
