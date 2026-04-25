import { useState } from 'react';
import { Link } from 'react-router';
import { articles, formatLabels, categoryColors, Category, Format } from '@/data/mock';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'Tout'>('Tout');
  const [activeFormat, setActiveFormat] = useState<Format | 'Tout'>('Tout');

  const categories = ['Tout', 'Science', 'Business', 'Tech', 'Santé'] as const;
  const formats = ['Tout', 'article', 'slides', 'infographic', 'interactive'] as const;

  const filteredArticles = articles.filter(article => {
    const matchCategory = activeCategory === 'Tout' || article.category === activeCategory;
    const matchFormat = activeFormat === 'Tout' || article.format === activeFormat;
    return matchCategory && matchFormat;
  });

  return (
    <div className="pb-24">
      {/* Filters Sticky Container */}
      <div className="sticky top-[73px] z-30 mb-6 flex flex-col gap-3 pt-2 pb-4 shadow-lg border-b border-white/5" style={{ background: 'radial-gradient(at 50% 0%, hsla(225,39%,20%,0.9) 0, #0f172a 100%)', backdropFilter: 'blur(12px)' }}>
        {/* Categories Strip */}
        <div className="flex gap-3 px-5 overflow-x-auto hide-scrollbar max-w-7xl mx-auto w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-2xl text-[13px] transition-all",
                activeCategory === cat 
                  ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/20" 
                  : "glass font-semibold text-slate-300 hover:bg-white/10"
              )}
            >
              <div className="flex items-center gap-1.5">
                {activeCategory === cat && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>}
                {cat}
              </div>
            </button>
          ))}
        </div>
        
        {/* Formats Strip */}
        <div className="flex gap-3 px-5 overflow-x-auto hide-scrollbar max-w-7xl mx-auto w-full">
          {formats.map((fmt) => (
            <button
              key={fmt}
              onClick={() => setActiveFormat(fmt)}
              className={cn(
                "shrink-0 px-3.5 py-1.5 rounded-xl text-[12px] transition-all border",
                activeFormat === fmt 
                  ? "glass border-cyan-400 text-cyan-400 font-bold" 
                  : "bg-white/5 border-transparent font-semibold text-slate-400 hover:bg-white/10"
              )}
            >
              <div className="flex items-center gap-1.5">
                {fmt === 'Tout' ? 'Tous' : formatLabels[fmt as Format]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Single List Section */}
      <div className="px-5 py-2 flex justify-between items-baseline mb-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-white">
          {filteredArticles.length} {filteredArticles.length > 1 ? 'articles trouvés' : 'article trouvé'}
        </h2>
      </div>

      <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <Link key={article.id} to={`/article/${article.id}`} className="glass rounded-3xl p-5 flex gap-4 hover:bg-white/10 transition-colors items-center h-full group">
              <div className="w-[80px] h-[80px] rounded-2xl shrink-0 flex items-center justify-center text-3xl bg-white/5 group-hover:scale-105 transition-transform">
                {article.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn("text-[10px] font-bold tracking-widest uppercase mb-1.5", categoryColors[article.category].text)}>
                  {article.category}
                </div>
                <h3 className="font-display text-[16px] font-bold leading-[1.35] mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <div className="text-[11px] text-slate-400 font-mono">⏱ {article.readTime}</div>
                  <div className="text-[10px] font-bold px-2.5 py-1 rounded-xl glass-dark text-slate-300">
                    {formatLabels[article.format]}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full glass rounded-3xl p-10 flex flex-col items-center justify-center text-center mt-4">
            <div className="text-4xl mb-4">🧐</div>
            <p className="font-display text-lg font-bold text-white mb-2">Aucun résultat</p>
            <p className="text-sm text-slate-400">Essayez de modifier vos filtres pour voir plus d'articles.</p>
            <button 
              onClick={() => { setActiveCategory('Tout'); setActiveFormat('Tout'); }}
              className="mt-6 glass-dark text-cyan-400 px-4 py-2 rounded-xl font-bold text-[13px] hover:bg-white/10 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
