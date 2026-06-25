import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Web Development",
    courses: "120+ Courses",
    icon: "💻",
  },
  {
    id: 2,
    title: "Data Structures",
    courses: "80+ Courses",
    icon: "📚",
  },
  {
    id: 3,
    title: "UI / UX Design",
    courses: "60+ Courses",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    courses: "45+ Courses",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Machine Learning",
    courses: "50+ Courses",
    icon: "🧠",
  },
  {
    id: 6,
    title: "Programming",
    courses: "150+ Courses",
    icon: "⚡",
  },
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore Categories
        </h2>

        <p className="mt-3 text-gray-500">
          Choose your learning path from our most popular categories.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            courses={category.courses}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;