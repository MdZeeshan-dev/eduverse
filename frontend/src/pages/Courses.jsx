import { useMemo, useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/courses/CourseCard";
import SearchBar from "../components/courses/SearchBar";
import CategoryFilter from "../components/courses/CategoryFilter";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(courses.map((course) => course.category))];
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Explore Our Courses
          </h1>

          <p className="mt-4 text-blue-100">
            Learn in-demand skills with industry experts.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              All Courses
            </h2>

            <p className="mt-2 text-gray-500">
              {filteredCourses.length} Courses Available
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {filteredCourses.length === 0 ? (
          <div className="rounded-2xl bg-white py-20 text-center shadow">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Courses Found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search keyword or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Courses;