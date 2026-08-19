import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collection />
      <Features />
      <Testimonials />
      <Offer />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}