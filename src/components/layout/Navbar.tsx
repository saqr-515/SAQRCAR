import React, { useState } from 'react';
import { Search, User, Settings, MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: () => void;
  onOpenService: (action: any) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenService,
  searchQuery = '',
  onSearchChange,
  onToggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (onSearchChange) {
      onSearchChange(val);
    }
    const carsSection = document.getElementById('cars');
    if (carsSection && val.trim().length > 0) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur-2xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* 1. Right (RTL): Blue square icon badge with white 'S' + Brand name */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform text-white font-black text-xl">
              S
            </div>
            <div>
              <span className="text-base sm:text-xl font-black bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent tracking-wide">
                SAQR للسيارات
              </span>
              <span className="block text-[9px] text-slate-400 tracking-widest font-bold">SAQR CARS KSA</span>
            </div>
          </div>

          {/* 2. Integrated Search Input */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm mx-2">
            <div className="relative w-full">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInput}
                placeholder="ابحث عن سيارة..."
                className="w-full bg-navy-900/90 border border-blue-500/25 text-white placeholder-slate-400 pr-10 pl-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs sm:text-sm shadow-inner"
              />
            </div>
          </div>

          {/* 3. Center: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            <a href="#" className="text-slate-200 hover:text-blue-400 font-bold text-sm transition-colors tracking-wide">
              الرئيسية
            </a>
            <a href="#cars" className="text-slate-200 hover:text-blue-400 font-bold text-sm transition-colors tracking-wide">
              أسطول صقر
            </a>
            <a href="#offers" className="text-slate-200 hover:text-blue-400 font-bold text-sm transition-colors tracking-wide">
              العروض الحصرية
            </a>
            <a href="#services" className="text-slate-200 hover:text-blue-400 font-bold text-sm transition-colors tracking-wide">
              خدمات صقر VIP
            </a>
          </nav>

          {/* 4. Left: Utility icons & Prominent blue primary button */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Settings gear */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-sm hover:scale-105"
              title="الإعدادات ومظهر صقر"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Location pin */}
            <button
              onClick={() => onOpenService('showroom')}
              className="p-2.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-sm hover:scale-105"
              title="فروع صالات العرض"
              aria-label="Showrooms"
            >
              <MapPin className="w-4 h-4" />
            </button>

            {/* Prominent Blue Primary Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <User className="w-4 h-4 text-white" />
              <span>حسابي / تسجيل الدخول</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xs shadow-sm shadow-blue-500/30"
            >
              حسابي
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-900 text-blue-400 border border-blue-500/20 hover:bg-navy-850 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-2xl border-b border-blue-500/20 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in fade-in">
          <div className="relative w-full pt-2">
            <Search className="absolute right-4 top-1/2 translate-y-1 w-4 h-4 text-blue-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder="ابحث عن سيارة..."
              className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-400 pr-11 pl-4 py-3 rounded-2xl focus:outline-none focus:border-blue-400 text-sm"
            />
          </div>

          <div className="space-y-1 pt-2">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:bg-navy-850 hover:text-blue-400 transition-colors"
            >
              الرئيسية
            </a>
            <a
              href="#cars"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:bg-navy-850 hover:text-blue-400 transition-colors"
            >
              أسطول صقر
            </a>
            <a
              href="#offers"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:bg-navy-850 hover:text-blue-400 transition-colors"
            >
              العروض الحصرية
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:bg-navy-850 hover:text-blue-400 transition-colors"
            >
              خدمات صقر VIP
            </a>
          </div>

          <div className="pt-4 border-t border-blue-500/20 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setIsMenuOpen(false); onToggleTheme?.(); }}
                className="flex-1 flex items-center justify-center gap-2 text-slate-200 bg-navy-950 border border-blue-500/20 py-3 rounded-xl font-bold text-sm"
              >
                <Settings className="w-4 h-4 text-blue-400" />
                <span>الإعدادات</span>
              </button>
              <button
                onClick={() => { setIsMenuOpen(false); onOpenService('showroom'); }}
                className="flex-1 flex items-center justify-center gap-2 text-slate-200 bg-navy-950 border border-blue-500/20 py-3 rounded-xl font-bold text-sm"
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>الفروع</span>
              </button>
            </div>
            <button
              onClick={() => { setIsMenuOpen(false); onOpenAuth(); }}
              className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 rounded-xl font-black text-sm shadow-lg shadow-blue-500/30"
            >
              <User className="w-4 h-4 text-white" />
              <span>حسابي / تسجيل الدخول</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
