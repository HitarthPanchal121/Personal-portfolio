import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("public_key_xxxxxxx"); // Replace with your actual public key
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <motion.div
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Layer */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Navbar */}
        <NavBar />

        <div className="container mx-auto px-8">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-16 flex items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <About />
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen py-16 flex items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-16 flex items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Projects />
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-16 flex items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Contact />
            </motion.div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default App;
