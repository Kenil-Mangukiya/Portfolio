import { motion } from 'framer-motion';
import { skills as allSkills, Skill } from '../data/skills.tsx';

const categoryDefinitions: {
  title: string;
  items: { name: string; tooltip?: string }[];
}[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', tooltip: 'Building interactive UI components' },
      { name: 'Next.js', tooltip: 'Server-side rendering & hybrid apps' },
      { name: 'TailwindCSS', tooltip: 'Utility-first responsive styling' },
      { name: 'ShadCN UI', tooltip: 'Design system + components' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', tooltip: 'Scalable backend applications' },
      { name: 'Express.js', tooltip: 'Fast, minimal web servers' },
      { name: 'MongoDB', tooltip: 'Document DB for flexible schemas' },
      { name: 'MySQL', tooltip: 'Relational data storage' },
      { name: 'Socket.io', tooltip: 'Real-time bi-directional communication' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Docker', tooltip: 'Containerized deployments' },
      { name: 'DigitalOcean', tooltip: 'Cloud infrastructure & droplets' },
      { name: 'GoDaddy', tooltip: 'Domain + hosting management' },
      { name: 'CI/CD Pipelines', tooltip: 'Automated delivery pipelines' },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'Retell AI', tooltip: 'Real-time conversational voice automation' },
      { name: 'Voice Agents', tooltip: 'Voice-driven agent systems' },
      { name: 'Python', tooltip: 'Scripting, ML, and automation' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', tooltip: 'Version control' },
      { name: 'GitHub', tooltip: 'Code hosting & workflows' },
      { name: 'VS Code', tooltip: 'Primary developer editor' },
      { name: 'Cursor', tooltip: 'AI coding tools' },
      { name: 'CRM Systems', tooltip: 'Customer data & workflows' },
    ],
  },
];

// Helper: look up skill by name from data/skills
const findSkill = (name: string): Skill | null => {
  return allSkills.find((s) => s.name === name) || null;
};

const SkillCard: React.FC<{
  name: string;
  tooltip?: string;
  index: number;
}> = ({ name, tooltip, index }) => {
  const skill = findSkill(name);
  const Icon = skill?.icon || (() => null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative"
    >
      <div className="group">
        <div
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-sm transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-default"
          aria-describedby={`tooltip-${name.replace(/\s+/g, '-')}`}
        >
          <Icon className="text-3xl text-neutral-700 dark:text-neutral-300 dark:filter dark:brightness-110 group-hover:brightness-110 dark:group-hover:brightness-125" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center">
            {name}
          </span>
        </div>

        {/* Premium TooltipContent-like element positioned above card */}
        {tooltip ? (
          <div
            id={`tooltip-${name.replace(/\s+/g, '-')}`}
            role="tooltip"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] opacity-0 group-hover:opacity-100 transition-all duration-200"
            style={{ zIndex: 60 }}
          >
            <div className="rounded-lg px-3 py-2 text-sm font-medium bg-neutral-900 text-white shadow-xl animate-in fade-in zoom-in-95 duration-200">
              {tooltip}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="pt-9 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mb-8"
        >
          Technologies & tools I use to build intelligent, scalable, high-performance applications.
        </motion.p>

        <div className="grid gap-10 md:gap-12">
          {categoryDefinitions.map((cat, catIndex) => (
            <div key={cat.title}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.06 }}
                className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4"
              >
                {cat.title}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                {cat.items.map((it, i) => (
                  <SkillCard key={it.name} name={it.name} tooltip={it.tooltip} index={i + catIndex * 10} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


