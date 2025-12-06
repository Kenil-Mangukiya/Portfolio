import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white to-[#f9fbff] py-12 md:py-16"
    >
      {/* FIXED WIDTH */}
      <div className="max-w-[1450px] mx-auto mt-12 px-4 md:px-8 h-full">

        {/* FIX: Expanded left column → 60% / 40% layout */}
        <div className="grid md:grid-cols-[60%_40%] gap-10 items-center pt-6">

          {/* LEFT SECTION — EXPANDED WIDTH */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Tag */}
            <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              Full-Stack Developer | AI Automation | Voice Agents
            </span>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-neutral-900">
              Kenil Mangukiya
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-[95%]">
              Full-Stack MERN Developer | AI Automation, Voice Agents & E-Commerce Solutions
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-[95%]">
              I’m a Full-Stack MERN Developer with 1 year of real-world experience specializing in building intelligent, scalable, and automation-driven digital systems. My work spans AI-powered workflows, real-time communication platforms, and high-performance backend architectures designed to handle modern business demands. I focus heavily on writing clean, maintainable code and building reliable systems that scale without compromising speed or user experience.
              <br />
              <br />
              Beyond development, I’m passionate about creating solutions that integrate AI, automation, and cloud technologies to help businesses operate smarter and faster. I enjoy solving complex engineering problems, optimizing performance, and delivering seamless user interfaces backed by strong engineering principles. My goal is always to engineer products that are efficient, intuitive, and built for long-term growth.
            </p>

            {/* Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700
                         text-white rounded-lg font-medium transition-all shadow-md"
            >
              <Download size={20} />
              Download Resume
            </button>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center overflow-visible"
            >
              {/* Glow – reduced size */}
              <div className="hidden md:block absolute inset-0 w-[400px] h-[400px] rounded-full 
                              bg-blue-200/30 blur-3xl -z-10" />

              {/* Circle – reduced from 480 → 400 */}
              <div className="relative rounded-full p-3 bg-gradient-to-br
                              from-white via-[#d7eaff] to-white shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                              w-[400px] h-[400px] overflow-hidden flex items-center justify-center">

                {/* Crop + zoom image for shoulders-only view */}
                <div className="w-full h-full rounded-full bg-[#7cf3e5] overflow-hidden flex items-center justify-center">
                  <img
                    src="/mine-2.png"
                    alt="Kenil Mangukiya"
                    className="w-full h-full object-cover object-center scale-[1.25] translate-y-[30px]"
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
