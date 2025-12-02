import { motion } from 'framer-motion';
import { Code, MessageCircle, ShoppingCart, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const highlightCards = [
    {
      icon: Code,
      title: 'MERN Stack Expertise',
      description: 'Building scalable full-stack applications with MongoDB, Express, React, and Node.js.',
    },
    {
      icon: MessageCircle,
      title: 'AI & Voice Agent Systems',
      description: 'Developing intelligent automation and voice-driven systems powered by AI technologies.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Product Development',
      description: 'Creating complete e-commerce solutions with high-performance architecture.',
    },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Yogreet Global LLP',
      period: 'October 2024 - Present',
      description: 'As a Full Stack Developer, I build and deploy modern, scalable, and high-performance applications. I work across frontend, backend, AI integrations, and automation pipelines, helping deliver seamless digital products.',
    },
    {
      title: 'n8n Developer',
      company: 'NextGen Digital Solutions',
      period: 'June 2023 - March 2024',
      description: 'As the lead n8n Automation Expert, I architected the company\'s core automation infrastructure. I designed efficient workflow systems, automated business processes, integrated APIs, and reduced operational overhead significantly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-900 mb-12"
        >
          About Me
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left: About text and Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 dark:text-neutral-700 leading-relaxed">
              I'm a Full-Stack MERN Developer with expertise in AI automation, voice-driven intelligent systems, and end-to-end e-commerce product development. I specialize in building scalable digital solutions, real-time applications, and automation-driven workflows that help businesses operate faster and smarter.
            </p>

            {/* Highlight Cards - Below paragraph */}
            <div className="space-y-4 mt-8">
              {highlightCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex items-start gap-4 p-5 bg-white dark:bg-white rounded-xl border border-neutral-200 dark:border-neutral-300 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Empty space or future content */}
          <div></div>
        </div>

        {/* Experience Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-900 mb-8">
            Experience
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-12 md:pl-16 pb-10 last:pb-0"
                >
                  {/* Timeline circle */}
                  <div className="absolute left-2 md:left-4 top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-2 border-white dark:border-neutral-50 shadow-lg z-10"></div>

                  {/* Content card */}
                  <div className="bg-white dark:bg-white rounded-xl border border-neutral-200 dark:border-neutral-300 shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-900">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base font-medium text-primary-600 dark:text-primary-600 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
