import { Star, Users, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Course Image */}
      <div className="relative overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {course.category}
        </span>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
          {course.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          By {course.instructor}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {course.description}
        </p>

        {/* Rating */}

        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-1">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {course.rating}
            </span>

          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">

            <Users size={16} />

            <span>
              {course.students.toLocaleString()}
            </span>

          </div>

        </div>

        {/* Duration */}

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">

          <div className="flex items-center gap-1">

            <Clock size={16} />

            <span>
              {course.duration}
            </span>

          </div>

          <div className="flex items-center gap-1">

            <BookOpen size={16} />

            <span>
              {course.lessons} Lessons
            </span>

          </div>

        </div>

        {/* Price */}

        <div className="mt-5 flex items-center justify-between">

          <div>

            <span className="text-2xl font-bold text-blue-600">
              ₹{course.price}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{course.originalPrice}
            </span>

          </div>

          <Link
            to={`/course/${course.id}`}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;