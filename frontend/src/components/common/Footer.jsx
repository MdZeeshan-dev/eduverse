import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">EduVerse</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Learn modern skills with premium courses, expert mentors and
              real-world projects designed to accelerate your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Home", "Courses", "About", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">
              {[
                "Web Development",
                "DSA",
                "UI / UX",
                "Artificial Intelligence",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>




          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@eduverse.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>India</span>
              </div>

              <div className="flex gap-4 pt-4 text-xl">
                <button className="transition hover:text-blue-500">
                  <FaGithub />
                </button>

                <button className="transition hover:text-blue-500">
                  <FaLinkedin />
                </button>

                <button className="transition hover:text-sky-400">
                  <FaTwitter />
                </button>

                <button className="transition hover:text-red-500">
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} EduVerse. All Rights Reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-blue-400">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-blue-400">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
