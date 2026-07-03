import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const {
    image,
    title,
    instructor,
    rating,
    level,
    duration,
    students,
    price,
    originalPrice,
  } = course;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Course Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Level + Rating */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
            {level}
          </span>

          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-900">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          By <span className="font-medium">{instructor}</span>
        </p>

        {/* Duration + Students */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <FaClock className="text-gray-400" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaUserGraduate className="text-gray-400" />
            <span>{(students / 1000).toFixed(1)}k</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">₹{price}</span>

          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>
        </div>

        {/* Button */}
        <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
