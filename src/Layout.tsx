import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';

export function Layout() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/slides');

  return (
    <div className="min-h-screen pb-[72px]">
      {!hideNav && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
}
