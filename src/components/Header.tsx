import { Search, Home, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';

export function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/explore', label: 'Explorer', icon: Search },
    { path: '/learn', label: 'Apprendre', icon: BookOpen },
    { path: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 glass border-b-0 rounded-b-3xl lg:rounded-none mb-2">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex justify-between items-center">
        <Link to="/" className="font-display text-[22px] font-bold tracking-tight text-white flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-sm text-white">C</div>
          <span>Combi<span className="text-cyan-400">Wise</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-2",
                  isActive ? "bg-white/10 text-cyan-400" : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button className="glass rounded-xl px-3 py-1.5 text-[11px] font-semibold text-cyan-400 tracking-widest hover:bg-white/10 transition-colors">
            FR &rarr; EN
          </button>
          <button className="w-[36px] h-[36px] glass rounded-xl flex items-center justify-center text-slate-100 hover:bg-white/10 transition-colors lg:hidden">
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
