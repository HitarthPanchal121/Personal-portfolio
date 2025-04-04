import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      formRef.current.reset();
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get in <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text">Touch</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-neutral-400">
                Feel free to reach out through any of these platforms. I'm always excited to discuss new opportunities and ideas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: <FiMail className="w-5 h-5" />,
                  title: "Email",
                  value: "hitarth9950@gmail.com",
                  href: "mailto:hitarth9950@gmail.com",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: <FiGithub className="w-5 h-5" />,
                  title: "GitHub",
                  value: "github.com/HitarthPanchal121",
                  href: "https://github.com/HitarthPanchal121",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <FiLinkedin className="w-5 h-5" />,
                  title: "LinkedIn",
                  value: "linkedin.com/in/hitarth-panchal-1b424524a",
                  href: "https://www.linkedin.com/in/hitarth-panchal-1b424524a/",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-purple-500/50 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{contact.title}</h4>
                      <p className="text-sm text-neutral-400">{contact.value}</p>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800"
            >
              {/* Form Fields */}
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    required
                    className="peer w-full bg-neutral-800/50 border-2 border-neutral-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-transparent"
                    placeholder={field.label}
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-4 -top-2.5 bg-neutral-900 px-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="peer w-full bg-neutral-800/50 border-2 border-neutral-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-neutral-900 px-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Form Status */}
              <AnimatePresence>
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      formStatus.type === 'success'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <FiCheck className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
