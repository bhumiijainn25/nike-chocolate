export default function Features() {
  return (
    <section className="features" id="about">
      <div className="section-heading">
        <p className="section-label">Why Choose Us</p>

        <h2>Chocolate Made With Care</h2>

        <p>
          Every piece of chocolate is created with quality ingredients,
          attention to detail, and a passion for great taste.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🍫</div>

          <h3>Premium Quality</h3>

          <p>
            We use carefully selected ingredients to create rich and
            delicious chocolate.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌱</div>

          <h3>Fresh Ingredients</h3>

          <p>
            Our chocolates are made with fresh, high-quality ingredients
            for the best possible flavor.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">❤️</div>

          <h3>Made With Love</h3>

          <p>
            Every chocolate is crafted with care to make every bite
            special.
          </p>
        </div>
      </div>
    </section>
  );
}