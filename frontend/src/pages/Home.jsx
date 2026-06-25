import Hero from "../components/home/Hero";
import FeaturedCourses from "../components/home/FeaturedCourses";
import Categories from "../components/home/Categories";
import TopInstructors from "../components/home/TopInstructors";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <TopInstructors />
      <Testimonials />
    </>
  );
};

export default Home;