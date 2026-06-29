const categories = [
  "Web Development",
  "Programming",
  "Design",
];

const prices = [
  "Free",
  "₹0 - ₹499",
  "₹500 - ₹999",
  "₹1000+",
];

const SidebarFilter = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Filters
      </h2>

      {/* Categories */}

      <div>

        <h3 className="mb-4 text-lg font-semibold">
          Categories
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "All"}
              onChange={() => setSelectedCategory("All")}
            />

            <span>All</span>

          </label>

          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() =>
                  setSelectedCategory(category)
                }
              />

              <span>{category}</span>

            </label>
          ))}

        </div>

      </div>

      {/* Price */}

      <div className="mt-10">

        <h3 className="mb-4 text-lg font-semibold">
          Price
        </h3>

        <div className="space-y-3">

          {prices.map((price) => (
            <label
              key={price}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input type="checkbox" />

              <span>{price}</span>

            </label>
          ))}

        </div>

      </div>

      {/* Rating */}

      <div className="mt-10">

        <h3 className="mb-4 text-lg font-semibold">
          Rating
        </h3>

        <label className="flex items-center gap-3 cursor-pointer">

          <input type="checkbox" />

          <span className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="text-gray-600">
            4.5 & above
          </span>

        </label>

      </div>

    </aside>
  );
};

export default SidebarFilter;