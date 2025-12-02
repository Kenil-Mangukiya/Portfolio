import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Add resume download logic here
    window.open('/resume.pdf', '_blank');
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Kenil Mangukiya
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-neutral-300 font-medium"
            >
              Full-Stack MERN Developer | AI Automation, Voice Agents & E-Commerce Solutions
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-neutral-400 leading-relaxed"
            >
              I build intelligent AI-powered applications, real-time experiences, voice-driven automation systems, and scalable full-stack solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 hover:border-white/50 text-white rounded-lg font-medium transition-colors backdrop-blur-sm"
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-1">
                <div className="w-full h-full rounded-full bg-neutral-800 overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Kenil Mangukiya"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Create a simple gradient placeholder using data URI
                      const canvas = document.createElement('canvas');
                      canvas.width = 400;
                      canvas.height = 400;
                      const ctx = canvas.getContext('2d');
                      if (ctx) {
                        const gradient = ctx.createLinearGradient(0, 0, 400, 400);
                        gradient.addColorStop(0, '#3b82f6');
                        gradient.addColorStop(1, '#1d4ed8');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, 400, 400);
                        ctx.fillStyle = '#ffffff';
                        ctx.font = 'bold 80px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('KM', 200, 200);
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

