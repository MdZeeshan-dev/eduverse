import { FaSearch } from "react-icons/fa";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 #1 Learning Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Learn.
            <span className="text-blue-600"> Grow.</span>
            <br />
            Succeed.
            <br />
            Build Your Future
            <br />
            with EduVerse
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Learn from expert instructors, build real-world projects, master
            in-demand skills, and become job-ready with premium online courses.
          </p>

          {/* Search */}
          <div className="mt-10 flex max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <input
              type="text"
              placeholder="Search for courses..."
              className="flex-1 px-6 py-4 outline-none"
            />

            <button className="flex items-center gap-2 bg-blue-600 px-7 font-medium text-white transition hover:bg-blue-700">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-2xl">
              <img
                src={hero}
                alt="Hero"
                className="w-full max-w-[520px] object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
