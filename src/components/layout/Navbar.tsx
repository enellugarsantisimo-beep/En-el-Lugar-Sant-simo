import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { CHURCH_INFO } from '../../data/churchData';
import { useLanguage } from '../../context/LanguageContext';
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
  Film,
  Sprout,
  LifeBuoy,
  Heart,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

interface NavItemConfig {
  id: PageId;
  labelEs: string;
  labelEn: string;
  icon: React.ElementType;
  externalUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItemConfig[] = [
    { id: 'nosotros', labelEs: 'Nosotros', labelEn: 'About Us', icon: Home },
    {
      id: 'apoyo-social',
      labelEs: 'Apoyo Social',
      labelEn: 'Social Outreach',
      icon: HeartHandshake,
      externalUrl: CHURCH_INFO.donateSponsorUrl,
    },
    { id: 'grupos-de-vida', labelEs: 'Grupos de vida', labelEn: 'Life Groups', icon: Users },
    { id: 'en-vivo', labelEs: 'En Vivo', labelEn: 'Live', icon: Video },
    { id: 'multimedia', labelEs: 'Multimedia', labelEn: 'Media', icon: Film },
    {
      id: 'ruta-de-crecimiento',
      labelEs: 'Ruta de Crecimiento',
      labelEn: 'Growth Track',
      icon: Sprout,
    },
    { id: 'info', labelEs: 'Info', labelEn: 'Info', icon: Calendar },
    { id: 'sos', labelEs: 'S.O.S', labelEn: 'S.O.S', icon: LifeBuoy },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top subtle service & language bar */}
      <div className="bg-slate-900 text-stone-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-rose-400 font-medium">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>{t('Próxima Reunión:', 'Next Service:')}</span>
            </span>
            <span className="text-stone-300">
              {t(
                'Domingos 10:30 a. m. · Presencial y Transmisión',
                'Sundays 10:30 a. m. · In-Person & Live Stream'
              )}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="hidden md:flex items-center gap-1 hover:text-stone-200 transition-colors">
              <span>Bogotá, Colombia:</span>
              <strong className="font-normal text-stone-300">Av. Calle 24 #72b–30</strong>
            </span>
            <span className="hidden md:inline">·</span>
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

      {/* Main White Header with Adapted Watermark Logo */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          scrolled ? 'border-slate-200 shadow-sm py-2.5' : 'border-slate-200 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
          {/* Zone 1: Official Watermark Logo adapted cleanly for white header */}
          <button
            onClick={() => handleNavClick('nosotros')}
            aria-label="En el Lugar Santísimo - Nosotros"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-xl group shrink-0"
          >
            <div className="flex items-center justify-center">
              <img
                src={CHURCH_INFO.logoWatermark}
                alt="En el Lugar Santísimo - Comunidad Cristiana"
                referrerPolicy="no-referrer"
                className="w-24 sm:w-28 h-auto object-contain shrink-0 -my-5 invert hue-rotate-180 contrast-125 group-hover:opacity-80 transition-opacity"
              />
            </div>
          </button>

          {/* Zone 2: 8 Nav links (Nosotros .. S.O.S) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 text-[13px] font-medium">
            {navItems.map((item) => {
              const label = lang === 'en' ? item.labelEn : item.labelEs;
              if (item.externalUrl) {
                return (
                  <a
                    key={item.id}
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative py-1 whitespace-nowrap shrink-0 text-slate-600 hover:text-rose-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                );
              }
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
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Translate Button + 9th Section CTA ("Dona") */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggleLang}
              aria-label={t('Traducir a inglés', 'Translate to Spanish')}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-stone-50 hover:bg-stone-100 text-slate-700 transition-colors whitespace-nowrap shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-rose-600" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('dona')}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-all shadow-sm bg-rose-600 hover:bg-rose-700 text-white whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'dona' ? 'ring-2 ring-rose-300 ring-offset-1' : ''
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{t('Dona', 'Donate')}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t('Cerrar menú', 'Close menu') : t('Abrir menú', 'Open menu')}
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
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
            {/* Drawer Header with adapted watermark logo */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center justify-start">
                <img
                  src={CHURCH_INFO.logoWatermark}
                  alt="En el Lugar Santísimo - Comunidad Cristiana"
                  referrerPolicy="no-referrer"
                  className="w-24 h-auto object-contain shrink-0 -my-4 invert hue-rotate-180 contrast-125"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-4 space-y-1 flex-1">
              <div className="flex items-center justify-between px-3 mb-2">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('Secciones', 'Sections')}
                </p>
                <button
                  onClick={toggleLang}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200"
                >
                  <Globe className="w-3 h-3" />
                  <span>{lang === 'es' ? 'English' : 'Español'}</span>
                </button>
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const label = lang === 'en' ? item.labelEn : item.labelEs;

                if (item.externalUrl) {
                  return (
                    <a
                      key={item.id}
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-left text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-rose-500" />
                        <span>{label}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  );
                }

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
                      <span>{label}</span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-rose-600" />}
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('dona')}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-rose-600 text-white font-medium text-sm rounded-xl hover:bg-rose-700 transition-colors shadow-sm cursor-pointer ${
                    currentPage === 'dona' ? 'ring-2 ring-rose-300' : ''
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{t('Dona', 'Donate')}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrayerModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-800 font-medium text-sm rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <span>{t('Enviar Petición de Oración', 'Send Prayer Request')}</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-700">{t('Ubicación:', 'Location:')}</span>
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
                <span className="text-slate-400">{t('Dom 10:30 am', 'Sun 10:30 am')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
