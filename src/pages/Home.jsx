import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { brownies, blondies } from "../data/menuData";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Home() {
  // Chocolate dust cursor
  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const message = encodeURIComponent(
    "Hi, I would like to order some brownies & blondies. Could you please share the details?",
  );

  return (
    <>
      <div className="cursor-glow"></div>

      <Header />

      <section id="hero" className="hero">
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            HER_BROWNIES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Taste The Joy
          </motion.p>

          <a href="#brownies" className="primary-btn">
            Explore Menu
          </a>

          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>

      <section id="brownies" className="menu-section">
        <SectionTitle title="Brownies" />

        <motion.div
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brownies.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProductCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="blondies" className="menu-section light">
        <SectionTitle title="Blondies" />

        <motion.div
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blondies.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProductCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="contact-section">
        <SectionTitle title="Order Now" />

        <div className="contact-options">
          <a
            href={`https://wa.me/919786211976?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
          >
            <i className="fab fa-whatsapp"></i>

            <div>
              <h3>WhatsApp</h3>
              <p>+91 9786211976</p>
            </div>
          </a>

          <a
            href="https://instagram.com/HER_BROWNIES_"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card instagram"
          >
            <i className="fab fa-instagram"></i>
            <div>
              <h3>Instagram</h3>
              <p>@HER_BROWNIES</p>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
