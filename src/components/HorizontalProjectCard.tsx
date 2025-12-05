import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface HorizontalProjectCardProps {
  project: Project;
  index: number;
}

const HorizontalProjectCard = ({ project, index }: HorizontalProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // Determine preview: first sentence if short, otherwise first 140 chars
  const preview = (() => {
    const firstSentenceEnd = project.description.indexOf('.');
    if (firstSentenceEnd !== -1 && firstSentenceEnd < 140) {
      return project.description.slice(0, firstSentenceEnd + 1);
    }
    if (project.description.length <= 140) return project.description;
    return project.description.slice(0, 140);
  })();

  const needsToggle = project.description.length > preview.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col md:flex-row items-stretch gap-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      {/* COLUMN 2 — IMAGE (no glow bar column) */}
      <motion.div
        className="flex-shrink-0 w-full md:w-2/5 lg:w-2/5 h-52 md:h-auto min-h-52"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl shadow-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%236b7280%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E' +
              encodeURIComponent(project.title) +
              '%3C/text%3E%3C/svg%3E';
          }}
        />
      </motion.div>

      {/* COLUMN 3 — TEXT CONTENT */}
      <div className="flex flex-col justify-start p-6 md:p-8 flex-grow w-full md:w-3/5 lg:w-3/5 space-y-4">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100"
        >
          {project.title}
        </motion.h3>

        {/* Tech Stack Badges (unchanged) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${project.glow} bg-opacity-10 text-transparent bg-clip-text border border-opacity-20 border-neutral-400 dark:border-neutral-600`}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Description with Read More / Read Less toggle */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[18rem]' : 'max-h-20'}`}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed"
          >
            {!expanded ? (
              <>
                {preview}
                {needsToggle ? '... ' : ''}
                {needsToggle && (
                  <button onClick={() => setExpanded(true)} className="text-blue-600 dark:text-blue-400 underline ml-1 cursor-pointer">
                    Read More
                  </button>
                )}
              </>
            ) : (
              <>
                {project.description}
                {needsToggle && (
                  <button onClick={() => setExpanded(false)} className="text-blue-600 dark:text-blue-400 underline ml-2 cursor-pointer">
                    Read Less
                  </button>
                )}
              </>
            )}
          </motion.p>
        </div>

        {/* Buttons (unchanged) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3 pt-2"
        >
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r ${project.glow} text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HorizontalProjectCard;
