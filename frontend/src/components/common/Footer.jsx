import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              EduVerse
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Learn modern skills with premium courses,
              expert mentors and real-world projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-blue-400">
                Home
              </li>

              <li className="cursor-pointer hover:text-blue-400">
                Courses
              </li>

              <li className="cursor-pointer hover:text-blue-400">
                About
              </li>

              <li className="cursor-pointer hover:text-blue-400">
                Contact
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">
              <li>Web Development</li>
              <li>DSA</li>
              <li>UI / UX</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <button className="transition hover:text-blue-500">
                <FaGithub />
              </button>

              <button className="transition hover:text-blue-500">
                <FaLinkedin />
              </button>

              <button className="transition hover:text-blue-500">
                <FaTwitter />
              </button>

              <button className="transition hover:text-red-500">
                <FaYoutube />
              </button>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduVerse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;