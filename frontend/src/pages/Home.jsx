import Hero from "../components/home/Hero";
import FeaturedCourses from "../components/home/FeaturedCourses";
import Categories from "../components/home/Categories";
import TopInstructors from "../components/home/TopInstructors";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <TopInstructors />
    </>
  );
};

export default Home;