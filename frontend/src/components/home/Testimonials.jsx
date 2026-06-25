import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review:
      "EduVerse helped me master React from scratch. The projects and explanations were practical and interview-focused.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    review:
      "The learning experience is amazing. Every course is well structured and easy to follow.",
  },
  {
    id: 3,
    name: "Aman Singh",
    role: "Full Stack Developer",
    review:
      "The best platform to learn web development. I built real-world projects and improved my confidence.",
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Students Say
        </h2>

        <p className="mt-3 text-gray-500">
          Thousands of learners trust EduVerse to build their careers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Stars */}
            <div className="mb-5 flex gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Review */}
            <p className="leading-7 text-gray-600">
              "{item.review}"
            </p>

            {/* User */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;