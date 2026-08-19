import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">Premium Chocolate Collection</p>

          <h1>
            Indulge in
            <br />
            <span>Pure Chocolate</span>
          </h1>

          <p className="hero-description">
            Experience rich, delicious chocolate crafted with premium
            ingredients and made for unforgettable moments.
          </p>

          <a href="#collection" className="hero-button">
            Explore Collection
          </a>
        </div>

        <div className="hero-image-wrapper">
          <Image
           src="/images/hero/hero-chocolate.jpg"
           alt="Nike Chocolate"
           width={600}
           height={600}
           className="hero-image"
           priority
          />
        </div>
      </div>
    </section>
  );
}