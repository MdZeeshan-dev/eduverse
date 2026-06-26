import CourseCard from "./CourseCard";
import { courses } from "../../data/courses";

const FeaturedCourses = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Courses
          </h2>

          <p className="mt-2 text-gray-500">
            Learn from industry experts with premium quality courses.
          </p>
        </div>

        <button className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
          View All
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;