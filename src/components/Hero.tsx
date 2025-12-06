import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-white to-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                Full-Stack Developer | AI Automation
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight text-neutral-900"
            >
              Kenil Mangukiya
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-neutral-600 font-medium"
            >
              Full-Stack MERN Developer | AI Automation, Voice Agents & E-Commerce Solutions
            </motion.p>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-neutral-600 leading-relaxed"
            >
              I build intelligent AI-powered applications, real-time experiences, voice-driven automation systems, and scalable full-stack solutions.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-lg font-medium transition-colors hover:bg-neutral-50"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Circular Glow (Hidden on mobile) */}
              <div className="hidden md:block absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/20 blur-3xl -z-10 translate-x-6 translate-y-6" />

              {/* Profile Image Circle */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-lg border-4 border-slate-100 overflow-hidden">
                <img
                  src="/mine-2.png"
                  alt="Kenil Mangukiya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 400;
                    canvas.height = 400;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                      const gradient = ctx.createLinearGradient(0, 0, 400, 400);
                      gradient.addColorStop(0, '#e0f2fe');
                      gradient.addColorStop(1, '#f1f5f9');
                      ctx.fillStyle = gradient;
                      ctx.fillRect(0, 0, 400, 400);
                      ctx.fillStyle = '#0ea5e9';
                      ctx.font = 'bold 80px Arial';
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'middle';
                      ctx.fillText('KM', 200, 200);
                      (e.target as HTMLImageElement).src = canvas.toDataURL();
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;