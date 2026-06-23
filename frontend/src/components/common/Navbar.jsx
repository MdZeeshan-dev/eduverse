import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          EduVerse
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition"
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Signup
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;