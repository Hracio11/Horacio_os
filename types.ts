
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Técnica' | 'Blanda';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
