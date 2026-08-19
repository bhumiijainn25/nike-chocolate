import chocolates from "../data/chocolates";
import Image from "next/image";

export default function Collection() {
  return (
    <section id="collection" className="collection">
      <div className="section-heading">
        <p className="section-label">Our Collection</p>

        <h2>Discover Your Favorite Chocolate</h2>

        <p>
          Explore our carefully crafted collection of premium chocolates.
        </p>
      </div>

      <div className="chocolate-grid">
        {chocolates.map((chocolate) => (
          <div className="chocolate-card" key={chocolate.id}>
            <div className="chocolate-image-wrapper">
              <Image
                src={chocolate.image}
                alt={chocolate.name}
                width={400}
                height={400}
                className="chocolate-image"
              />
            </div>

            <div className="chocolate-info">
              <h3>{chocolate.name}</h3>

              <p>{chocolate.description}</p>

              <div className="chocolate-bottom">
                <span>₹{chocolate.price}</span>

                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}