import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>

        <p className="mt-3 text-gray-500">
          Choose your learning path from our most popular categories.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
