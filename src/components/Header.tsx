import { Search } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="px-5 py-3.5 flex justify-between items-center glass sticky top-0 z-40 border-b-0 rounded-b-3xl mb-2">
      <Link to="/" className="font-display text-[22px] font-bold tracking-tight text-white flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-sm text-white">C</div>
        <span>Combi<span className="text-cyan-400">Wise</span></span>
      </Link>
      <div className="flex items-center gap-3">
        <button className="glass rounded-xl px-3 py-1.5 text-[11px] font-semibold text-cyan-400 tracking-widest hover:bg-white/10 transition-colors">
          FR &rarr; EN
        </button>
        <button className="w-[36px] h-[36px] glass rounded-xl flex items-center justify-center text-slate-100 hover:bg-white/10 transition-colors">
          <Search size={16} />
        </button>
      </div>
    </header>
  );
}
