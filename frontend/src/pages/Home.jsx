import hero from "../assets/hero.png";

const Home = () => {
  return (
    <main className="pt-20 bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Learn. Grow. Succeed.
              <br />
              Build Your Future with
              <br />
              <span className="text-blue-600">EduVerse</span>
            </h1>

            <p className="mt-5 max-w-md text-gray-600">
              Discover expert-led courses in coding, design, business
              and more. Learn anytime, anywhere.
            </p>

            <div className="mt-8 flex max-w-md rounded-full border border-gray-200 bg-white p-2 shadow-sm">
              <input
                type="text"
                placeholder="Search for courses..."
                className="flex-1 px-4 outline-none"
              />

              <button className="rounded-full bg-blue-600 px-6 py-2 text-white">
                Search
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

