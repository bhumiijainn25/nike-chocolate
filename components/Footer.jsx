"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Nike Chocolate</h2>

          <p>
            Premium chocolate crafted to make every moment a little sweeter.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Nike Chocolate. All rights reserved.</p>

        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}