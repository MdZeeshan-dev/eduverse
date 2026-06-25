import { FaHeart, FaStar } from "react-icons/fa";

const CourseCard = ({
  image,
  title,
  instructor,
  rating,
  price,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gray-100">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110">
          <FaHeart className="text-gray-400 transition hover:text-red-500" />
        </button>

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

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Enroll
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;