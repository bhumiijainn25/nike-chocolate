import testimonials from "../data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-heading">
        <p className="section-label">Customer Love</p>

        <h2>What Our Customers Say</h2>

        <p>
          Discover why chocolate lovers keep coming back for more.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-person">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="testimonial-image"
              />

              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>

            <p className="testimonial-message">
              "{testimonial.message}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}