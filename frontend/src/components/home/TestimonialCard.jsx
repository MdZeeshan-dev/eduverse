import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, review } = testimonial;

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      {/* Rating */}
      <div className="mb-5 flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-7 italic">"{review}"</p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
          {initials}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>

          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
