import { FaStar, FaUsers } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "React Developer",
    rating: 4.9,
    students: "12.5k",
    initials: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Full Stack Developer",
    rating: 4.8,
    students: "18.2k",
    initials: "JS",
  },
  {
    id: 3,
    name: "Alex Parker",
    role: "UI / UX Designer",
    rating: 4.9,
    students: "9.8k",
    initials: "AP",
  },
  {
    id: 4,
    name: "Mark Wilson",
    role: "DSA Mentor",
    rating: 4.8,
    students: "21.4k",
    initials: "MW",
  },
];

const TopInstructors = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Learn From Top Instructors
        </h2>

        <p className="mt-3 text-gray-500">
          Industry experts helping thousands of students achieve their goals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Avatar */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-lg">
              {instructor.initials}
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {instructor.name}
              </h3>

              <p className="mt-2 text-gray-500">
                {instructor.role}
              </p>
            </div>

            {/* Rating & Students */}
            <div className="mt-6 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{instructor.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-600" />
                <span>{instructor.students}</span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;