import CourseCard from "./CourseCard";

import react from "../../assets/courses/react.jpg";
import web from "../../assets/courses/web.jpg";
import uiux from "../../assets/courses/uiux.jpg";
import dsa from "../../assets/courses/dsa.jpg";

const courses = [
  {
    id: 1,
    image: react,
    title: "React Mastery",
    instructor: "John Doe",
    rating: 4.8,
    price: 499,
  },
  {
    id: 2,
    image: web,
    title: "Full Stack Web Development",
    instructor: "Jane Smith",
    rating: 4.9,
    price: 699,
  },
  {
    id: 3,
    image: uiux,
    title: "UI / UX Design",
    instructor: "Alex Parker",
    rating: 4.7,
    price: 399,
  },
  {
    id: 4,
    image: dsa,
    title: "Data Structures & Algorithms",
    instructor: "Mark Wilson",
    rating: 4.8,
    price: 599,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Featured Courses
        </h2>

        <button className="font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            instructor={course.instructor}
            rating={course.rating}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;