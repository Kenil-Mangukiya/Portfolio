export interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  live: string | null;
  github: string;
  glow: string;
}

export const projects: Project[] = [
  {
    title: 'Real-Time Chat App',
    image: '/chat-app.png',
    description:
      'A high-performance real-time messaging platform built with Next.js and Socket.io, featuring live chat synchronization, authentication, responsive UI components using TailwindCSS + ShadCN, and scalable backend architecture powered by Node.js, Express.js, and MongoDB.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'TailwindCSS', 'ShadCN UI'],
    live: 'https://chatly.aiyug.us/',
    github: 'https://github.com/Kenil-Mangukiya/chat-app',
    glow: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Voice Agent CRM',
    image: '/voice-agent-crm.png',
    description:
      'A powerful CRM platform for creating and managing AI-driven voice agents, complete with knowledge bases, Twilio number integration, and detailed call history tracking. Built with intelligent workflow automation and sentiment-aware interactions on a secure Node.js, Express.js, React, MySQL, and Zod-validated architecture.',
    tech: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'TailwindCSS', 'Zod', 'Voice Agents', 'CRM Automation'],
    live: 'https://voice-ai-assistance.vercel.app/',
    github: 'https://github.com/Kenil-Mangukiya/Voice-Agent',
    glow: 'from-purple-500 to-pink-400',
  },
  {
    title: 'ScaleHub UI/UX Website',
    image: '/scalehub.png',
    description:
      'A polished, modern, and highly interactive UI/UX business website built using Next.js, styled with TailwindCSS, and elevated through premium Framer Motion animations. Designed to showcase services with smooth transitions, responsive layouts, and a visually impactful brand identity.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    live: 'https://scalehub-km.vercel.app/',
    github: 'https://github.com/Kenil-Mangukiya/ScaleHub',
    glow: 'from-teal-400 to-green-400',
  },
  {
    title: 'WhatsApp Chatbot System',
    image: '/whatsapp-chatbot.png',
    description:
      'A robust WhatsApp automation system capable of sending templated messages, handling inbound events through secure webhooks, integrating workflows using Meta Cloud API and UpMatrix pipelines, and executing automated business operations. Built with a modular Node.js + Express.js architecture for scale and reliability.',
    tech: ['Node.js', 'Express.js', 'Meta Cloud API', 'UpMatrix API', 'Webhook Engine', 'Automation Scripts'],
    live: null,
    github: 'https://github.com/Kenil-Mangukiya/WhatsApp-Chatbot',
    glow: 'from-orange-400 to-yellow-300',
  },
];

