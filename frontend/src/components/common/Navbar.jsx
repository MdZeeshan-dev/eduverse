import { NavLink } from "react-router-dom";
import { Menu, Search, GraduationCap, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
];

const Navbar = ({ authPage = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-lg shadow-blue-600/20">
            <GraduationCap size={22} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              EduVerse
            </h1>



            <p className="-mt-1 text-xs text-gray-500">Learn Without Limits</p>
          </div>
        </NavLink>



        {/* Hide everything on Auth Pages */}
        {!authPage && (


          <>

          
            {/* Desktop Navigation */}


            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (


                <li key={link.path}>





                  <NavLink
                    end={link.path === "/"}

                    
                    to={link.path}
                    className={({ isActive }) =>
                      `relative pb-1 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                          : "text-gray-700 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-full p-2 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-blue-600">
                <Search size={20} />
              </button>

              <NavLink
                to="/login"
                className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Get Started
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {!authPage && isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                end={link.path === "/"}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-gray-300 py-3 text-center font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
