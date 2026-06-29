import { useMemo, useState } from "react";
import { courses } from "../data/courses";

import SidebarFilter from "../components/courses/SidebarFilter";
import SearchBar from "../components/courses/SearchBar";
import SortDropdown from "../components/courses/SortDropdown";
import CourseCard from "../components/courses/CourseCard";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    // Search
    filtered = filtered.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "latest":
        filtered.reverse();
        break;

      default:
        filtered.sort((a, b) => b.students - a.students);
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <main className="bg-gray-50 min-h-screen">

      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            Explore Courses
          </h1>

          <p className="mt-2 text-gray-600">
            Discover top-quality courses and start learning today.
          </p>

        </div>

        {/* Layout */}

        <div className="grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}

          <div className="lg:col-span-1">

            <SidebarFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

          </div>

          {/* Right */}

          <div className="lg:col-span-3">

            {/* Search + Sort */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div className="flex-1">

                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />

              </div>

              <SortDropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

            </div>

            {/* Result */}

            <div className="mb-6">

              <h2 className="text-xl font-semibold text-gray-800">
                {filteredCourses.length} Courses Found
              </h2>

            </div>

            {/* Cards */}

            {filteredCourses.length === 0 ? (

              <div className="rounded-2xl bg-white py-20 text-center shadow">

                <h3 className="text-2xl font-semibold text-gray-700">
                  No Courses Found
                </h3>

                <p className="mt-3 text-gray-500">
                  Try another search keyword or category.
                </p>

              </div>

            ) : (

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {filteredCourses.map((course) => (

                  <CourseCard
                    key={course.id}
                    course={course}
                  />

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </main>
  );
};

export default Courses;