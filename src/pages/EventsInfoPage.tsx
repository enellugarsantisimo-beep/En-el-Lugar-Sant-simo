import React, { useState, useRef } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO, INFO_SECTION_DATA } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
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
  Instagram,
  Facebook,
  Youtube,
  Radio,
  Music2,
} from 'lucide-react';

interface EventsInfoPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

interface ActivitySquareCardProps {
  title: string;
  subtitle: string;
  schedule: string;
  alignLeft: boolean;
  meetLink?: string;
  joinMeetLabel: string;
}

// Aesthetic scroll-reactive activity row where the schedule square smoothly enlarges on scroll
const ActivitySquareCard: React.FC<ActivitySquareCardProps> = ({
  title,
  subtitle,
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
      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
    >
      {/* Text Block */}
      <div
        className={`md:col-span-6 space-y-2 ${
          alignLeft ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-600">{subtitle}</p>
        {meetLink && (
          <div className="pt-2">
            <a
              href={meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700"
            >
              <span>{joinMeetLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Scroll-Reactive Enlarging Square Card */}
      <div
        className={`md:col-span-6 flex justify-center ${
          alignLeft ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <motion.div
          style={{ scale: smoothScale }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md px-6 py-7 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-lg border border-amber-300/80 flex items-center justify-center gap-3 text-center"
        >
          <Clock className="w-5 h-5 shrink-0 text-slate-900" />
          <span className="text-lg sm:text-xl font-extrabold font-display tracking-tight">
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
  const [heroSlide, setHeroSlide] = useState<0 | 1>(0);
  const [activeGroupCard, setActiveGroupCard] = useState<string | null>('parejas');

  // Scroll-driven rotation for the social spheres (rotates forward scrolling down, reverse scrolling up)
  const { scrollY } = useScroll();
  const sphereRotateClockwise = useTransform(scrollY, (value) => value * 0.25);
  const sphereRotateCounter = useTransform(scrollY, (value) => -value * 0.2);

  const socialSpheres = [
    {
      name: 'Instagram',
      href: CHURCH_INFO.social.instagram,
      icon: Instagram,
      bgClass: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      rotate: sphereRotateClockwise,
    },
    {
      name: 'Podcast & Audio',
      href: CHURCH_INFO.social.youtube,
      icon: Radio,
      bgClass: 'bg-slate-900 text-amber-400',
      rotate: sphereRotateCounter,
    },
    {
      name: 'Facebook',
      href: CHURCH_INFO.social.facebook,
      icon: Facebook,
      bgClass: 'bg-blue-600 text-white',
      rotate: sphereRotateClockwise,
    },
    {
      name: 'YouTube',
      href: CHURCH_INFO.liveYoutubeUrl,
      icon: Youtube,
      bgClass: 'bg-red-600 text-white',
      rotate: sphereRotateCounter,
    },
    {
      name: 'TikTok',
      href: CHURCH_INFO.social.tiktok,
      icon: Music2,
      bgClass: 'bg-slate-950 text-white',
      rotate: sphereRotateClockwise,
    },
    {
      name: 'WhatsApp',
      href: CHURCH_INFO.social.whatsapp,
      icon: MessageCircle,
      bgClass: 'bg-emerald-500 text-white',
      rotate: sphereRotateCounter,
    },
  ];

  const { pastorBio, bookShowcase, lifeGroupScheduleCards, activities } = INFO_SECTION_DATA;
  const selectedGroup = lifeGroupScheduleCards.find((g) => g.id === activeGroupCard) ?? lifeGroupScheduleCards[0];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. INDEPENDENT PAGE HERO + FEATURED SLIDER (BIOGRAFÍA & LIBRO SALVAVIDAS) */}
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

          {/* 2-Slide Showcase Card (Editable text + Independent images) */}
          <div className="relative rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl overflow-hidden">
            {heroSlide === 0 ? (
              /* SLIDE 1: BIOGRAFÍA YURI ARENAS CUERVO */
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-8 p-8 sm:p-12 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? pastorBio.eyebrowEs : pastorBio.eyebrowEn}</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-bold font-display text-white">
                    {pastorBio.name}
                  </h1>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                    {(lang === 'es' ? pastorBio.paragraphsEs : pastorBio.paragraphsEn).map(
                      (para, i) => (
                        <p key={i}>{para}</p>
                      )
                    )}
                  </div>
                </div>

                {/* Independent Bio Image */}
                <div className="lg:col-span-4 relative min-h-[260px]">
                  <img
                    src={pastorBio.image}
                    alt={lang === 'es' ? pastorBio.imageAltEs : pastorBio.imageAltEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block hidden" />
                </div>
              </div>
            ) : (
              /* SLIDE 2: LIBRO SALVAVIDAS - EL FRUTO DEL ESPÍRITU */
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Independent Book Image */}
                <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]">
                  <img
                    src={bookShowcase.image}
                    alt={lang === 'es' ? bookShowcase.imageAltEs : bookShowcase.imageAltEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 text-xs font-semibold tracking-widest uppercase text-sky-200">
                    {bookShowcase.author}
                  </span>
                </div>

                {/* Independent Editable Book Copy */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-5 text-center lg:text-left">
                  <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-300">
                    {lang === 'es' ? bookShowcase.badgeEs : bookShowcase.badgeEn}
                  </span>
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
                      {bookShowcase.title}
                    </h2>
                    <p className="text-xl sm:text-2xl font-bold tracking-wider text-stone-200 mt-1">
                      {lang === 'es' ? bookShowcase.subtitleEs : bookShowcase.subtitleEn}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-stone-300 max-w-lg mx-auto lg:mx-0">
                    {lang === 'es' ? bookShowcase.descriptionEs : bookShowcase.descriptionEn}
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                    <a
                      href={CHURCH_INFO.salvavidasBookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg inline-flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{lang === 'es' ? bookShowcase.ctaButtonEs : bookShowcase.ctaButtonEn}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={CHURCH_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Slider Controls */}
            <button
              type="button"
              onClick={() => setHeroSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label={t('Anterior', 'Previous')}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setHeroSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label={t('Siguiente', 'Next')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 py-3 bg-slate-950/70 border-t border-slate-800">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHeroSlide(idx as 0 | 1)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    heroSlide === idx ? 'w-6 bg-sky-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
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

        {/* Scroll-Rotating Social Spheres Card */}
        <div className="rounded-3xl bg-amber-300/90 border border-amber-400 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-center lg:text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">
                {t('Redes Sociales Oficiales', 'Official Social Media')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950">
                {t(
                  '¡Haz Click en las esferas y síguenos en todas nuestras redes!',
                  'Click the spheres and follow us on all our social networks!'
                )}
              </h3>
            </div>

            <div className="lg:col-span-7 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              {socialSpheres.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    aria-label={item.name}
                    style={{ rotate: item.rotate }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center border-2 border-white/80 cursor-pointer ${item.bgClass}`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÚNETE AQUÍ A NUESTROS GRUPOS DE VIDA (CON ÍCONOS (i) Y DATOS EDITABLES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-stone-100 to-purple-50 border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Group Selector Pills + White (i) Info Buttons */}
            <div className="lg:col-span-6 space-y-4">
              {lifeGroupScheduleCards.map((grp) => {
                const isSelected = activeGroupCard === grp.id;
                return (
                  <div key={grp.id} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveGroupCard(grp.id)}
                      className={`px-6 py-3 rounded-full font-display font-extrabold text-base sm:text-lg tracking-wide border shadow-md transition-all cursor-pointer ${
                        grp.badgeColor
                      } ${isSelected ? 'ring-4 ring-rose-300 scale-[1.03]' : 'opacity-90 hover:opacity-100'}`}
                    >
                      {lang === 'es' ? grp.labelEs : grp.labelEn}
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setActiveGroupCard(grp.id)}
                      onClick={() => setActiveGroupCard(grp.id)}
                      aria-label={t(
                        `Ver detalles de ${grp.labelEs}`,
                        `View details for ${grp.labelEn}`
                      )}
                      className={`w-8 h-8 rounded-full bg-white text-slate-900 font-serif font-extrabold text-sm border border-slate-300 shadow-sm flex items-center justify-center transition-transform cursor-pointer ${
                        isSelected ? 'scale-110 ring-2 ring-rose-500' : 'hover:scale-110'
                      }`}
                    >
                      i
                    </button>
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
                  '¡Haz click sobre el grupo o en el ícono (i) para ver fechas, dirección y anfitriones!',
                  'Click on any group or its (i) icon to see dates, address, and hosts!'
                )}
              </p>
            </div>
          </div>

          {/* Active Editable Life Group Details Card */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Independent Group Image */}
              <div className="lg:col-span-4 relative min-h-[220px]">
                <img
                  src={selectedGroup.image}
                  alt={lang === 'es' ? selectedGroup.labelEs : selectedGroup.labelEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {selectedGroup.hashtag}
                  </span>
                </div>
              </div>

              {/* Editable Text Details & Schedule Table */}
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                    {lang === 'es' ? selectedGroup.taglineEs : selectedGroup.taglineEn}
                  </span>
                  {selectedGroup.verseEs && (
                    <p className="font-serif italic text-xs text-slate-500">
                      «{lang === 'es' ? selectedGroup.verseEs : selectedGroup.verseEn}»
                    </p>
                  )}
                </div>

                {/* Locations & Hosts */}
                <div className="space-y-2.5">
                  {selectedGroup.locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1"
                    >
                      <div className="flex items-start gap-2 font-semibold text-slate-900">
                        <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-6 text-slate-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          {t('Anfitrión:', 'Host:')} <strong>{loc.hosts}</strong>
                        </span>
                        {'phone' in loc && loc.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{loc.phone}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schedule Grid */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-600" />
                    <span>{t('Calendario de Encuentros', 'Meeting Schedule')}</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedGroup.schedule.map((row) => (
                      <div
                        key={row.month}
                        className="p-2.5 rounded-xl bg-slate-900 text-white text-xs space-y-0.5"
                      >
                        <span className="font-bold text-rose-400 block text-[11px]">
                          {row.month}
                        </span>
                        <span className="block font-semibold">
                          {t('Días:', 'Days:')} {row.days}
                        </span>
                        <span className="text-[11px] text-stone-300 block">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                      `Hola, quiero inscribirme al Grupo de Vida ${selectedGroup.labelEs}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
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
              href={`https://maps.google.com/?q=${encodeURIComponent(
                'Iglesia Cristiana En El Lugar Santisimo Av. Calle 24 #72b-30, Bogota, Colombia'
              )}`}
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
