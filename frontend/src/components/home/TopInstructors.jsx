import InstructorCard from "./InstructorCard";
import { instructors } from "../../data/instructors";

const TopInstructors = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Learn From Top Instructors
        </h2>

        <p className="mt-3 text-gray-500">
          Industry experts helping thousands of students achieve their goals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          />
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;