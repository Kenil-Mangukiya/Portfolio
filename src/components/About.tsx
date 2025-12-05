import { motion } from 'framer-motion';
import { Code, MessageCircle, ShoppingCart, BriefcaseBusiness, GraduationCap } from 'lucide-react';

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

  const timelineItems = [
    {
      title: 'Full Stack Developer',
      company: 'Yogreet Global LLP',
      period: 'October 2024 – Present',
      description: 'As a Full Stack Developer, I build and deploy modern, scalable, and high-performance applications. I work across frontend, backend, AI integrations, and automation pipelines, helping deliver seamless digital products.',
      icon: null,
      isJob: true,
    },
    {
      title: 'n8n Developer',
      company: 'NextGen Digital Solutions',
      period: 'June 2023 – March 2024',
      description: 'As the lead n8n Automation Expert, I architected the company\'s core automation infrastructure. I designed efficient workflow systems, automated business processes, integrated APIs, and reduced operational overhead significantly.',
      icon: null,
      isJob: true,
    },
    {
      title: 'BCA Student',
      company: 'SDJ International College',
      period: '2023 – 2026',
      description: 'Currently pursuing Bachelor of Computer Applications, focusing on modern web technologies, software development, and real-world project implementation.',
      icon: '/images.jpg',
      isJob: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT COLUMN: About Me + Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-[580px]"
          >
            {/* Section Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-700 leading-relaxed">
                I'm a Full-Stack MERN Developer with expertise in AI automation, voice-driven intelligent systems, and end-to-end e-commerce product development. I specialize in building scalable digital solutions, real-time applications, and automation-driven workflows that help businesses operate faster and smarter.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4 mt-6">
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
                    className="flex items-start gap-4 p-5 bg-white dark:bg-white rounded-xl border border-neutral-200 dark:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
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

          {/* RIGHT COLUMN: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Career Journey Subtitle */}
            <div className="pl-12 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Career Journey
              </h3>
            </div>

            {/* Vertical line on the left */}
            <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {/* Timeline items with stagger animation */}
            <motion.div
              className="space-y-10 pl-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Circular marker */}
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white dark:border-neutral-50 shadow-md z-10"></div>

                  {/* Timeline content card */}
                  <div className="bg-white dark:bg-white rounded-xl border border-neutral-200 dark:border-neutral-300 shadow-sm hover:shadow-md transition-shadow p-5">
                    <div className="flex items-start gap-3 mb-2">
                      {/* Icon for job or education */}
                      <div className="flex-shrink-0 pt-0.5">
                        {item.isJob ? (
                          <BriefcaseBusiness className="w-5 h-5 text-blue-600" />
                        ) : (
                          <div className="flex items-center">
                            {item.icon ? (
                              <img
                                src={item.icon}
                                alt={item.company}
                                className="w-5 h-5 rounded-sm object-cover"
                              />
                            ) : (
                              <GraduationCap className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Title and company */}
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-900">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-600 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2.5 font-medium">
                      {item.period}
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
