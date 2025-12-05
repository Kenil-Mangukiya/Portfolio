export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time Chat App',
    description: 'A real-time messaging application with live updates, user authentication, and modern UI/UX design.',
    technologies: ['React', 'Node.js', 'Socket.io', 'CSS'],
    liveDemo: 'https://chatly.aiyug.us/',
    github: 'https://github.com/Kenil-Mangukiya/chat-app',
    image: '/chat-app.png',
  },
  {
    id: 2,
    title: 'Voice Agent CRM',
    description: 'An intelligent CRM system powered by AI voice agents for automated customer interactions and data management.',
    technologies: ['MERN', 'Express', 'Retell AI', 'Voice Agents'],
    liveDemo: 'https://voice-ai-assistance.vercel.app/',
    github: 'https://github.com/Kenil-Mangukiya/Voice-Agent',
    image: '/voice-agent-crm.png',
  },
  {
    id: 3,
    title: 'ScaleHub UI/UX Website',
    description: 'A modern, responsive website with beautiful UI/UX design, showcasing business solutions and services.',
    technologies: ['MERN', 'CSS', 'Python'],
    liveDemo: 'https://scalehub-km.vercel.app/',
    github: 'https://github.com/Kenil-Mangukiya/ScaleHub',
    image: '/scalehub.png',
  },
];

