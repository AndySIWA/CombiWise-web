import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { articles, categoryColors, formatLabels } from '@/data/mock';
import { ArrowLeft, Clock, Calendar, Share2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState<'FR' | 'EN'>('FR');
  const [copied, setCopied] = useState(false);
  
  const article = articles.find(a => a.id === id) || articles[0];

  const handleShare = async () => {
    const url = window.location.href;
    const title = article.title;
    const text = `Découvrez cet article sur CombiWise : ${title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pb-24 bg-bg-app min-h-screen">
      {/* Hero */}
      <div className="h-[220px] relative flex items-end">
        <div className={cn(
          "absolute inset-0 flex items-center justify-center text-[80px] bg-white/5"
        )}>
          {article.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,23,42)] to-transparent" />

        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-20 w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={16} />
        </button>

        <button 
          onClick={handleShare}
          className="absolute top-4 right-4 z-20 w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors text-white"
        >
          {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
        </button>

        <div className="relative z-10 p-5 w-full">
          <div className={cn(
            "inline-block px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-widest uppercase mb-3 glass-dark",
            categoryColors[article.category].text
          )}>
            {article.emoji} {article.category}
          </div>
          <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white mb-2">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="flex items-center gap-4 px-5 py-4 border-b border-white/10 glass-dark">
        <span className="text-[12px] font-mono text-slate-400 flex items-center gap-1.5">
          <Clock size={14} /> {article.readTime}
        </span>
        <span className="text-[12px] font-mono text-slate-400 flex items-center gap-1.5">
          <Calendar size={14} /> {article.date}
        </span>
        
        <div className="ml-auto flex glass rounded-full p-1">
          <button 
            onClick={() => setLang('FR')}
            className={cn(
              "px-3 py-1.5 text-[11px] font-bold transition-all rounded-full",
              lang === 'FR' ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-slate-400 hover:text-white"
            )}
          >
            FR
          </button>
          <button 
            onClick={() => setLang('EN')}
            className={cn(
              "px-3 py-1.5 text-[11px] font-bold transition-all rounded-full",
              lang === 'EN' ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-slate-400 hover:text-white"
            )}
          >
            EN
          </button>
        </div>
      </div>

      {/* Article Body */}
      <div className="p-6">
        <div className="font-display text-[18px] font-normal italic leading-relaxed text-emerald-400 mb-6 pb-6 border-b border-white/10">
          "{article.excerpt}"
        </div>

        <h2 className="font-display text-[22px] font-bold text-white mb-4 tracking-tight">
          La mémoire n'est pas un enregistreur
        </h2>
        <p className="text-[16px] leading-[1.8] text-slate-300 mb-6">
          Contrairement à ce qu'on imagine, le cerveau ne stocke pas les informations comme un disque dur. Chaque souvenir est une reconstruction active, influencée par l'émotion, le contexte et la répétition.
        </p>

        <div className="glass-dark border-l-4 border-cyan-400 rounded-2xl p-5 my-6 flex items-start gap-4">
          <div className="text-xl mt-0.5">💡</div>
          <p className="text-[14px] leading-relaxed text-slate-200">
            <strong>À retenir :</strong> La courbe de l'oubli d'Ebbinghaus montre qu'on perd 70% d'une information en 24h sans révision active.
          </p>
        </div>

        <h2 className="font-display text-[22px] font-bold text-white mb-4 tracking-tight mt-8">
          L'encodage sélectif
        </h2>
        <p className="text-[16px] leading-[1.8] text-slate-300 mb-6">
          Ton hippocampe filtre en permanence ce qui mérite d'être conservé. Les informations chargées émotionnellement ou répétées plusieurs fois ont une bien meilleure chance de survivre à l'élagage synaptique nocturne.
        </p>

        {article.format === 'slides' && (
          <Link to={`/slides/${article.id}`} className="mt-8 flex items-center justify-between glass rounded-3xl p-5 hover:bg-white/10 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                🎞
              </div>
              <div>
                <div className="text-[15px] font-bold font-display text-white mb-1">Lancer la présentation complète</div>
                <div className="text-[12px] text-slate-400">Format slides interactif</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-cyan-400">
              &rarr;
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
