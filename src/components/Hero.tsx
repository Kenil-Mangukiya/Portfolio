import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="
        bg-gradient-to-b 
        from-white to-[#f3f7ff] 
        dark:from-[#0d1117] dark:to-[#111827]
        py-16 md:py-20
        transition-colors duration-300
      "
    >
      <div className="max-w-[1450px] mx-auto mt-10 px-4 md:px-8 h-full">

        {/* GRID */}
        <div className="grid md:grid-cols-[65%_35%] gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* TAG */}
            <span className="
              px-4 py-2 rounded-full text-xs font-semibold border 
              bg-blue-50 text-blue-700 border-blue-200
              dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800
              transition-colors
            ">
              Full-Stack Developer | AI Automation | Voice Agents
            </span>

            {/* NAME */}
            <h1 className="
              text-5xl md:text-6xl font-bold leading-tight
              text-neutral-900 dark:text-white transition-colors
            ">
              Kenil Mangukiya
            </h1>

            {/* SUBTITLE */}
            <p className="
              text-lg md:text-xl font-medium max-w-[95%]
              text-neutral-700 dark:text-neutral-300 transition-colors
            ">
              Full-Stack MERN Developer | AI Automation, Voice Agents & E-Commerce Solutions
            </p>

            {/* DESCRIPTION */}
            <p className="
              text-sm md:text-base leading-relaxed max-w-[95%]
              text-neutral-600 dark:text-neutral-400 transition-colors
            ">
              I’m a Full-Stack MERN Developer with 1 year of real-world experience specializing in 
              building intelligent, scalable, and automation-driven digital systems. My work spans 
              AI-powered workflows, real-time communication platforms, and high-performance backend 
              architectures designed to handle modern business demands. I focus heavily on writing 
              clean, maintainable code and engineering systems that remain stable under scale. My goal 
              is always to design architectures that enhance business efficiency, reduce manual effort, 
              and ensure long-term reliability across diverse digital environments.
              <br /><br />
              Beyond development, I’m passionate about creating solutions that integrate AI,
              automation, and cloud technologies to help businesses operate smarter and faster.
              I enjoy solving complex engineering problems and delivering seamless user
              experiences backed by strong engineering principles.
            </p>

            {/* BUTTON */}
            <button
              onClick={handleDownloadResume}
              className="
                flex items-center gap-2 px-6 py-3 
                bg-blue-600 hover:bg-blue-700
                text-white rounded-lg font-medium 
                shadow-md transition-all
              "
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
            className="flex justify-center items-center mr-7"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center overflow-visible"
            >
              {/* GLOW (AUTO CHANGES IN DARK MODE) */}
              <div
                className="
                  hidden md:block absolute w-[450px] h-[450px] rounded-full 
                  bg-blue-200/40 dark:bg-blue-900/20 
                  blur-[90px] -z-10 transition-colors
                "
              />

              {/* OUTER RING (NOW CHANGES COLOR IN DARK MODE) */}
              <div
                className="
                  relative rounded-full p-4 bg-gradient-to-br
                  from-white via-[#e7f1ff] to-white 
                  dark:from-[#1f2937] dark:via-[#111827] dark:to-[#1f2937]
                  shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                  w-[420px] h-[420px] overflow-hidden 
                  flex items-center justify-center transition-colors
                "
              >
                {/* INNER ROUND AQUA BACKGROUND */}
                <div
                  className="
                    w-full h-full rounded-full 
                    bg-[#a7fff3] dark:bg-[#0e4a43]
                    overflow-hidden flex items-center justify-center transition-colors
                  "
                >
                  <img
                    src="/mine-2.png"
                    alt="Kenil Mangukiya"
                    className="w-full h-full object-cover object-center scale-[1.12] translate-y-[10px]"
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
