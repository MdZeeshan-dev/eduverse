import Hero from "../components/home/Hero";
import FeaturedCourses from "../components/home/FeaturedCourses";
import Categories from "../components/home/Categories";
import TopInstructors from "../components/home/TopInstructors";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <TopInstructors />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;