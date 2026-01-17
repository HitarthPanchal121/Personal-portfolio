import { motion } from "framer-motion";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import the updated Contact component
import Experience from "./components/experiences";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        {/* NavBar */}
        <NavBar />

        {/* Hero Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* About Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <About />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Experience/>
        </motion.div>

        {/* Projects Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Projects />
        </motion.div>

        {/* Contact Footer Section */}
        <Contact /> {/* Contact component added without motion wrapper, as it has its own */}
      </div>
    </div>
  );
}

export default App;
