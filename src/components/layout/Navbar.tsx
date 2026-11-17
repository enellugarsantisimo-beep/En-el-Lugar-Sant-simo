import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { CHURCH_INFO } from '../../data/churchData';
import {
  Menu,
  X,
  Radio,
  Phone,
  HeartHandshake,
  Calendar,
  Compass,
  Users,
  Video,
  Home,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'conocenos', label: 'Conócenos', icon: Compass },
    { id: 'comunidad', label: 'Nuestra comunidad', icon: Users },
    { id: 'en-vivo', label: 'Contenido y En VIVOS', icon: Video },
    { id: 'eventos', label: 'Información y Eventos', icon: Calendar },
    { id: 'apoyo-social', label: 'Apoyo Social', icon: HeartHandshake },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top subtle emergency/service ticker */}
      <div className="bg-slate-900 text-stone-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-rose-400 font-medium">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Próxima Reunión:</span>
            </span>
            <span className="text-stone-300">Domingos 10:30 a. m. · Presencial y Transmisión</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1 hover:text-stone-200 transition-colors">
              <span>Bogotá, Colombia:</span>
              <strong className="font-normal text-stone-300">Av. Calle 24 #72b–30</strong>
            </span>
            <span>·</span>
            <a
              href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp: +57 3054351398</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          scrolled ? 'border-slate-200 shadow-sm py-3' : 'border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Official Brand Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            aria-label="En el Lugar Santísimo - Inicio"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-xl group shrink-0"
          >
            <div className="h-12 w-36 sm:w-40 rounded-xl bg-slate-900 group-hover:bg-slate-800 transition-colors px-3 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src="/assets/aistudio/LOGOS_MARCAS_EELS__1__b8140c5b.png"
                alt="En el Lugar Santísimo - Comunidad Cristiana"
                referrerPolicy="no-referrer"
                className="w-24 h-24 object-contain shrink-0"
              />
            </div>
          </button>

          {/* Zone 2: 4-6 concise single-line text nav links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-rose-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('contacto')}
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm ${
                currentPage === 'contacto'
                  ? 'bg-rose-700 text-white'
                  : 'bg-rose-600 hover:bg-rose-700 text-white'
              }`}
            >
              <span>Recibe Acompañamiento</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <div className="h-10 w-32 rounded-lg bg-slate-900 px-2.5 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/aistudio/LOGOS_MARCAS_EELS__1__b8140c5b.png"
                  alt="En el Lugar Santísimo - Comunidad Cristiana"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 object-contain shrink-0"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="p-4 space-y-1 flex-1">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Páginas y Secciones
              </p>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-rose-50 text-rose-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? 'text-rose-600' : 'text-slate-400'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => handleNavClick('contacto')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-rose-600 text-white font-medium text-sm rounded-xl hover:bg-rose-700 transition-colors shadow-sm"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Recibe Acompañamiento</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrayerModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-800 font-medium text-sm rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <span>Enviar Petición de Oración</span>
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-700">Ubicación:</span>
                <span>Av. Calle 24 #72b–30, Bogotá</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-medium flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{CHURCH_INFO.phone}</span>
                </a>
                <span className="text-slate-400">Dom 10:30 am</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
