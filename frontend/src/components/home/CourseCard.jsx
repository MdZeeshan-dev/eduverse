import { FaHeart, FaStar, FaClock, FaUsers } from "react-icons/fa";

const CourseCard = ({
  image,
  title,
  instructor,
  rating,
  level,
  duration,
  students,
  price,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
          <FaHeart className="text-gray-400 transition hover:text-red-500" />
        </button>

        {/* Level Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {level}
        </span>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          By {instructor}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <FaStar className="text-yellow-400" />

          <span className="text-sm font-medium text-gray-700">
            {rating}
          </span>
        </div>

        {/* Duration & Students */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <FaClock />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUsers />
            <span>{students}</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
            Enroll
          </button>

        </div>

      </div>
    </div>
  );
};

export default CourseCard;