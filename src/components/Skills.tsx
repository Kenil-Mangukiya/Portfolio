import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-900 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-300 rounded-xl bg-white dark:bg-white hover:shadow-md transition-all cursor-default"
              >
                <Icon className="text-3xl text-neutral-700 dark:text-neutral-700" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-700 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

