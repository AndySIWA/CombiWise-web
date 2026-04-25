export type Category = 'Science' | 'Business' | 'Tech' | 'Santé';
export type Format = 'article' | 'slides' | 'infographic' | 'interactive';

export interface Article {
  id: string;
  title: string;
  category: Category;
  format: Format;
  readTime: string;
  date: string;
  heroImage?: string;
  emoji: string;
  excerpt: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Pourquoi ton cerveau oublie presque tout',
    category: 'Science',
    format: 'article',
    readTime: '6 min',
    date: '24 Avr',
    heroImage: 'bg-gradient-to-br from-[#1a1228] via-[#0f1f2e] to-[#0d1a10]',
    emoji: '🧠',
    excerpt: 'Tu lis, tu comprends, et deux jours plus tard : évaporé. Ce n\'est pas un défaut de ton cerveau — c\'est son fonctionnement normal.',
    tags: ['neuroscience', 'mémoire']
  },
  {
    id: '2',
    title: 'L\'ADN comme disque dur',
    category: 'Science',
    format: 'interactive',
    readTime: '4 min',
    date: '22 Avr',
    emoji: '🧬',
    excerpt: 'Comment stocker toutes les données du monde dans une cuillère à café.',
    tags: ['génétique', 'données']
  },
  {
    id: '3',
    title: 'Le pouvoir des intérêts composés',
    category: 'Business',
    format: 'article',
    readTime: '5 min',
    date: '20 Avr',
    emoji: '📈',
    excerpt: 'La force la plus puissante de l\'univers.',
    tags: ['finance', 'investissement']
  },
  {
    id: '4',
    title: 'Comment fonctionne un LLM',
    category: 'Tech',
    format: 'infographic',
    readTime: '3 min',
    date: '18 Avr',
    emoji: '🤖',
    excerpt: 'Plongée au cœur des modèles de langage.',
    tags: ['IA', 'machine learning']
  },
  {
    id: '5',
    title: 'Le sommeil profond réinitialise le cerveau',
    category: 'Santé',
    format: 'article',
    readTime: '7 min',
    date: '15 Avr',
    emoji: '🫀',
    excerpt: 'Pendant la nuit, un véritable système de nettoyage se met en place.',
    tags: ['sommeil', 'cerveau']
  },
  {
    id: '6',
    title: 'Énergie solaire : où en est-on vraiment ?',
    category: 'Tech',
    format: 'interactive',
    readTime: '5 min',
    date: '10 Avr',
    emoji: '⚡',
    excerpt: 'Les avancées fulgurantes du photovoltaïque.',
    tags: ['énergie', 'climat']
  }
];

export const formatLabels: Record<Format, string> = {
  article: '📄 Article',
  slides: '🎞 Présentation',
  infographic: '🖼 Infographie',
  interactive: '📊 Interactif'
};

export const categoryColors: Record<Category, { bg: string, text: string, hex: string }> = {
  Science: { bg: 'bg-teal-app/10', text: 'text-teal-app', hex: '#2DD4BF' },
  Business: { bg: 'bg-gold-app/10', text: 'text-gold2', hex: '#C9A84C' },
  Tech: { bg: 'bg-violet-app/10', text: 'text-violet-app', hex: '#8B5CF6' },
  Santé: { bg: 'bg-green-app/10', text: 'text-green-app', hex: '#34D399' }
};
