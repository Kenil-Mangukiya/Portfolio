import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="relative group"
    >
      {/* Neon Glow Bar */}
      <div
        className={`absolute -left-2 top-0 h-full w-1 rounded-full bg-gradient-to-b ${project.glow} blur-[2px] shadow-lg`}
      />

      {/* Card Container */}
      <div className="relative rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden shadow-sm mb-4 bg-neutral-200 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const canvas = document.createElement('canvas');
              canvas.width = 600;
              canvas.height = 400;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.fillStyle = '#e5e7eb';
                ctx.fillRect(0, 0, 600, 400);
                ctx.fillStyle = '#6b7280';
                ctx.font = 'bold 24px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const lines = project.title.split(' ');
                const lineHeight = 30;
                const startY = 200 - ((lines.length - 1) * lineHeight) / 2;
                lines.forEach((line, i) => {
                  ctx.fillText(line, 300, startY + i * lineHeight);
                });
                (e.target as HTMLImageElement).src = canvas.toDataURL();
              }
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          {project.title}
        </h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-300 dark:border-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
