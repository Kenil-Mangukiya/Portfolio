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
      'A high-performance real-time messaging platform built with Next.js and Socket.io, featuring live chat synchronization, authentication, responsive UI components, and scalable backend architecture powered by Node.js, Express.js, MongoDB, TailwindCSS, and ShadCN.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'TailwindCSS', 'ShadCN'],
    live: 'https://chatly.aiyug.us/',
    github: 'https://github.com/Kenil-Mangukiya/chat-app',
    glow: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Voice Agent CRM',
    image: '/voice-agent-crm-2.png',
    description:
      'A powerful CRM system for creating and managing AI-driven voice agents with full operational control, Twilio number integration, call history tracking, and workflow automation—powered by Node.js, Express.js, React, MySQL, Zod validation, and voice agent pipelines.',
    tech: ['Node.js', 'Express.js', 'React', 'MySQL', 'TailwindCSS', 'Zod', 'Voice Agents', 'CRM'],
    live: 'https://voice-ai-assistance.vercel.app/dashboard',
    github: 'https://github.com/Kenil-Mangukiya/Voice-Agent',
    glow: 'from-purple-500 to-pink-400',
  },
  {
    title: 'ScaleHub UI/UX Website',
    image: '/scalehub.png',
    description:
      'A polished, modern, and highly interactive UI/UX business website built using Next.js and TailwindCSS, enhanced with premium Framer Motion animations for fluid transitions, responsive layouts, and a visually impactful brand identity.',
    tech: ['TailwindCSS', 'Framer Motion', 'Next.js'],
    live: 'https://scalehub-km.vercel.app/',
    github: 'https://github.com/Kenil-Mangukiya/ScaleHub',
    glow: 'from-teal-400 to-green-400',
  },
  {
    title: 'WhatsApp Chatbot System',
    image: '/whatsapp-2.jpg',
    description:
      'A robust WhatsApp automation system capable of sending templated messages,\nhandling inbound events through secure webhooks, integrating workflows using\nMeta Cloud API and UpMatrix pipelines, and executing automated business operations.',
    tech: ['Node.js', 'Express.js', 'Meta Cloud API', 'UpMatrix API', 'Webhook Engine'],
    live: null,
    github: 'https://github.com/Kenil-Mangukiya',
    glow: 'from-orange-400 to-yellow-300',
  },
];

