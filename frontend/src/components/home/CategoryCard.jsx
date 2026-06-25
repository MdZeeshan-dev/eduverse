import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ title, courses, icon }) => {
  return (
    <div className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">

      {/* Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      {/* Courses */}
      <p className="mt-2 text-gray-500">
        {courses}
      </p>

      {/* Button */}
      <div className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition group-hover:gap-3">
        Explore
        <FaArrowRight className="text-sm" />
      </div>

    </div>
  );
};

export default CategoryCard;