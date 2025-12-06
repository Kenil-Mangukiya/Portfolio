import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="bg-gradient-to-b from-white to-[#f9fbff] py-6 md:py-8">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6 h-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[420px] md:min-h-[500px]">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 md:space-y-3"
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
            
            {/* Description - Expanded with more details */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl pt-1 space-y-3"
            >
              I'm a Full-Stack MERN Developer with 1 year of real-world experience building intelligent AI-powered applications, real-time messaging platforms, and automation-driven systems. I specialize in scalable backend architectures, modern frontend interfaces, and cloud technologies—focused on delivering fast, reliable, high-performance digital products.
              <br />
              <br />
              I also work extensively with AI automation, voice-driven solutions, and integration workflows that help businesses operate smarter. My goal is to create clean, efficient systems that scale effortlessly and provide meaningful user experiences.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-1"
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
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center md:justify-center items-center"
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
              className="relative flex items-center justify-center overflow-visible"
            >
              {/* Circular Glow (Hidden on mobile) */}
              <div className="hidden md:block absolute inset-0 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/20 blur-3xl -z-10 translate-x-4 translate-y-4" />

              {/* Profile Image Circle with premium ring - increased size, no crop */}
              <div className="relative rounded-full p-2 md:p-4 bg-gradient-to-br from-[#ffffff] via-[#cce7ff] to-[#ffffff] shadow-[0_10px_40px_rgba(0,0,0,0.12)] w-80 h-80 md:w-[560px] md:h-[560px] overflow-hidden flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <img
                    src="/mine-2.png"
                    alt="Kenil Mangukiya"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const canvas = document.createElement('canvas');
                      canvas.width = 560;
                      canvas.height = 560;
                      const ctx = canvas.getContext('2d');
                      if (ctx) {
                        const gradient = ctx.createLinearGradient(0, 0, 560, 560);
                        gradient.addColorStop(0, '#e0f2fe');
                        gradient.addColorStop(1, '#f1f5f9');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, 560, 560);
                        ctx.fillStyle = '#0ea5e9';
                        ctx.font = 'bold 130px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('KM', 280, 280);
                        (e.target as HTMLImageElement).src = canvas.toDataURL();
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;