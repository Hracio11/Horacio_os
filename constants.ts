
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neural Vision Dashboard",
    description: "Una plataforma de análisis predictivo basada en redes neuronales para visualización de datos en tiempo real.",
    tech: ["React", "D3.js", "TensorFlow.js", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/neural/800/600",
    link: "#"
  },
  {
    id: 2,
    title: "EcoSphere E-Commerce",
    description: "Marketplace minimalista enfocado en productos sostenibles con checkout biométrico simulado.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    imageUrl: "https://picsum.photos/seed/eco/800/600",
    link: "#"
  },
  {
    id: 3,
    title: "Aura AI Assistant",
    description: "Asistente de voz inteligente integrado con modelos de lenguaje de gran escala para domótica avanzada.",
    tech: ["TypeScript", "Gemini API", "Web Speech API", "Node.js"],
    imageUrl: "https://picsum.photos/seed/aura/800/600",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  // Técnicas
  { name: "HTML, CSS, JavaScript, PHP", level: 95, category: "Técnica" },
  { name: "SQL y Gestión de Bases de Datos", level: 88, category: "Técnica" },
  { name: "React y Frameworks relacionados", level: 92, category: "Técnica" },
  { name: "WordPress y Administración Web", level: 90, category: "Técnica" },
  
  // Blandas
  { name: "Comunicación efectiva", level: 98, category: "Blanda" },
  { name: "Resolución de problemas", level: 95, category: "Blanda" },
  { name: "Trabajo en equipo", level: 94, category: "Blanda" },
  { name: "Adaptabilidad", level: 92, category: "Blanda" },
  { name: "Organización y responsabilidad", level: 96, category: "Blanda" }
];
