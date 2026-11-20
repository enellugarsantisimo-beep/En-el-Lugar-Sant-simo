import React, { useState } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageCircle,
  HeartHandshake,
  Sparkles,
  Users,
  Shield,
  Smile,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

interface SlideItem {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
  frameTransform?: string;
  frameOrigin?: string;
}

interface GroupImageSliderProps {
  slides: SlideItem[];
  prevLabel: string;
  nextLabel: string;
  strictAspect?: boolean;
}

const GroupImageSlider: React.FC<GroupImageSliderProps> = ({
  slides,
  prevLabel,
  nextLabel,
  strictAspect = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className={`relative w-full ${
        strictAspect ? '' : 'h-full'
      } aspect-[4/3] overflow-hidden group select-none bg-slate-900`}
    >
      {/* Stacked Slides (always positioned at inset-0 to avoid off-screen track culling) */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.src + idx}
            aria-hidden={!isActive}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ease-out ${
              isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
              <img
                src={slide.src}
                alt={`${slide.alt} (${idx + 1}/${slides.length})`}
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                style={{
                  objectPosition: slide.objectPosition ?? '50% 0%',
                  transform: slide.frameTransform,
                  transformOrigin: slide.frameOrigin,
                }}
                className={`w-full h-full ${
                  slide.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>
          </div>
        );
      })}

      {/* Subtle Bottom Gradient for Controls */}
      {slides.length > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

          {/* Counter Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/65 backdrop-blur-sm text-white text-[10px] font-mono font-semibold border border-white/15 z-20">
            {currentIndex + 1} / {slides.length}
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={prevLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/65 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 opacity-90 hover:opacity-100 transition-opacity cursor-pointer z-20"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/65 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 opacity-90 hover:opacity-100 transition-opacity cursor-pointer z-20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-5 bg-white shadow-sm'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const CommunityPage: React.FC<CommunityPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const { t } = useLanguage();

  const prevLabel = t('Imagen anterior', 'Previous image');
  const nextLabel = t('Siguiente imagen', 'Next image');

  // Official photos for Dirección Pastoral (Pastoras Yuri Arenas y Cecilia Cuervo)
  const pastoralSlides: SlideItem[] = [
    {
      src: '/assets/aistudio/20230910_105343_60a9f334.jpg',
      alt: t(
        'Pastoras Yuri Arenas y Cecilia Cuervo - Dirección Pastoral',
        'Pastors Yuri Arenas and Cecilia Cuervo - Pastoral Leadership'
      ),
      objectPosition: '50% 30%',
    },
    {
      src: '/assets/aistudio/IMG_6225_6134ce8d.jpg',
      alt: t(
        'Pastoras Cecilia Cuervo y Yuri Arenas ministrando - Dirección Pastoral',
        'Pastors Cecilia Cuervo and Yuri Arenas ministering - Pastoral Leadership'
      ),
      objectPosition: '50% 10%',
    },
    {
      src: '/assets/aistudio/20230910_110750_e9804e22.jpg',
      alt: t(
        'Pastoras Cecilia Cuervo y Yuri Arenas en el altar - Dirección Pastoral',
        'Pastors Cecilia Cuervo and Yuri Arenas on stage - Pastoral Leadership'
      ),
      objectPosition: '50% 34%',
      frameTransform: 'scale(1.22)',
      frameOrigin: '49% 34%',
    },
  ];

  const youthSlides: SlideItem[] = [
    {
      src: '/assets/aistudio/IMG_5040_d839e453.png',
      alt: t('Grupo de Jóvenes 1', 'Youth Group 1'),
    },
    {
      src: '/assets/youth/IMG_6846_web.jpg',
      alt: t('Grupo de Jóvenes 2', 'Youth Group 2'),
      objectPosition: '50% 45%',
    },
    {
      src: '/assets/youth/IMG_4638_web.jpg',
      alt: t('Grupo de Jóvenes 3', 'Youth Group 3'),
      objectFit: 'contain',
      objectPosition: '50% 50%',
    },
    {
      src: '/assets/aistudio/IMG_1423_463aaefa.JPG',
      alt: t('Grupo de Jóvenes 4', 'Youth Group 4'),
      objectPosition: '50% 45%',
    },
  ];

  const couplesSlides: SlideItem[] = [
    { src: CHURCH_INFO.images.devotional, alt: t('Grupo de Parejas 1', 'Couples Group 1') },
    { src: CHURCH_INFO.images.community, alt: t('Grupo de Parejas 2', 'Couples Group 2') },
    { src: CHURCH_INFO.images.worship, alt: t('Grupo de Parejas 3', 'Couples Group 3') },
    { src: CHURCH_INFO.images.bocachica, alt: t('Grupo de Parejas 4', 'Couples Group 4') },
  ];

  const womenSlides: SlideItem[] = [
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-19_at_5.06.13_PM_e3d9d36e.jpeg',
      alt: t('Grupo de Damas 1 - Encuentro Mujeres', 'Women’s Group 1 - Women’s Encounter'),
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-19_at_5.10.40_PM_b4cb73fb.jpeg',
      alt: t('Grupo de Damas 2', 'Women’s Group 2'),
    },
    {
      src: '/assets/aistudio/IMG_2284_9b152a54.jpg',
      alt: t('Grupo de Damas 3', 'Women’s Group 3'),
    },
    {
      src: '/assets/aistudio/IMG_1622_7fcb5f8a.jpg',
      alt: t('Grupo de Damas 4', 'Women’s Group 4'),
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.18.19_PM_1__a527bff0.jpeg',
      alt: t('Grupo de Damas 5', 'Women’s Group 5'),
      objectPosition: '50% 45%',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.18.19_PM_bcbf3f1b.jpeg',
      alt: t('Grupo de Damas 6', 'Women’s Group 6'),
      objectPosition: '50% 45%',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.18.21_PM__1__4cf0fc38.jpeg',
      alt: t('Grupo de Damas 7', 'Women’s Group 7'),
      objectPosition: '50% 35%',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.18.21_PM_00846d68.jpeg',
      alt: t('Grupo de Damas 8', 'Women’s Group 8'),
      objectPosition: '50% 35%',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_3.16.28_PM__1___1__26398fab.jpeg',
      alt: t('Grupo de Damas 9', 'Women’s Group 9'),
      objectPosition: '50% 35%',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_3.16.28_PM__2__4599b7e7.jpeg',
      alt: t('Grupo de Damas 10', 'Women’s Group 10'),
      objectPosition: '50% 50%',
    },
  ];

  const menSlides: SlideItem[] = [
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.12.46_PM_e3907ab8.jpeg',
      alt: t('Grupo de Hombres 1', 'Men’s Group 1'),
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.13.04_PM_6d7e7268.jpeg',
      alt: t('Grupo de Hombres 2', 'Men’s Group 2'),
    },
  ];

  const holyKidsSlides: SlideItem[] = [
    {
      src: '/assets/aistudio/IMG_3342_047d30a2.jpg',
      alt: t('Holy Kids 1', 'Holy Kids 1'),
    },
    {
      src: '/assets/aistudio/IMG_3212_501b3979.jpg',
      alt: t('Holy Kids 2', 'Holy Kids 2'),
    },
    {
      src: '/assets/aistudio/IMG_3358_a7de2b96.jpg',
      alt: t('Holy Kids 3', 'Holy Kids 3'),
    },
    {
      src: '/assets/aistudio/ima_inf_6f872373.jpg',
      alt: t('Holy Kids 4', 'Holy Kids 4'),
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">
      {/* 1. INDEPENDENT PAGE HERO */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">
              {t('Grupos de vida', 'Life Groups')}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              {t('Grupos de vida · Comunidad y Liderazgo', 'Life Groups · Community & Leadership')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              {t(
                'No fuiste creado para vivir la fe en soledad',
                'You Were Not Created to Live Faith Alone'
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t(
                'Caminamos juntos bajo dirección pastoral, fortaleciendo a jóvenes, parejas, damas, hombres y niños conforme al diseño y la Palabra de Dios.',
                'We walk together under pastoral leadership, strengthening youth, couples, women, men, and children according to God’s design and Word.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECCIÓN PASTORAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-8 sm:p-10 lg:p-14 space-y-5 flex flex-col justify-center">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('PASTORAS YURI ARENAS Y CECILIA CUERVO', 'PASTORS YURI ARENAS AND CECILIA CUERVO')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  {t('DIRECCIÓN PASTORAL', 'PASTORAL LEADERSHIP')}
                </h2>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t(
                  'Desde la partida de nuestro Pastor y Fundador Elberto Guzmán, la dirección de nuestra congregación fue asumida por nuestra Pastora Yuri junto con el apoyo de su madre la Pastora Cecilia. Juntas se han propuesto continuar hacia adelante con la obra del Señor, enfocadas en la guía y promesas que Dios ha dado a nuestra congregación. Siendo diligentes, obrando en obediencia, sabiduría y bajo la palabra de Dios para direccionar al equipo de líderes y servidores hacia el camino que nos lleve a ver el cumplimiento de las palabras de Dios.',
                  'Since the passing of our Pastor and Founder Elberto Guzmán, the leadership of our congregation has been assumed by our Pastor Yuri together with the support of her mother, Pastor Cecilia. Together they have purposed to press forward with the work of the Lord, focused on the guidance and promises God has given our congregation—being diligent, acting in obedience, wisdom, and under the Word of God to direct the team of leaders and servants toward the path that leads to the fulfillment of God’s promises.'
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenPrayerModal}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  {t('Solicitar Oración Pastoral', 'Request Pastoral Prayer')}
                </button>
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-stone-200 border border-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 p-4 sm:p-6 md:pl-0 md:pr-8 md:py-8 flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
                <GroupImageSlider
                  slides={pastoralSlides}
                  prevLabel={prevLabel}
                  nextLabel={nextLabel}
                  strictAspect
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRUPOS DE VIDA: JÓVENES, PAREJAS, DAMAS, HOMBRES Y HOLY KIDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Grupo de Jóvenes */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 min-h-[260px]">
              <GroupImageSlider slides={youthSlides} prevLabel={prevLabel} nextLabel={nextLabel} />
            </div>

            <div className="md:col-span-7 p-8 sm:p-10 space-y-4 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                  {t('VIVIENDO PARA CRISTO, IMPACTANDO AL MUNDO', 'LIVING FOR CHRIST, IMPACTING THE WORLD')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE JÓVENES', 'YOUTH GROUP')}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de jóvenes es un espacio para conectar, crecer y descubrir el propósito que Dios tiene para nuestras vidas. Queremos inspirar a una generación apasionada por Cristo que haga la diferencia en su comunidad y más allá. Desde los 16 hasta los 26 años, Adultos de 26 hasta los 36 años.',
                  'Our youth group is a space to connect, grow, and discover the purpose God has for our lives. We want to inspire a generation passionate for Christ that makes a difference in their community and beyond. Ages 16 to 26, and Young Adults from 26 to 36 years old.'
                )}
              </p>

              <div className="flex flex-wrap gap-3 pt-1 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 font-semibold text-slate-800">
                  {t('Jóvenes: 16 a 26 años', 'Youth: Ages 16–26')}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 font-semibold text-slate-800">
                  {t('Adultos Jóvenes: 26 a 36 años', 'Young Adults: Ages 26–36')}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información para unirme al Grupo de Jóvenes.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('Unirme al Grupo de Jóvenes', 'Join Youth Group')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo de Parejas */}
        <div className="rounded-3xl bg-stone-100 border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-7 p-8 sm:p-10 space-y-4 order-2 md:order-1 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                  {t(
                    'FORTALECIENDO MATRIMONIOS BAJO EL DISEÑO DE DIOS',
                    'STRENGTHENING MARRIAGES UNDER GOD’S DESIGN'
                  )}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE PAREJAS', 'COUPLES GROUP')}
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t(
                  'En nuestro grupo de parejas, creemos que el matrimonio es un regalo de Dios y un reflejo de Su amor por nosotros. Nuestro propósito es fortalecer las relaciones matrimoniales, construir una comunidad sólida de parejas y crecer juntos en nuestra fe.',
                  'In our couples group, we believe marriage is a gift from God and a reflection of His love for us. Our purpose is to strengthen marital relationships, build a solid community of couples, and grow together in our faith.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, queremos recibir información sobre el Grupo de Parejas.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t('Conectar con el Grupo de Parejas', 'Connect with Couples Group')}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 min-h-[260px] order-1 md:order-2">
              <GroupImageSlider slides={couplesSlides} prevLabel={prevLabel} nextLabel={nextLabel} />
            </div>
          </div>
        </div>

        {/* Grupo de Damas */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 min-h-[260px]">
              <GroupImageSlider slides={womenSlides} prevLabel={prevLabel} nextLabel={nextLabel} />
            </div>

            <div className="md:col-span-7 p-8 sm:p-10 space-y-4 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-widest block">
                  {t('MUJERES DE PODER', 'WOMEN OF POWER')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE DAMAS', 'WOMEN’S GROUP')}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de damas es un espacio diseñado para mujeres que desean fortalecer su relación con Dios, crecer espiritualmente y conectarse con otras mujeres de fe. Juntas, buscamos glorificar a Dios en cada área de nuestras vidas y ser luz en nuestras familias, iglesias y comunidades.',
                  'Our women’s group is a space designed for women who want to strengthen their relationship with God, grow spiritually, and connect with other women of faith. Together, we seek to glorify God in every area of our lives and be a light in our families, churches, and communities.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre el Grupo de Damas.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>{t('Unirme al Grupo de Damas', 'Join Women’s Group')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo de Hombres */}
        <div className="rounded-3xl bg-stone-100 border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-7 p-8 sm:p-10 space-y-4 order-2 md:order-1 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                  {t('HOMBRES DE VALOR', 'MEN OF VALOR')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE HOMBRES', 'MEN’S GROUP')}
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de hombres es un lugar donde encontramos dirección, compañerismo y crecimiento en nuestra fe. Nos esforzamos por ser hombres íntegros, líderes en nuestras familias, iglesias y comunidades, mientras buscamos seguir el ejemplo de Cristo en nuestras vidas.',
                  'Our men’s group is a place where we find direction, fellowship, and growth in our faith. We strive to be men of integrity, leaders in our families, churches, and communities, while seeking to follow the example of Christ in our lives.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre el Grupo de Hombres.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Shield className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t('Unirme al Grupo de Hombres', 'Join Men’s Group')}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 min-h-[260px] order-1 md:order-2">
              <GroupImageSlider slides={menSlides} prevLabel={prevLabel} nextLabel={nextLabel} />
            </div>
          </div>
        </div>

        {/* Holy Kids */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 min-h-[260px]">
              <GroupImageSlider slides={holyKidsSlides} prevLabel={prevLabel} nextLabel={nextLabel} />
            </div>

            <div className="md:col-span-7 p-8 sm:p-10 space-y-4 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">
                  {t('ESCUELA INFANTIL', 'CHILDREN’S MINISTRY')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  HOLY KIDS
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'HOLY KIDS es un espacio pensado para niños y niñas donde aprenden sobre el amor de Dios de manera divertida y creativa. A través de juegos, historias bíblicas y actividades, buscamos que los pequeños crezcan en la fe, desarrollen valores cristianos y sean una luz en sus hogares, su iglesia y su comunidad.',
                  'HOLY KIDS is a space designed for boys and girls where they learn about God’s love in a fun and creative way. Through games, Bible stories, and activities, we help little ones grow in faith, develop Christian values, and be a light in their homes, church, and community.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre Holy Kids (Escuela Infantil).'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Smile className="w-4 h-4" />
                  <span>{t('Más información de Holy Kids', 'Learn More About Holy Kids')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENSAJE FINAL DE INVITACIÓN */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-lg">
          <p className="font-serif italic text-lg sm:text-2xl text-stone-100 leading-relaxed">
            {t(
              'Prepárate para iniciar un emocionante viaje hacia un servicio significativo y un compromiso más profundo con la obra de Nuestro Dios.',
              'Get ready to begin an exciting journey toward meaningful service and a deeper commitment to the work of Our God.'
            )}
          </p>
        </div>
      </section>
    </div>
  );
};
