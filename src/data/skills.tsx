import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiDigitalocean,
  SiGodaddy,
  SiPython,
} from 'react-icons/si';
import { FaMicrophone, FaUsers, FaCodeBranch } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Image icon components (load from /public)
const VsCodeImg: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/vs-code-3.png" alt="VS Code" className={`${className ?? ''} w-8 h-8 object-contain`} />
);
const RetellImg: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/retell.png" alt="Retell AI" className={`${className ?? ''} w-8 h-8 object-contain`} />
);
const CursorImg: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/cursor.jpg" alt="Cursor" className={`${className ?? ''} w-8 h-8 object-contain`} />
);
const ShadcnImg: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/shadcn.png" alt="ShadCN UI" className={`${className ?? ''} w-8 h-8 object-contain`} />
);

export const skills: Skill[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Socket.io', icon: SiSocketdotio },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'ShadCN UI', icon: ShadcnImg },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'DigitalOcean', icon: SiDigitalocean },
  { name: 'GoDaddy', icon: SiGodaddy },
  { name: 'CI/CD Pipelines', icon: FaCodeBranch },
  { name: 'Python', icon: SiPython },
  { name: 'Retell AI', icon: RetellImg },
  { name: 'Voice Agents', icon: FaMicrophone },
  { name: 'CRM Systems', icon: FaUsers },
  { name: 'VS Code', icon: VsCodeImg },
  { name: 'Cursor', icon: CursorImg },
];
