import { Home, Search, BookOpen, User } from 'lucide-react';
import { useLocation, Link } from 'react-router';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/explore', label: 'Explorer', icon: Search },
    { path: '/learn', label: 'Apprendre', icon: BookOpen },
    { path: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto z-50 p-4">
      <div className="glass rounded-3xl h-[72px] flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1.5 p-1.5 min-w-[64px] relative"
            >
              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2}
                className={cn(
                  "transition-colors duration-200 relative z-10",
                  isActive ? "text-cyan-400" : "text-slate-400"
                )} 
              />
              <span className={cn(
                "text-[9px] font-bold tracking-[0.08em] uppercase transition-colors duration-200",
                isActive ? "text-cyan-400" : "text-slate-400"
              )}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute -top-1" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
