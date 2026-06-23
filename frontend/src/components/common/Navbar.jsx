import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div>
          <NavLink to="/" className="text-3xl font-bold text-blue-600">
            EduVerse
          </NavLink>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
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
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Signup
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;