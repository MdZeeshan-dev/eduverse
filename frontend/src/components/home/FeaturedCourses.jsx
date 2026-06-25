import CourseCard from "./CourseCard";

import react from "../../assets/react.jpg";
import web from "../../assets/web.jpg";
import uiux from "../../assets/uiux.jpg";
import dsa from "../../assets/dsa.jpg";

const courses = [
  {
    id: 1,
    image: react,
    title: "React Mastery",
    instructor: "John Doe",
    rating: 4.8,
    level: "Beginner",
    duration: "12 Hours",
    students: "12.5k",
    price: 499,
  },
  {
    id: 2,
    image: web,
    title: "Full Stack Web Development",
    instructor: "Jane Smith",
    rating: 4.9,
    level: "Intermediate",
    duration: "25 Hours",
    students: "18.3k",
    price: 699,
  },
  {
    id: 3,
    image: uiux,
    title: "UI / UX Design",
    instructor: "Alex Parker",
    rating: 4.7,
    level: "Beginner",
    duration: "10 Hours",
    students: "9.7k",
    price: 399,
  },
  {
    id: 4,
    image: dsa,
    title: "Data Structures & Algorithms",
    instructor: "Mark Wilson",
    rating: 4.8,
    level: "Advanced",
    duration: "35 Hours",
    students: "21.6k",
    price: 599,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
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

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            instructor={course.instructor}
            rating={course.rating}
            level={course.level}
            duration={course.duration}
            students={course.students}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;