import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">

        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Learn. Grow. Succeed.
            <br />
            Build Your Future with
            <br />
            <span className="text-blue-600">
              EduVerse
            </span>
          </h1>

          <p className="mt-5 max-w-md text-gray-600">
            Discover expert-led courses in coding,
            design, business and more.
            Learn anytime, anywhere.
          </p>

          <div className="mt-8 flex max-w-md rounded-full border border-gray-200 p-2">
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

        <div className="flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;