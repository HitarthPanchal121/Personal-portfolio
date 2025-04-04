import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink, FiChevronRight } from 'react-icons/fi';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Java Developer Intern",
      company: "DotSquares",
      location: "On-site",
      period: "Jan 2025 - Present",
      description: "Developing and maintaining responsive web applications using Java and Spring Boot",
      color: "from-pink-500 to-rose-500",
      responsibilities: [
        "Developed and maintained responsive web applications using Java and Spring Boot",
        "Implemented secure authentication and authorization systems",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Learned and implemented best practices in Spring Boot"
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Microservices", "REST APIs", "Git", "Agile"],
      projects: [
        {
          name: "Boiler Plate",
          link: "https://github.com/HitarthPanchal121/BoilerPlateAuth"
        },
        {
          name: "Mingle Space",
          link: "https://github.com/HitarthPanchal121/MingleSpace-Backend"
        }
      ]
    },
    // {
    //   id: 2,
    //   role: "Web Developer Intern",
    //   company: "Digital Creatives",
    //   location: "Mumbai, India",
    //   period: "2023 - 2024",
    //   description: "Contributed to various web development projects",
    //   color: "from-purple-500 to-indigo-500",
    //   responsibilities: [
    //     "Assisted in developing and maintaining client websites",
    //     "Created responsive layouts using modern CSS techniques",
    //     "Participated in code reviews and team meetings",
    //     "Learned and implemented best practices in web development"
    //   ],
    //   tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    //   projects: [
    //     {
    //       name: "Portfolio Website",
    //       link: "https://example.com"
    //     }
    //   ]
    // },
    {
      id: 3,
      role: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - 2023",
      description: "Worked on various freelance projects",
      color: "from-cyan-500 to-blue-500",
      responsibilities: [
        "Developed custom websites for clients",
        "Implemented responsive designs and animations",
        "Managed client relationships and project timelines",
        "Delivered projects within budget and deadlines"
      ],
      tech: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Figma", "Agile"],
      projects: [
        {
          name: "Mingle Space",
          link: "https://github.com/HitarthPanchal121/MingleSpace-Frontend"
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: ["-50%", "-45%", "-50%"],
            y: ["-50%", "-55%", "-50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ left: "50%", top: "50%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text">Experience</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A journey through my professional experiences and the impactful projects I've worked on.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-neutral-700 bg-neutral-900 absolute left-0 md:left-1/2 md:-translate-x-1/2 group-hover:border-purple-500 transition-colors">
                <motion.div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>

              {/* Experience Card */}
              <motion.div
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-purple-500/50 transition-colors cursor-pointer"
                onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className={`text-transparent bg-gradient-to-r ${exp.color} bg-clip-text font-medium`}>
                      {exp.company}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300">{exp.description}</p>

                  {/* Expand Button */}
                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium"
                    animate={{ color: selectedExp === exp.id ? '#8B5CF6' : '#9CA3AF' }}
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ rotate: selectedExp === exp.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selectedExp === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-neutral-800">
                          {/* Responsibilities */}
                          <div className="space-y-4">
                            <h4 className="font-medium text-white">Key Responsibilities</h4>
                            <ul className="space-y-2 text-neutral-400">
                              {exp.responsibilities.map((resp, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2"
                                >
                                  <FiBriefcase className="w-4 h-4 flex-shrink-0" />
                                  <span>{resp}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="mt-6">
                            <h4 className="font-medium text-white mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${exp.color} bg-opacity-10 text-white`}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Projects */}
                          {exp.projects.length > 0 && (
                            <div className="mt-6">
                              <h4 className="font-medium text-white mb-4">Notable Projects</h4>
                              <div className="space-y-2">
                                {exp.projects.map((project, i) => (
                                  <motion.a
                                    key={i}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-2 text-neutral-400 hover:text-purple-500 transition-colors"
                                  >
                                    <FiExternalLink className="w-4 h-4" />
                                    <span>{project.name}</span>
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
