import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { articles } from '@/data/mock';
import { cn } from '@/lib/utils';
import { X, MoreHorizontal, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

export function Slides() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  const article = articles.find(a => a.id === id) || articles[0];

  const handleNext = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  const handlePrev = () => setCurrentSlide(prev => Math.max(prev - 1, 1));

  return (
    <div className="bg-bg-app min-h-screen flex flex-col">
      <div className="pt-8 px-5 pb-3 flex justify-between items-center z-10 glass-dark border-x-0 border-t-0 rounded-b-3xl">
        <button onClick={() => navigate(-1)} className="text-[20px] text-white hover:text-white transition-colors w-10 h-10 glass flex items-center justify-center rounded-xl">
          <X size={20} />
        </button>
        <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase">
          Slide {currentSlide} / {totalSlides}
        </div>
        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="mx-6 mt-6 mb-5 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 rounded-full"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      <div className="mx-5 glass rounded-3xl overflow-hidden flex flex-col flex-1 max-h-[500px]">
        <div className="h-[180px] bg-white/5 flex items-center justify-center text-[72px] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
          <span className="relative z-10">{article.emoji}</span>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-[10px] font-bold text-cyan-400 tracking-[0.15em] uppercase mb-3">
            0{currentSlide} — Le mécanisme
          </div>
          <h2 className="font-display text-[22px] font-bold text-white mb-4 tracking-tight leading-[1.3]">
            La courbe de l'oubli d'Ebbinghaus
          </h2>
          <p className="text-[15px] leading-[1.7] text-slate-300">
            En 1885, Hermann Ebbinghaus découvre que la mémoire décline de façon exponentielle après l'apprentissage. Sans révision, 70% disparaît en 24 heures.
          </p>
        </div>
      </div>

      <div className="mt-8 px-8 flex justify-between items-center">
        <button 
          onClick={handlePrev}
          disabled={currentSlide === 1}
          className="w-14 h-14 rounded-2xl glass flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i + 1 === currentSlide ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          disabled={currentSlide === totalSlides}
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center disabled:opacity-50 transition-colors shadow-lg",
            currentSlide === totalSlides ? "glass" : "bg-indigo-600 text-white shadow-indigo-500/20"
          )}
        >
          {currentSlide === totalSlides ? <X size={24} className="text-white" /> : <ArrowRight size={24} />}
        </button>
      </div>

      {currentSlide < totalSlides && (
        <div className="mx-5 mt-8 p-4 glass-dark border-l-4 border-l-cyan-400 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
            ⚡
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Suivant</div>
            <div className="font-display text-[14px] text-white font-bold truncate line-clamp-1">
              La répétition espacée : la solution
            </div>
          </div>
          <ChevronRight size={20} className="text-slate-500" />
        </div>
      )}
      <div className="pb-8" />
    </div>
  );
}
