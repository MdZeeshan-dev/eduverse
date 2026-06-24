const CourseCard = ({ title, instructor, rating, price }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-40 bg-blue-100"></div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          By {instructor}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-yellow-500">
            ⭐ {rating}
          </span>

          <span className="font-bold text-blue-600">
            ₹{price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;