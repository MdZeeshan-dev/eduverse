import { FaStar, FaUsers } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  const { name, role, rating, students, initials } = instructor;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      {/* Avatar */}
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
        {initials}
      </div>

      {/* Info */}
      <div className="mt-5 text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

        <p className="mt-1 text-sm text-gray-500">{role}</p>
      </div>

      {/* Stats */}
      <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaUsers className="text-blue-600" />
          <span>{(students / 1000).toFixed(1)}k</span>
        </div>
      </div>
      

      {/* Button */}
      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors duration-300 hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
};

export default InstructorCard;















