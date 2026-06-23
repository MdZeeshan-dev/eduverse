const Home = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              🚀 India's Premium Learning Platform
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Learn Without
              <span className="text-blue-600"> Limits</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Learn from industry experts, build real-world projects, crack
              interviews, and become job-ready with premium courses designed
              for your success.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
                Explore Courses
              </button>

              <button className="rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">50K+</h2>
                <p className="text-gray-500">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">250+</h2>
                <p className="text-gray-500">Courses</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">100+</h2>
                <p className="text-gray-500">Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="flex h-[500px] w-[500px] items-center justify-center rounded-3xl bg-blue-100 shadow-xl">
              <h2 className="text-3xl font-bold text-blue-600">
                Hero Image
              </h2>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;