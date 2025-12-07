import { motion } from "framer-motion";
import {
  Code,
  MessageCircle,
  ShoppingCart,
  Cloud,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const About = () => {
  const highlightCards = [
    {
      icon: Code,
      title: "MERN Stack Expertise",
      description:
        "Building scalable full-stack applications using MongoDB, Express, React, and Node.js. Specializing in clean architecture, reusable component design, and optimized backend logic.",
    },
    {
      icon: MessageCircle,
      title: "AI & Voice Agent Systems",
      description:
        "Developing intelligent automation, conversational agents, and voice-driven systems using advanced AI technologies like LLMs, workflow engines, and real-time APIs.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Product Development",
      description:
        "Creating e-commerce solutions with secure backend systems, smooth UX, payment integrations, optimized checkout flows, and scalable product architectures.",
    },
    {
      icon: Cloud,
      title: "Cloud Development & DevOps",
      description:
        "Deploying production-grade applications using DigitalOcean, GoDaddy, NGINX, PM2, SSL, CI/CD pipelines, and robust server management.",
    },
  ];

  const timeline = [
    {
      title: "Full Stack Developer",
      company: "Yogreet Global LLP",
      period: "October 2024 – Present",
      desc: "Building and deploying modern, scalable digital systems with AI workflows and automation pipelines.",
      isJob: true,
    },
    {
      title: "n8n Developer",
      company: "NextGen Digital Solutions",
      period: "June 2023 – March 2024",
      desc: "Designed core workflow automation, integrated APIs, and improved operational efficiency.",
      isJob: true,
    },
    {
      title: "BCA Student",
      company: "SDJ International College",
      period: "2023 – 2026",
      desc: "Learning software engineering principles and real-world project development.",
      isJob: false,
    },
  ];

  return (
    <section
      id="expertise"
      className="
      pt-20 pb-24
      bg-[#f9fbff] dark:bg-[#0c1117]
      transition-all duration-300
    "
    >
      <div className="max-w-[1450px] mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-10">
              Expertise & Experience
            </h2>

            <div className="space-y-6">
              {highlightCards.map((card, i) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="
                      flex items-start gap-5 p-6 rounded-xl
                      bg-white dark:bg-[#0d1117]
                      border border-neutral-200 dark:border-neutral-800
                      shadow-sm hover:shadow-lg transition-all
                    "
                  >
                    {/* FIXED ICON — PERFECT CIRCLE + GLOW */}
                    <div
                      className="
                        w-16 h-8 rounded-full
                        flex items-center justify-center
                        bg-blue-600 text-white
                        shadow-[0_0_18px_rgba(59,130,246,0.8)]
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative pt-16">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-6 pl-10">
              CAREER JOURNEY
            </h3>

            {/* FIXED TIMELINE LINE */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "92%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="
                absolute left-5 top-24 w-[2px]
                bg-neutral-300 dark:bg-neutral-700
                rounded-full
              "
            ></motion.div>

            <div className="space-y-12 pl-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    relative p-6 rounded-xl
                    bg-white dark:bg-[#0d1117]
                    border border-neutral-200 dark:border-neutral-800
                    shadow-sm hover:shadow-md transition-all
                  "
                >
                  {/* MARKER DOT */}
                  <div
                    className="
                      absolute -left-[38px] top-7
                      w-5 h-5 rounded-full
                      bg-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.8)]
                      border-4 border-white dark:border-[#0d1117]
                    "
                  ></div>

                  {/* CONTENT */}
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-600 mt-0.5">{item.company}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    {item.period}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
