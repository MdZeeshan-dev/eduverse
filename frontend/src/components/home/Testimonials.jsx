import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Students Say
        </h2>

        <p className="mt-3 text-gray-500">
          Thousands of learners trust EduVerse to build their careers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


