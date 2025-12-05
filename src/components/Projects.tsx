import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-900 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-neutral-200 dark:border-neutral-300"
            >
              <div className="relative h-56 md:h-64 lg:h-72 bg-neutral-200 dark:bg-neutral-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Create a simple placeholder using data URI
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
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-100 text-primary-700 dark:text-primary-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-300 dark:border-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-700 rounded-lg font-medium transition-colors text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

