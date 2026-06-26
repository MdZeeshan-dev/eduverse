import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 text-center text-white shadow-xl lg:px-20">
        {/* Heading */}
        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Ready to Start Your Learning Journey?
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-lg text-blue-100">
          Join thousands of learners mastering in-demand skills through
          industry-focused courses designed to help you achieve your career
          goals.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            Explore Courses
            <FaArrowRight />
          </button>

          <button className="rounded-xl border border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
