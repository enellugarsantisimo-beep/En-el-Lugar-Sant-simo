import React, { useState, useRef } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO, INFO_SECTION_DATA } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { SocialOrb3D, SocialPlatformId } from '../components/common/SocialOrb3D';
import {
  MapPin,
  ExternalLink,
  Navigation,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Sparkles,
  Calendar,
  Clock,
  Users,
  Phone,
  Compass,
  HeartHandshake,
} from 'lucide-react';

interface EventsInfoPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

interface ActivitySquareCardProps {
  title: string;
  subtitle: string;
  address?: string;
  schedule: string;
  alignLeft: boolean;
  meetLink?: string;
  joinMeetLabel: string;
}

// Aesthetic scroll-reactive activity row where the schedule square smoothly enlarges on scroll
const ActivitySquareCard: React.FC<ActivitySquareCardProps> = ({
  title,
  subtitle,
  address,
  schedule,
  alignLeft,
  meetLink,
  joinMeetLabel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 95%', 'center center', 'end 5%'],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 0.94]);
  const smoothScale = useSpring(rawScale, { stiffness: 160, damping: 24, mass: 0.5 });

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-12 gap-3 sm:gap-6 items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm"
    >
      {/* Text Block */}
      <div
        className={`col-span-6 space-y-1.5 sm:space-y-2 ${
          alignLeft ? 'order-1' : 'order-2'
        }`}
      >
        <h3 className="text-base sm:text-3xl font-bold font-display text-slate-900 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-[11px] sm:text-sm font-medium text-slate-600 leading-snug">{subtitle}</p>
        {address && (
          <div className="pt-0.5 sm:pt-1">
            <a
              href={CHURCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-rose-600 hover:text-rose-700 leading-tight"
            >
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{address}</span>
            </a>
          </div>
        )}
        {meetLink && (
          <div className="pt-1 sm:pt-2">
            <a
              href={meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-rose-600 hover:text-rose-700"
            >
              <span>{joinMeetLabel}</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Scroll-Reactive Enlarging Square Card */}
      <div
        className={`col-span-6 flex justify-center ${
          alignLeft ? 'order-2' : 'order-1'
        }`}
      >
        <motion.div
          style={{ scale: smoothScale }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md px-2.5 py-4 sm:px-6 sm:py-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-lg border border-amber-300/80 flex items-center justify-center gap-1.5 sm:gap-3 text-center"
        >
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-900" />
          <span className="text-xs sm:text-xl font-extrabold font-display tracking-tight leading-tight">
            {schedule}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export const EventsInfoPage: React.FC<EventsInfoPageProps> = ({
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [heroSlide, setHeroSlide] = useState<0 | 1 | 2>(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [activeGroupCard, setActiveGroupCard] = useState<string>('parejas');
  const [hoveredGroupInfo, setHoveredGroupInfo] = useState<string | null>(null);
  const [pinnedGroupInfo, setPinnedGroupInfo] = useState<string | null>(null);

  React.useEffect(() => {
    if (isHeroHovered) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHeroHovered]);

  // Scroll-driven rotation for the social spheres (smoothly spins clockwise scrolling down, counter-clockwise scrolling up)
  const { scrollY } = useScroll();
  const rawRotateClockwise = useTransform(scrollY, (value) => value * 0.65);
  const rawRotateCounter = useTransform(scrollY, (value) => -value * 0.55);
  const sphereRotateClockwise = useSpring(rawRotateClockwise, {
    stiffness: 110,
    damping: 18,
    mass: 0.35,
  });
  const sphereRotateCounter = useSpring(rawRotateCounter, {
    stiffness: 110,
    damping: 18,
    mass: 0.35,
  });

  const socialSpheres: Array<{
    platform: SocialPlatformId;
    name: string;
    href: string;
    rotate: typeof sphereRotateClockwise;
  }> = [
    {
      platform: 'instagram',
      name: 'Instagram',
      href: CHURCH_INFO.social.instagram,
      rotate: sphereRotateClockwise,
    },
    {
      platform: 'tiktok',
      name: 'TikTok',
      href: CHURCH_INFO.social.tiktok,
      rotate: sphereRotateCounter,
    },
    {
      platform: 'facebook',
      name: 'Facebook',
      href: CHURCH_INFO.social.facebook,
      rotate: sphereRotateClockwise,
    },
    {
      platform: 'youtube',
      name: 'YouTube',
      href: CHURCH_INFO.social.youtube,
      rotate: sphereRotateCounter,
    },
    {
      platform: 'x',
      name: 'X',
      href: CHURCH_INFO.social.x,
      rotate: sphereRotateClockwise,
    },
    {
      platform: 'whatsapp',
      name: 'WhatsApp',
      href: CHURCH_INFO.social.whatsapp,
      rotate: sphereRotateCounter,
    },
  ];

  const {
    heroBanners,
    pastorBio,
    bookShowcase,
    seriesReflection,
    lifeGroupScheduleCards,
    activities,
  } = INFO_SECTION_DATA;
  const selectedGroup = lifeGroupScheduleCards.find((g) => g.id === activeGroupCard) ?? lifeGroupScheduleCards[0];

  const handlePrevSlide = () => {
    setHeroSlide((prev) => ((prev - 1 + 3) % 3) as 0 | 1 | 2);
  };

  const handleNextSlide = () => {
    setHeroSlide((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. INDEPENDENT PAGE HERO + 3-SLIDE EDITABLE BACKGROUND SLIDER */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">Info</span>
          </nav>

          {/* 3-Slide Showcase Slider (Independent Background Images + 100% Editable Text Overlaid on Top) */}
          <div
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
            className="relative rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden"
          >
            {heroSlide === 0 && (
              /* SLIDE 1: LIBRO SALVAVIDAS - FONDO INDEPENDIENTE + TEXTOS EDITABLES ENCIMA */
              <div className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
                <img
                  src={heroBanners.slide1Background}
                  alt={lang === 'es' ? heroBanners.slide1AltEs : heroBanners.slide1AltEn}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-cyan-950/70 to-slate-950/55" />

                <div className="relative z-10 w-full px-10 sm:px-14 lg:px-16 pt-10 pb-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Independent 3D Book Image */}
                  <div className="md:col-span-4 flex justify-center">
                    <img
                      src={heroBanners.bookCoverImage}
                      alt={lang === 'es' ? bookShowcase.imageAltEs : bookShowcase.imageAltEn}
                      referrerPolicy="no-referrer"
                      className="w-44 sm:w-52 lg:w-64 h-auto object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.65)]"
                    />
                  </div>

                  {/* All Editable Headline & CTA Copy Overlaid on Image */}
                  <div className="md:col-span-8 text-center md:text-left space-y-4">
                    <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-sky-300">
                      {lang === 'es' ? bookShowcase.badgeEs : bookShowcase.badgeEn}
                    </span>

                    <div className="space-y-1">
                      <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white drop-shadow-md leading-none">
                        {bookShowcase.title}
                      </h1>
                      <p className="text-xl sm:text-3xl font-bold tracking-wider text-stone-100 drop-shadow">
                        {lang === 'es' ? bookShowcase.subtitleEs : bookShowcase.subtitleEn}
                      </p>
                    </div>

                    <p className="text-sm sm:text-lg text-stone-200 max-w-xl mx-auto lg:mx-0">
                      {lang === 'es' ? bookShowcase.descriptionEs : bookShowcase.descriptionEn}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                      <a
                        href={CHURCH_INFO.salvavidasBookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl inline-flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>{lang === 'es' ? bookShowcase.ctaButtonEs : bookShowcase.ctaButtonEn}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={CHURCH_INFO.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-slate-900/80 hover:bg-slate-900 text-white border border-white/25 backdrop-blur-sm font-semibold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {heroSlide === 1 && (
              /* SLIDE 2: BIOGRAFÍA PASTORAL - FONDO INDEPENDIENTE + TEXTOS EDITABLES ENCIMA */
              <div className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
                <img
                  src={heroBanners.slide2Background}
                  alt={lang === 'es' ? heroBanners.slide2AltEs : heroBanners.slide2AltEn}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/78 to-slate-950/55" />

                <div className="relative z-10 w-full px-11 sm:px-14 lg:px-16 pt-10 pb-14 max-w-4xl space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? pastorBio.eyebrowEs : pastorBio.eyebrowEn}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold font-display text-white drop-shadow">
                    {pastorBio.name}
                  </h2>
                  <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-stone-100 leading-relaxed italic drop-shadow-sm">
                    {(lang === 'es' ? pastorBio.paragraphsEs : pastorBio.paragraphsEn).map(
                      (para, i) => (
                        <p key={i}>{para}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {heroSlide === 2 && (
              /* SLIDE 3: REFLEXIÓN SERIE SALVAVIDAS - FONDO INDEPENDIENTE + TEXTOS EDITABLES ENCIMA */
              <div className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
                <img
                  src={heroBanners.slide3Background}
                  alt={lang === 'es' ? heroBanners.slide3AltEs : heroBanners.slide3AltEn}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-cyan-950/55" />

                <div className="relative z-10 w-full px-11 sm:px-14 lg:px-16 pt-10 pb-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left: Editable Reflection Copy + Romanos 8:26 Quote */}
                  <div className="md:col-span-8 space-y-3 text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-widest">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'es' ? seriesReflection.eyebrowEs : seriesReflection.eyebrowEn}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-stone-100 leading-relaxed italic drop-shadow-sm">
                      {(lang === 'es'
                        ? seriesReflection.paragraphsEs
                        : seriesReflection.paragraphsEn
                      ).map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="pt-2 space-y-1">
                      <p className="text-base sm:text-xl font-black font-display text-white drop-shadow">
                        {lang === 'es' ? seriesReflection.quoteEs : seriesReflection.quoteEn}
                      </p>
                      <span className="text-sm sm:text-base font-bold text-amber-300 block">
                        {lang === 'es' ? seriesReflection.referenceEs : seriesReflection.referenceEn}
                      </span>
                    </div>

                    <div className="pt-2">
                      <a
                        href={CHURCH_INFO.salvavidasBookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl inline-flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>{lang === 'es' ? bookShowcase.ctaButtonEs : bookShowcase.ctaButtonEn}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Independent 3D Book Image */}
                  <div className="md:col-span-4 flex justify-center">
                    <img
                      src={heroBanners.bookCoverImage}
                      alt={lang === 'es' ? bookShowcase.imageAltEs : bookShowcase.imageAltEn}
                      referrerPolicy="no-referrer"
                      className="w-44 sm:w-52 lg:w-64 h-auto object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.65)]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Slider Controls overlaid directly on the image */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label={t('Anterior', 'Previous')}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/65 hover:bg-slate-950 text-white flex items-center justify-center border border-white/25 backdrop-blur-sm transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label={t('Siguiente', 'Next')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/65 hover:bg-slate-950 text-white flex items-center justify-center border border-white/25 backdrop-blur-sm transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/55 backdrop-blur-sm border border-white/15 z-20">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHeroSlide(idx as 0 | 1 | 2)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    heroSlide === idx ? 'w-6 bg-sky-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Direct Amazon Book Purchase Callout ("Para adquirir nuestro Libro Salvavidas -> Haz clic aquí") */}
          <div className="rounded-2xl bg-slate-900 text-white px-6 py-8 border border-slate-800 shadow-lg text-center space-y-4">
            <p className="font-serif italic text-base sm:text-xl text-stone-100">
              {lang === 'es' ? bookShowcase.ctaPromptEs : bookShowcase.ctaPromptEn}
            </p>
            <div>
              <a
                href={CHURCH_INFO.salvavidasBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-xl"
              >
                <span>{lang === 'es' ? bookShowcase.ctaButtonEs : bookShowcase.ctaButtonEn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANNER COMUNIDAD + ESFERAS SOCIALES QUE GIRAN CON EL SCROLL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-rose-950 text-white p-8 sm:p-10 text-center shadow-lg border border-slate-800">
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight">
            {t(
              '¡No esperes más para hacer parte de nuestra comunidad!',
              'Don’t wait any longer to be part of our community!'
            )}
          </h2>
        </div>

        {/* Scroll-Rotating Social Spheres Card (Text on left, vertical staggered spheres on right across ALL devices) */}
        <div className="rounded-3xl bg-amber-300/90 border border-amber-400 p-5 sm:p-12 lg:p-14 shadow-md">
          <div className="grid grid-cols-12 gap-3 sm:gap-8 items-center">
            <div className="col-span-6 text-left space-y-2 sm:space-y-3 pr-1 sm:pr-6">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-900 block">
                {t('Redes Sociales Oficiales', 'Official Social Media')}
              </span>
              <h3 className="text-lg sm:text-3xl lg:text-4xl font-bold font-display text-slate-950 leading-snug">
                {t(
                  '¡Haz Click en las esferas y síguenos en todas nuestras redes!',
                  'Click the spheres and follow us on all our social networks!'
                )}
              </h3>
            </div>

            <div className="col-span-6 flex flex-col items-center justify-center gap-3.5 sm:gap-6">
              {socialSpheres.map((item, idx) => (
                <div
                  key={item.platform}
                  className={
                    idx % 2 === 0
                      ? 'translate-x-4 sm:translate-x-12'
                      : '-translate-x-4 sm:-translate-x-12'
                  }
                >
                  <SocialOrb3D
                    platform={item.platform}
                    name={item.name}
                    href={item.href}
                    rotate={item.rotate}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÚNETE AQUÍ A NUESTROS GRUPOS DE VIDA (POPOVERS EN ÍCONOS (i) + TARJETA FLYER EDITABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-stone-100 to-purple-50 border border-slate-200 p-6 sm:p-12 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Group Selector Pills + Floating Popover on White/Dark (i) Info Buttons */}
            <div className="lg:col-span-6 space-y-4">
              {lifeGroupScheduleCards.map((grp) => {
                const isSelected = activeGroupCard === grp.id;
                const isPopoverOpen = hoveredGroupInfo === grp.id || pinnedGroupInfo === grp.id;

                return (
                  <div
                    key={grp.id}
                    className="relative flex items-center gap-3"
                    onMouseLeave={() => {
                      if (hoveredGroupInfo === grp.id) {
                        setHoveredGroupInfo(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveGroupCard(grp.id);
                        setPinnedGroupInfo((prev) => (prev === grp.id ? null : grp.id));
                      }}
                      className={`px-6 py-3 rounded-full font-display font-extrabold text-base sm:text-lg tracking-wide border shadow-md transition-all cursor-pointer underline underline-offset-4 ${
                        grp.badgeColor
                      } ${isSelected ? 'ring-4 ring-rose-300 scale-[1.03]' : 'opacity-90 hover:opacity-100'}`}
                    >
                      {lang === 'es' ? grp.labelEs : grp.labelEn}
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => {
                        setHoveredGroupInfo(grp.id);
                        setActiveGroupCard(grp.id);
                      }}
                      onFocus={() => {
                        setHoveredGroupInfo(grp.id);
                        setActiveGroupCard(grp.id);
                      }}
                      onClick={() => {
                        setActiveGroupCard(grp.id);
                        setPinnedGroupInfo((prev) => (prev === grp.id ? null : grp.id));
                      }}
                      aria-expanded={isPopoverOpen}
                      aria-label={t(
                        `Ver detalles de ${grp.labelEs}`,
                        `View details for ${grp.labelEn}`
                      )}
                      className={`w-8 h-8 rounded-full bg-slate-900 text-white font-serif font-extrabold text-sm border-2 border-white shadow-md flex items-center justify-center transition-transform cursor-pointer ${
                        isPopoverOpen || isSelected
                          ? 'scale-110 ring-2 ring-rose-500'
                          : 'hover:scale-110'
                      }`}
                    >
                      i
                    </button>

                    {/* Floating Popover Card right beneath the hovered/tapped (i) button (All Devices) */}
                    {isPopoverOpen && (
                      <div
                        className={`block absolute left-0 top-full mt-3 z-40 w-[calc(100vw-3rem)] sm:w-[560px] max-w-[90vw] rounded-2xl bg-gradient-to-br ${grp.flyerAccentClass} border-2 shadow-2xl p-4 sm:p-5`}
                      >
                        {/* Upward Caret */}
                        <div className="absolute -top-2 left-28 sm:left-32 w-4 h-4 rotate-45 bg-slate-900 border-l border-t border-white/25" />

                        <div className="relative z-10 space-y-4">
                          {/* Popover Flyer Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-xs font-serif italic text-amber-200 block">
                                {lang === 'es' ? grp.sloganEs : grp.sloganEn}
                              </span>
                              <h3 className="text-lg sm:text-xl font-black font-display tracking-tight text-white">
                                {lang === 'es' ? grp.taglineEs : grp.taglineEn}
                              </h3>
                              {grp.subtitleEs && (
                                <span className="inline-block px-2.5 py-0.5 rounded bg-white/15 text-[11px] font-bold tracking-wider uppercase text-amber-300">
                                  {lang === 'es' ? grp.subtitleEs : grp.subtitleEn}
                                </span>
                              )}
                              {grp.verseEs && (
                                <p className="font-serif italic text-[11px] text-white/85 pt-0.5">
                                  «{lang === 'es' ? grp.verseEs : grp.verseEn}»
                                </p>
                              )}
                            </div>

                            {/* Independent Group Photo Thumbnail + Church Logo */}
                            <div className="flex items-center gap-2 shrink-0">
                              <img
                                src={CHURCH_INFO.logoWatermark}
                                alt={CHURCH_INFO.name}
                                className="h-8 sm:h-9 w-auto object-contain opacity-90"
                              />
                              <img
                                src={grp.image}
                                alt={lang === 'es' ? grp.labelEs : grp.labelEn}
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-white/60 shadow-md"
                              />
                            </div>
                          </div>

                          {/* Editable Schedule Table(s) + Locations Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
                            {/* Locations & Hosts */}
                            <div className="sm:col-span-6 space-y-2">
                              {grp.locations.map((loc, idx) => (
                                <div
                                  key={idx}
                                  className="p-2.5 rounded-xl bg-black/35 border border-white/15 text-[11px] space-y-0.5"
                                >
                                  <p className="font-semibold text-white flex items-start gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                                    <span>{loc.address}</span>
                                  </p>
                                  <p className="text-white/85 pl-5">
                                    {t('Anfitrión:', 'Host:')} <strong>{loc.hosts}</strong>
                                  </p>
                                  {loc.phone && (
                                    <p className="text-emerald-300 pl-5 font-medium">
                                      {t('Celular:', 'Phone:')} {loc.phone}
                                    </p>
                                  )}
                                </div>
                              ))}
                              <p className="text-[10px] font-mono text-white/75 tracking-wider pt-1">
                                {grp.hashtag}
                              </p>
                            </div>

                            {/* Mes | Días | Hora Table(s) */}
                            <div className="sm:col-span-6 space-y-2.5">
                              <div className="rounded-xl bg-black/35 border border-white/15 p-2.5">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1.5">
                                  {lang === 'es' ? grp.scheduleTitleEs : grp.scheduleTitleEn}
                                </p>
                                <div className="grid grid-cols-3 text-[10px] font-bold text-white/70 border-b border-white/15 pb-1 mb-1">
                                  <span>{t('Mes', 'Month')}</span>
                                  <span>{t('Días', 'Days')}</span>
                                  <span className="text-right">{t('Hora', 'Time')}</span>
                                </div>
                                <div className="space-y-1">
                                  {grp.schedule.map((row) => (
                                    <div
                                      key={row.month}
                                      className="grid grid-cols-3 text-[11px] font-semibold text-white"
                                    >
                                      <span className="text-amber-200">{row.month}</span>
                                      <span>{row.days}</span>
                                      <span className="text-right">{row.time}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {grp.secondarySchedule && (
                                <div className="rounded-xl bg-black/35 border border-yellow-300/30 p-2.5">
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-300 mb-1.5">
                                    {lang === 'es'
                                      ? grp.secondaryScheduleTitleEs
                                      : grp.secondaryScheduleTitleEn}
                                  </p>
                                  <div className="grid grid-cols-3 text-[10px] font-bold text-white/70 border-b border-white/15 pb-1 mb-1">
                                    <span>{t('Mes', 'Month')}</span>
                                    <span>{t('Días', 'Days')}</span>
                                    <span className="text-right">{t('Hora', 'Time')}</span>
                                  </div>
                                  <div className="space-y-1">
                                    {grp.secondarySchedule.map((row) => (
                                      <div
                                        key={row.month}
                                        className="grid grid-cols-3 text-[11px] font-semibold text-white"
                                      >
                                        <span className="text-yellow-200">{row.month}</span>
                                        <span>{row.days}</span>
                                        <span className="text-right">{row.time}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <a
                              href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                                `Hola, quiero inscribirme al Grupo de Vida ${grp.labelEs}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>{t('Inscribirme por WhatsApp', 'Join via WhatsApp')}</span>
                            </a>
                            <button
                              type="button"
                              onClick={() => {
                                setPinnedGroupInfo(null);
                                setHoveredGroupInfo(null);
                              }}
                              className="text-[11px] text-white/75 hover:text-white underline cursor-pointer"
                            >
                              {t('Cerrar', 'Close')}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Heading Right */}
            <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
              <span className="text-sm font-bold text-rose-600 uppercase tracking-widest block">
                {t('Únete aquí a nuestros', 'Join our')}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-none">
                {t('GRUPOS DE VIDA', 'LIFE GROUPS')}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-700 pt-1">
                {t(
                  '¡Pasa el cursor o haz click en el grupo o en el ícono (i) para ver horarios, fechas, dirección y anfitriones!',
                  'Hover or click on any group or its (i) icon to view schedules, dates, addresses, and hosts!'
                )}
              </p>
            </div>
          </div>

          {/* Active Editable Life Group Flyer Card (Always visible on Mobile & Desktop below selector) */}
          <div
            className={`rounded-2xl bg-gradient-to-br ${selectedGroup.flyerAccentClass} border shadow-xl overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Independent Group Image */}
              <div className="lg:col-span-4 relative min-h-[240px]">
                <img
                  src={selectedGroup.image}
                  alt={lang === 'es' ? selectedGroup.labelEs : selectedGroup.labelEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <img
                      src={CHURCH_INFO.logoWatermark}
                      alt={CHURCH_INFO.name}
                      className="h-9 w-auto object-contain opacity-90"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-serif italic text-amber-200 block">
                      {lang === 'es' ? selectedGroup.sloganEs : selectedGroup.sloganEn}
                    </span>
                    <span className="text-xs font-mono font-bold text-white tracking-wider block">
                      {selectedGroup.hashtag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Editable Text Details & Full Schedule Tables */}
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                      {lang === 'es' ? selectedGroup.taglineEs : selectedGroup.taglineEn}
                    </h3>
                    {selectedGroup.subtitleEs && (
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold text-amber-300">
                        {lang === 'es' ? selectedGroup.subtitleEs : selectedGroup.subtitleEn}
                      </span>
                    )}
                  </div>
                  {selectedGroup.verseEs && (
                    <p className="font-serif italic text-xs sm:text-sm text-white/85">
                      «{lang === 'es' ? selectedGroup.verseEs : selectedGroup.verseEn}»
                    </p>
                  )}
                </div>

                {/* Locations & Hosts */}
                <div className="space-y-2.5">
                  {selectedGroup.locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/30 border border-white/15 text-xs space-y-1"
                    >
                      <div className="flex items-start gap-2 font-semibold text-white">
                        <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-6 text-white/85">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-amber-300" />
                          {t('Anfitrión:', 'Host:')} <strong>{loc.hosts}</strong>
                        </span>
                        {loc.phone && (
                          <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                            <Phone className="w-3.5 h-3.5" />
                            <span>{loc.phone}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary & Optional Secondary Schedule Tables (Mes | Días | Hora) */}
                <div
                  className={`grid grid-cols-1 ${
                    selectedGroup.secondarySchedule ? 'md:grid-cols-2' : ''
                  } gap-4`}
                >
                  <div className="rounded-xl bg-black/35 border border-white/15 p-4 space-y-2">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'es'
                          ? selectedGroup.scheduleTitleEs
                          : selectedGroup.scheduleTitleEn}
                      </span>
                    </span>
                    <div className="grid grid-cols-3 text-[11px] font-bold text-white/70 border-b border-white/15 pb-1">
                      <span>{t('Mes', 'Month')}</span>
                      <span>{t('Días', 'Days')}</span>
                      <span className="text-right">{t('Hora', 'Time')}</span>
                    </div>
                    <div className="space-y-1.5">
                      {selectedGroup.schedule.map((row) => (
                        <div
                          key={row.month}
                          className="grid grid-cols-3 text-xs font-semibold text-white py-0.5 border-b border-white/5 last:border-0"
                        >
                          <span className="text-amber-200">{row.month}</span>
                          <span>{row.days}</span>
                          <span className="text-right">{row.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedGroup.secondarySchedule && (
                    <div className="rounded-xl bg-black/35 border border-yellow-300/30 p-4 space-y-2">
                      <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {lang === 'es'
                            ? selectedGroup.secondaryScheduleTitleEs
                            : selectedGroup.secondaryScheduleTitleEn}
                        </span>
                      </span>
                      <div className="grid grid-cols-3 text-[11px] font-bold text-white/70 border-b border-white/15 pb-1">
                        <span>{t('Mes', 'Month')}</span>
                        <span>{t('Días', 'Days')}</span>
                        <span className="text-right">{t('Hora', 'Time')}</span>
                      </div>
                      <div className="space-y-1.5">
                        {selectedGroup.secondarySchedule.map((row) => (
                          <div
                            key={row.month}
                            className="grid grid-cols-3 text-xs font-semibold text-white py-0.5 border-b border-white/5 last:border-0"
                          >
                            <span className="text-yellow-200">{row.month}</span>
                            <span>{row.days}</span>
                            <span className="text-right">{row.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-1">
                  <a
                    href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                      `Hola, quiero inscribirme al Grupo de Vida ${selectedGroup.labelEs}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {t(
                        `Inscribirme a ${selectedGroup.labelEs}`,
                        `Join ${selectedGroup.labelEn}`
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUESTRAS ACTIVIDADES (CUADRADOS QUE SE AGRANDAN ESTÉTICAMENTE AL DESPLAZARSE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            {t('Horarios Semanales', 'Weekly Schedule')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            {t('Nuestras Actividades', 'Our Activities')}
          </h2>
        </div>

        <div className="space-y-6">
          {activities.map((act) => (
            <ActivitySquareCard
              key={act.id}
              title={lang === 'es' ? act.titleEs : act.titleEn}
              subtitle={lang === 'es' ? act.subtitleEs : act.subtitleEn}
              address={lang === 'es' ? act.addressEs : act.addressEn}
              schedule={lang === 'es' ? act.scheduleEs : act.scheduleEn}
              alignLeft={act.alignLeft}
              meetLink={act.meetLink}
              joinMeetLabel={t('Entrar a Google Meet', 'Join Google Meet')}
            />
          ))}
        </div>
      </section>

      {/* 5. NUESTROS PROGRAMAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            {t('Crecimiento & Apoyo', 'Growth & Care')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            {t('Nuestros Programas', 'Our Programs')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Holy Growth Way / Ruta de Crecimiento */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                <span>Holy Growth Way</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {t('RUTA DE CRECIMIENTO', 'GROWTH TRACK')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t(
                  'Descubre nuestros 9 niveles de formación espiritual para crecer en la fe y servir con propósito.',
                  'Discover our 9 levels of spiritual training to grow in faith and serve with purpose.'
                )}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('ruta-de-crecimiento')}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-md cursor-pointer"
              >
                {t('Inicia Ya', 'Start Now')}
              </button>
            </div>
          </div>

          {/* S.O.S Consejería Personalizada */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-widest">
                <HeartHandshake className="w-4 h-4" />
                <span>S.O.S</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                {t('CONSEJERÍA PERSONALIZADA', 'PERSONALIZED COUNSELING')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  '¿Necesitas orientación pastoral, oración o ser escuchado? Nuestro equipo está disponible para acompañarte.',
                  'Need pastoral guidance, prayer, or someone to listen? Our team is here to walk with you.'
                )}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('sos')}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                {t('Contáctanos', 'Contact Us')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UBICACIÓN / GOOGLE MAPS ("AQUÍ") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="mapa-ubicacion">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            {t('Visítanos', 'Visit Us')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            {t('Aquí nos encontramos', 'Find Us Here')}
          </h2>
          <p className="text-sm text-slate-600">
            Iglesia Cristiana En El Lugar Santísimo · Av. Calle 24 #72b–30, Bogotá, Colombia
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-stone-100">
            <iframe
              title="Mapa Iglesia Cristiana En El Lugar Santísimo"
              src="https://maps.google.com/maps?q=Iglesia%20Cristiana%20En%20El%20Lugar%20Santisimo%20Av%20Calle%2024%2072b%2030%20Bogota&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 sm:p-6 bg-stone-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Av. Calle 24 #72b–30 · Modelia / Salitre Occidental, Bogotá</span>
            </div>
            <a
              href={CHURCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t('Abrir en Google Maps', 'Open in Google Maps')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
