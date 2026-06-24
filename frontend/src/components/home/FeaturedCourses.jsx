const FeaturedCourses = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Featured Courses
        </h2>

        <button className="text-blue-600">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl border p-4 shadow-sm">
          <div className="mb-4 h-32 rounded-lg bg-slate-900"></div>

          <h3 className="font-semibold">
            React Basics
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            John Doe
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span>⭐ 4.6</span>
            <span className="font-semibold">₹499</span>
          </div>
        </div>

        <div className="rounded-xl border p-4 shadow-sm">
          <div className="mb-4 h-32 rounded-lg bg-violet-500"></div>

          <h3 className="font-semibold">
            Web Development
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Jane Smith
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span>⭐ 4.9</span>
            <span className="font-semibold">₹699</span>
          </div>
        </div>

        <div className="rounded-xl border p-4 shadow-sm">
          <div className="mb-4 h-32 rounded-lg bg-blue-500"></div>

          <h3 className="font-semibold">
            UI/UX Design
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Alex Parker
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span>⭐ 4.5</span>
            <span className="font-semibold">₹499</span>
          </div>
        </div>

        <div className="rounded-xl border p-4 shadow-sm">
          <div className="mb-4 h-32 rounded-lg bg-slate-800"></div>

          <h3 className="font-semibold">
            Data Structures
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Mark Wilson
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span>⭐ 4.8</span>
            <span className="font-semibold">₹599</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;