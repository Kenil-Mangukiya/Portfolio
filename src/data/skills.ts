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
import { FaCode, FaCogs, FaMicrophone, FaShoppingCart, FaUsers, FaCodeBranch } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Socket.io', icon: SiSocketdotio },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'ShadCN UI', icon: FaCode },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'DigitalOcean', icon: SiDigitalocean },
  { name: 'GoDaddy', icon: SiGodaddy },
  { name: 'CI/CD Pipelines', icon: FaCodeBranch },
  { name: 'Python', icon: SiPython },
  { name: 'Retell AI', icon: FaMicrophone },
  { name: 'Voice Agents', icon: FaMicrophone },
  { name: 'CRM Systems', icon: FaUsers },
  { name: 'VS Code', icon: VscCode },
  { name: 'Cursor', icon: FaCode },
];
